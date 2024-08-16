import { alpha, Box, Paper, Stack } from "@mui/material";
import _ from "lodash";
import React, { Suspense, useState } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";

import LoadComponent from "../components/Loading/LoadComponent";
import SearchBox from "../components/search/SearchBox";
import SortBox from "../components/table/sort/SortBox";
import UserList from "../components/user/UserList";

import { useTranslation } from "react-i18next";
import { useAppContext } from "../context/app/app-context";
import { supabase } from "../core/createClient";

export default function User() {
  const data = useLoaderData();

  const { themeColor, mode } = useAppContext();
  const { t } = useTranslation();

  const boxBgColor = mode.palette.boxBg;
  const headerTableColor = alpha(themeColor.palette.primary.light, 0.2);
  const borderColor = mode.palette.borderColor;
  const typography = mode.palette.typography;
  const btnColor = themeColor.palette.primary.main;

  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [usersValue, setUsersValue] = useState(null);
  
  const [loading, setLoading] = useState(false);

  // const debouncedFetchUser = debounce((value) => {
  //   if (value.length > 1) {
  //     searchUser(value);
  //   } else if (!value) setUsers(rows);
  // }, 500);

  const searchUser = async (name) => {
    const lowerName = name.toLowerCase();
    setLoading(true);
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .ilike("userName", `%${lowerName}%`);

    setUsersValue(data);
    setLoading(false);
  };

  const debouncedFetchUser = _.debounce((value) => {
    if (value.length >= 2) {
      searchUser(value);
    } else if (!value) setUsersValue(null);
  }, 500);
  // const ascendingSort = () => {
  //   const sortUsers = users.sort((a, b) => {
  //     const date1 = new Date(a.date);
  //     const date2 = new Date(b.date);
  //     return date1 - date2;
  //   });
  //   setUsers(sortUsers);
  // };

  // const descendingSort = () => {
  //   const sortUsers = users.sort((a, b) => {
  //     const date1 = new Date(a.date);
  //     const date2 = new Date(b.date);
  //     return date2 - date1;
  //   });
  //   setUsers(sortUsers);
  // };

  const descendingSort = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .order("date", { ascending: true });

    setUsersValue(data);
    setLoading(false);
  };

  const sortUserDate = (item) => {
    if ( item === "Newest" || item ==="جدید ترین") {
      setUsersValue(null);
    } else {
      descendingSort();
    }
  };

  // const sortUserDate = () => {
  //   if (userSortValue === "Newest") {
  //     ascendingSort();
  //   } else {
  //     descendingSort();
  //   }
  // };

  return (
    <Box component={Paper} elevation={2} sx={{ backgroundColor: boxBgColor }}>
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent=" flex-start"
        gap={2}
        sx={{ padding: 2, marginBottom: 2 }}
      >
        <SortBox
          sortData={sortUserDate}
          // selectedIndex={userSortValue}
          // setSelectedIndex={setUserSortValue}
        />

        <SearchBox
          handleSearch={debouncedFetchUser}
          placeholderText={t("search.searchPlaceholderUser")}
        />
      </Stack>

      <Suspense fallback={<LoadComponent />}>
        <Await resolve={data.users}>
          {(fetchUsers) => (
            <UserList
              users={fetchUsers}
              usersValue={usersValue}
              loading={loading}
            />
          )}
        </Await>
      </Suspense>
    </Box>
  );
}

export async function userLoader() {
  return defer({
    users: fetchUsers(),
  });
}

const fetchUsers = async () => {
  const { data } = await supabase
    .from("users")
    .select("*")
    .order("date", { ascending: false });

  return data;
  // console.log("Data", data)
};
