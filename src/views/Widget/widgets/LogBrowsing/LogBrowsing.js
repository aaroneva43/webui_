import React, {Component} from 'react';
import ReactTable from 'react-table';
import { Button, ButtonGroup } from 'reactstrap';
import { fields, filters, columnKeys } from './LogShow';
import Grid from '../../../../views/Grid/';
import { AvailabilityCell, ActionsCell, CheckboxCell } from '../../../../services/Cells';

class LogBrowsing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: []
    };
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  handleSelected(name) {
    let columns = columnKeys[name].map(function(item) {
      return fields[name][item];
    }).filter(function(item) {
      return item;
    });

    this.setColumns(columns);
  }

  setColumns(cols) {
    if(typeof cols === 'undefined' ) return;

    const that = this;

    if (cols[cols.length - 1].cell !== 'actions') {
      cols.push({ cell: 'actions' });
    }

    if (!_.isEmpty(cols)) {
      let colsList = cols.map(function(col) {
        if (col.cell === 'actions') {
          return ActionsCell.call(that);
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

  render() {
    return (
      <div className="widget">
        <SubTypes selected={ this.handleSelected.bind(this) } {...this.props} />
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
      </div>
    );
  }
}

class SubTypes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonsList: []
    };
  }

  componentDidMount() {
    let result = this.props.store.ConfigData.MenuPieces.history.children[0].modules.filter(( obj ) => {
      return obj.name == this.props.match.params.id3;
    });

    this.props.selected(result[0].sub[0].name);
    this.setState({buttonsList: result[0].sub});
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.match.params.id3 !== this.props.match.params.id3 ) {
      let result = nextProps.store.ConfigData.MenuPieces.history.children[0].modules.filter(( obj ) => {
        return obj.name == nextProps.match.params.id3;
      });

      this.props.selected(result[0].sub[0].name);
      this.setState({buttonsList: result[0].sub});
    }
  }

  handleSelected(e) {
    this.props.selected(e.target.dataset.name);
  }

  render() {
    const buttonsLink = (item, key) => {
      return (
        <Button onClick={ this.handleSelected.bind(this) } data-name={item.name} key={key}>{item.text}</Button>
      )
    };

    const buttonsList = (items) => {
      if(Array.isArray(items)) {
        return items.map( (item, index) => buttonsLink(item, index) );
      }
    };

    return (
      <ButtonGroup className="pb-3">
        {buttonsList(this.state.buttonsList)}
      </ButtonGroup>
    )
  }
}

export default LogBrowsing;
