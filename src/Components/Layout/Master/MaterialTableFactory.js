import React from 'react';
import MaterialTable from 'material-table';
import EditIcon from '@material-ui/icons/Edit';
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import SaveAlt from '@material-ui/icons/SaveAlt'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Add from '@material-ui/icons/Add'
import Check from '@material-ui/icons/Check'
import FilterList from '@material-ui/icons/FilterList'
import Remove from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete';
import ClearIcon from '@material-ui/icons/Clear';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Grow from '@material-ui/core/Grow';


export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Factory', field: 'Factory' },
      { title: 'Detail', field: 'Detail' },
      { title: 'Year', field: 'Year', type: 'numeric' },
      { title: 'Remarks', field: 'Remark' },
      { title: 'Operator', field: 'Operator' },
      { title: 'Last Modifield Date',  field: 'lmd'},
    ],
    data: [
      { Factory: 'F1', Detail: 'Rubber', Year: 1995, Remark: 'N/A', Operator:'Lyon',lmd:'03/10/2019 10:55:00am'},
      { Factory: 'F11', Detail: 'Rubber2', Year: 2015, Remark: 'N/A', Operator:'Manu',lmd:'09/09/2017 5:50:00pm'},
      { Factory: 'F13', Detail: 'Rubber3', Year: 1997, Remark: 'N/A', Operator:'Banu',lmd:'05/01/2015 7:50:00am'},
      { Factory: 'F32', Detail: 'Rubber5', Year: 2005, Remark: 'N/A', Operator:'Pari',lmd:'04/03/2012 12:50:00pm'},
    ],
  });

  return (
    <Grow in={true}>
    <MaterialTable
        icons={{
            Edit:EditIcon,
            Check: Check,
            DetailPanel: ChevronRight,
            Export: SaveAlt,
            Filter: FilterList,
            FirstPage: FirstPage,
            LastPage: LastPage,
            NextPage: ChevronRight,
            PreviousPage: ChevronLeft,
            Search: Search,
            ViewColumn:ViewColumn,
            Delete:DeleteIcon,
            Clear : ClearIcon,
            Add: Add,
            SortArrow:ArrowUpward,
            ResetSearch:ClearIcon,
            ThirdStateCheck:Remove
        }}
      title="Factory"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }
    
    }
    />
    </Grow>
  );
}
