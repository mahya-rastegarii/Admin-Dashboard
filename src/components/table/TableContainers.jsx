import React, { useEffect, useState } from "react";

import {
  alpha,
  Box,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
 
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import { useAppContext } from "../../context/app/app-context";


const TableContainers = ({   children, headCells, count }) => {

    const {  themeColor, mode } = useAppContext();
  const { t } = useTranslation();

  const borderColor = mode.palette.borderColor;
  const typography = mode.palette.typography;
  const headerTableColor = alpha(themeColor.palette.primary.light, 0.1);

  

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: headerTableColor,
          color: typography,
          borderTop: "1px solid  ",
          borderColor: borderColor,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
    
    return (
      
            <TableContainer >
              <Table sx={{ padding: 0 }}>
                <TableHead>
                  <TableRow>
                    {headCells.map((headCell) => (
                      <StyledTableCell
                        key={headCell.id}
                        align={headCell.align}
                        style={{ minWidth: headCell.minWidth }}
                      >
                       
                      
                          <Typography
                            variant="body1"
                            component="h2"
                            sx={{ fontWeight: "bold" }}
                          >
                            {headCell.label}
                          </Typography>
                        
                      </StyledTableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody sx={{}}>
               
            
                 { children }
                 
                </TableBody>
               
              </Table>
            </TableContainer>
           
           
          
      );
}

export default TableContainers;