import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import ReactTable from 'react-table';
import request from 'superagent';
import {Container, Table, Button} from 'reactstrap';
import 'react-table/react-table.css';
import { getModuleInfo } from '../../services/Data';
import ColsDD from './ColsDD';
import { AvailabilityCell, ActionsCell, CheckboxCell } from '../../services/Cells';
import SweetAlert from 'sweetalert2-react';

// redux stuff
import { configEntryAdd, configEntryEdit, configEntryDone, configEntryReset } from '../../actions/processActions';
import { deleteData } from '../../actions/formActions';
import { connect } from 'react-redux';
import './Grid.scss';

@connect((store) => {
  return {
    store
  };
})

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: [],
      gid: null,
      selected: {},
      selectAll: 0,
      modalShow: false,
      moduleInfo: {},
      formId: null,
      filterOpen: false,
      deleteRow: {},
      deleteBulk: [],
      showAlert: false,
      displayCols: [],
      colsDDOpen: false
    };

    this.toggleRow = this.toggleRow.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
    this.toggleColsDD = this.toggleColsDD.bind(this);
    this.setSelectedColumns = this.setSelectedColumns.bind(this);
  }

  componentDidMount() {
    const moduleInfo = getModuleInfo(this.props.gid, this.props.store.ConfigData);
    this.setState({ gid: this.props.gid, moduleInfo: moduleInfo, displayCols: this.getDisplayCols(moduleInfo.columns) }, function(){
      this.setColumns(moduleInfo.columns);
    });
    this.fetchGrid(this.props.gid);
    //this.fetchGrid('static/config_data/api/'+moduleInfo.module.modelName+'.json');
  }

  componentWillReceiveProps(nextProps) {
    //if(nextProps.store.ConfigData.formId) {
      this.setState({ formId: nextProps.store.ConfigData.formId, data: this.props.store.ConfigData.data }); // hack: just change the state
      this.fetchGrid(nextProps.gid);
    //}

    if(this.props.gid !== nextProps.gid){
      const moduleInfo = getModuleInfo(nextProps.gid, this.props.store.ConfigData);
      this.setState({ gid: nextProps.gid, moduleInfo: moduleInfo, formId: nextProps.store.ConfigData.formId, displayCols: this.getDisplayCols(moduleInfo.columns) }, function(){
        this.setColumns(moduleInfo.columns);
      });
      this.fetchGrid(nextProps.gid);
      //this.fetchGrid('static/config_data/api/'+moduleInfo.module.modelName+'.json');
      this.setState({colsDDOpen: false});
    }
  }

  // fetchGrid(api_url) {
  //   request
  //   .get(api_url)
  //   .set('Accept', 'application/json')
  //   .end((err, res) => {
  //     if (err) {
  //       // dispatch(fetchGridFailure(err));
  //     } else {
  //       console.log('dave (Grid', res.body.payload, ' - ', Array.isArray(res.body.payload))
  //       this.setState({ data: res.body.payload });
  //     }
  //   });
  // }

  // I think this has to be in dispatch
  // this.props.dispatch(fetchGrid())
  fetchGrid(gid) {
    if (gid == '1775') {
      let localArray = localStorage.getItem('data');
      //console.log('dave: (Grid) ==> ', localArray, ' - ', typeof localArray);
      let dataArray = [];
      if (localArray !== null) dataArray = JSON.parse(localArray);
      //console.log('dave (Grid parse json', dataArray, ' - ', Array.isArray(dataArray))
      this.setState({ data: dataArray });
    } else {
      let tempArr = [];
      this.setState({ data: tempArr });
    }
  }

  getDisplayCols(cols) {
    let counter = 0;
    let displayCols = cols.filter( (item, index) => {
      if (
        counter < 5 &&
        !['checkbox', 'actions', undefined].includes(item.cell)
      ) {
        counter++;
        return true;
      }
      return false;
    } ).map( (item) => {
      return item.name;
    } );

    return displayCols;
  }

  setColumns(cols) {
    if(typeof cols === 'undefined' ) return;

    const that = this;

    if (cols[0].cell !== 'checkbox') {
      cols.unshift({ cell: 'checkbox' });
    }
    if (cols[cols.length - 1].cell !== 'actions') {
      cols.push({ cell: 'actions' });
    }

    if (!_.isEmpty(cols)) {
      let colsList = cols.filter(function(item) {
        if (
          that.state.displayCols.includes(item.name) ||
          ['checkbox', 'actions'].includes(item.cell)
        ) {
          return true;
        }
        return false;
      }).map(function(col) {
        if (col.cell === 'checkbox') {
          return CheckboxCell.call(that);
        } else if (col.cell === 'actions') {
          return ActionsCell.call(that);
        } else if (col.cell === 'availability') {
          return AvailabilityCell();
        } else {
          return {
            Header: col.label,
            accessor: col.name
          };
        }
      });
      this.setState({ columns: colsList });
    }
  }

  toggleFilter() {
    this.setState({filterOpen: !this.state.filterOpen});
  }

  toggleColsDD() {
    this.setState({colsDDOpen: !this.state.colsDDOpen});
  }

  setSelectedColumns(cols) {
    let that = this;
    if (cols) {
      this.setState({ displayCols: cols, colsDDOpen: false }, function(){
        this.setColumns( that.state.moduleInfo.columns );
      });
    } else {
      this.setState({ colsDDOpen: false });
    }
  }

  toggleSelectAll() {
    let newSelected = {};

    if (this.state.selectAll === 0) {
      this.state.data.forEach(x => {
        newSelected[x.mkey] = true;
      });
    }

    this.setState({
      selected: newSelected,
      selectAll: this.state.selectAll === 0 ? 1 : 0
    });
  }

  toggleRow(row) {
    const newSelected = Object.assign({}, this.state.selected);
    newSelected[row['mkey']] = !this.state.selected[row['mkey']];

    //console.log('selected 2: ', newSelected)
    this.setState({
      selected: newSelected,
      selectAll: 2
    });
  }

  deleteRow(row) {
    console.log('delete clicked: ', this, ' row => ', row); // {mkey: 'test'}
    this.setState({deleteRow: row, showAlert: true});
  }

  handleOnDelete(obj) {
   console.log('bulk delete clicked: ', this, ' obj => ', obj); // {test: true}
    this.setState({deleteRow: obj, showAlert: true});
  }

  handleOnForm(row, handleType) {
    // pass obj with gid
    console.log('handleOnForm =====> : ', row, ' type: ', handleType)
    if (handleType && handleType === 'edit') {
      console.log('handleOnForm (Grid) row ==> ', row)
      this.props.configEntryEdit({gid: this.state.moduleInfo.module.gid, modalType: 'form', formdata: row});
    } else {
      this.props.configEntryAdd({gid: this.state.moduleInfo.module.gid, modalType: 'form'});
    }
  }

  render() {
    if (!this.state.columns.length) return (<div />);

    return (
      <div className="grid-page">
        <div className="header clearfix">
          <div className="pull-left">
            <Button color="primary" className='mr-3' onClick={ this.handleOnForm.bind(this) }>Create New</Button>{' '}
            <Button color="danger" onClick={ this.handleOnDelete.bind(this, this.state.selected)}>Delete</Button>{' '}
          </div>
          <div className='pull-right'>
            <Button color="secondary">Refresh</Button>
          </div>
        </div>
        { this.state.colsDDOpen &&
          <ColsDD allCols={ this.state.moduleInfo.columns } displayCols={ this.state.displayCols } setSelectedColumns={ this.setSelectedColumns } />
        }
        <div className="table">
          <ReactTable
            data={this.state.data}
            filterable
            columns={this.state.columns}
            defaultPageSize={10}
            minRows={3}
            noDataText= 'No Data Found'
            className={this.state.filterOpen !== true ? '' :  'filter-expand'}
          />
        </div>
        <SweetAlert
          show={this.state.showAlert}
          title='Are you sure to delete ?'
          text={this.state.deleteRow.mkey}
          showCancelButton
          onConfirm={() => { this.props.deleteData(this.state.deleteRow, this.state.data); this.setState({ showAlert: false, deleteRow: {}})}}
          onCancel={() => {
            this.setState({ showAlert: false, deleteRow: {} });
          }}
        />
      </div>
    );
  }
}

export default connect(null, {configEntryAdd, configEntryEdit, configEntryDone, configEntryReset, deleteData})(Grid);
// export default Grid;
