import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import '../../../css/mdsp-css.min.css';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(name, remark, inactive, operator, lastmdfdate) {
  return { name, remark, inactive, operator, lastmdfdate};
}

const rows = [
  createData('Malaysia', 'nothing', false, 'Lyon', '2019-09-11 12:00:00am'),
  createData('Singapore','nothing', true, 'Lyon', '2019-09-11 12:00:00am'),
  createData('India','nothing', false, 'Lyon', '2019-09-11 12:00:00am'),
  createData('Thailand', 'nothing', false, 'Lyon', '2019-09-11 12:00:00am'),
  createData('China','nothing', false, 'Lyon', '2019-09-11 12:00:00am'),
];

export default function SimpleTable() {
  const classes = useStyles();

const handleClick = () =>{
    
}

  return (
    <Paper className="mdsp mdsp-defaults">
      <Table className="table table--alternate">
        <TableHead>
          <TableRow>
            <TableCell>Country Name</TableCell>
            <TableCell align="right">Remarks</TableCell>
            <TableCell align="right">Inactive</TableCell>
            <TableCell align="right">Operator</TableCell>
            <TableCell align="right">Last Modified Date</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.remark}</TableCell>
              <TableCell align="right"><Checkbox disabled checked={row.inactive}></Checkbox></TableCell>
              <TableCell align="right">{row.operator}</TableCell>
              <TableCell align="right">{row.lastmdfdate}</TableCell>
              <TableCell align="right"><Tooltip title="Edit"><IconButton onClick={handleClick}><EditIcon/></IconButton></Tooltip></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}