import React, { memo } from "react";
import { 
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core";

import useStyles from "../styles/makeStyles";

const TableComponent = props => {

  const {
    row,
    rows,
  } = props;

  const styles = useStyles();

  return(
    <TableContainer component={Paper}>
      <Table className={styles.tableStyle} aria-label="Family Tree Table">
        <TableHead>
          <TableRow>
            {row}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            rows && rows.length > 0
            &&
            rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.first_name}
                </TableCell>
                <TableCell align="right">
                  {row.last_name}
                </TableCell>
                <TableCell align="right">
                  {row.relationship}
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );

};

export default TableComponent;