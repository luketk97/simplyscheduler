import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHeaderColumn from '@material-ui/core/TableCell';
import TableRowColumn from '@material-ui/core/TableContainer';
import TableHeader from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const row = (x, i, header) =>
  <TableRow key={`tr-${i}`}>
    {header.map((y, k) =>
      <TableRowColumn key={`trc-${k}`}>
        {x[y.prop]}
      </TableRowColumn>
    )}
  </TableRow>;

export default ({ data, header }) =>
  <Table>
    <TableHeader>
      <TableRow>
        {header.map((x, i) =>
          <TableHeaderColumn key={`thc-${i}`}>
            {x.name}
          </TableHeaderColumn>
        )}
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((x, i) => row(x, i, header))}
      {this._generateRows()}
    </TableBody>
  </Table>;

_generateRows() {
    return this.state.data.map(el => {
      return (
            <TableRow>
                <TableRowColumn>{e1}</TableRowColumn>
                <TableRowColumn>{e1}</TableRowColumn>
                <TableRowColumn>{e1}</TableRowColumn>
                <TableRowColumn>{e1}</TableRowColumn>
                <TableRowColumn>{e1}</TableRowColumn>
                <TableRowColumn>{e1}</TableRowColumn>
                <TableRowColumn>{e1}</TableRowColumn>
                <TableRowColumn>{e1}</TableRowColumn>
            </TableRow>,
            <IconButton aria-label="delete" className={classes.margin} size="small">
                <AddIcon fontSize="inherit" />
            </IconButton>
      )
  }
}
