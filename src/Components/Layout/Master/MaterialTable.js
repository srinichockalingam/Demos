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
      { title: 'Country', field: 'Country' },
      { title: 'Remark', field: 'Remark' },
      { title: 'Inactive', field: 'Inactive', type: 'boolean' },
      { title: 'Operator', field: 'Operator' },
      {
        title: 'City',
        field: 'City',
        lookup: { 34: 'Kuala Lumpur', 63: 'Singapore' },
      },
    ],
    data: [
      { Country: 'Malaysia', Remark: 'Baran', Inactive: true, Operator: 'Mehmet', City:34},
      { Country: 'Singapore', Remark: 'Barn', Inactive: "", Operator: 'Mohd', City:63},
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
      title="Country"
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
