import { useTranslation } from "react-i18next";

const ChartData = () => {

const { t } = useTranslation();

 const coursesData = [
  { data: [35, 46, 22, 32, 54, 66, 87, 49, 55, 87, 90, 43], label: "frontEnd" },
  { data: [33, 52, 15, 34, 56, 88, 76, 51, 40, 76, 89, 23], label: "backEnd" },
  { data: [25, 67, 39, 45, 37, 78, 98, 43, 40, 56, 80, 90], label: "AI" },
  { data: [15, 88, 44, 25, 67, 14, 33, 42, 44, 55, 67, 87], label: "security" },
];

 const monthChart = [
  t("charts.month.jan"),
  t("charts.month.feb"),
  t("charts.month.mar"),
  t("charts.month.apr"),
  t("charts.month.may"),
  t("charts.month.jun"),
  t("charts.month.jul"),
  t("charts.month.aug"),
  t("charts.month.sep"),
  t("charts.month.oct"),
  t("charts.month.nov"),
  t("charts.month.dec"),
];

 const visit = [{ data: [35, 51, 74, 60, 80, 35, 86] }];

 const days = [
  t("charts.days.sat"),
  t("charts.days.sun"),
  t("charts.days.mon"),
  t("charts.days.tues"),
  t("charts.days.wed"),
  t("charts.days.thurs"),
  t("charts.days.fri"),
];

 const sale = [50, 50, 55, 65, 75, 75, 73, 69, 70, 68, 60, 60];

 const numberOfUser = [30, 35, 40, 55, 60, 65, 60, 55, 50, 45, 40, 50];

return {
    coursesData,
    monthChart,
    visit,
    days,
    sale,
    numberOfUser
}

}

export default ChartData;