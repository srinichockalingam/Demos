import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
    hover: 'rgb(23,82,142)',
  },
}));

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  
}))(TableRow);

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

  return (
    <Grow in={true}>
    <Paper className={classes.root}>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Country Name</StyledTableCell>
            <StyledTableCell align="right">Remarks</StyledTableCell>
            <StyledTableCell align="right">Inactive</StyledTableCell>
            <StyledTableCell align="right">Operator</StyledTableCell>
            <StyledTableCell align="right">Last Modified Date</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.remark}</StyledTableCell>
              <StyledTableCell align="right"><Checkbox disabled checked={row.inactive}></Checkbox></StyledTableCell>
              <StyledTableCell align="right">{row.operator}</StyledTableCell>
              <StyledTableCell align="right">{row.lastmdfdate}</StyledTableCell>
              <StyledTableCell align="right"><Tooltip title="Edit"><IconButton><EditIcon/></IconButton></Tooltip></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    </Grow>
  );
}