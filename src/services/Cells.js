import React, {Component} from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';

export function AvailabilityCell() {
  return {
    Cell: ({ original }) => {
      let classes = 'fa fa-check-circle text-'+original.availability;
      return (
        <span title={ original.availability }>
          <i className={ classes }></i>
        </span>
      );
    },
    Header: 'Availability',
    accessor: 'availability'
  };
}

export function ActionsCell(cols) {
  return {
    Cell: ({ original }) => {
      return (
        <span>
          <span title="Edit">
           <i className="fa fa-pencil" onClick={this.handleOnForm.bind(this, original, 'edit')} ></i>
          </span>{' '}
          <span title="Delete">
           <i className="fa fa-times" onClick={this.deleteRow.bind(this, original)}></i>
          </span>{' '}
          <span title="Copy">
           <i className="fa fa-copy"></i>
          </span>{' '}
        </span>
      );
    },
    Header: () => {
      return (
        <Columns columns={ cols } callback={ this.toggleFilter } displayCols={ this.state.displayCols } displayColumns={ this.displayColumns } />
      );
    },
    accessor: 'actions',
    sortable: false,
    width: 75
  };
}

export function CheckboxCell() {
  return {
    Cell: ({ original }) => {
      return (
        <input
        type="checkbox"
        className="checkbox"
        checked={this.state.selected[original.mkey] === true}
        onChange={() => this.toggleRow(original)}
        />
      );
    },
    Header: () => {
      return (
        <input
        type="checkbox"
        className="checkbox"
        checked={this.state.selectAll === 1}
        ref={input => {
          if (input) {
            input.indeterminate = this.state.selectAll === 2;
          }
        }}
        onChange={() => this.toggleSelectAll()}
        />
      );
    },
    accessor: 'checkbox',
    sortable: false,
    width: 45
  };
}

class Columns extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      selected: this.props.displayCols
    };
    this.onChange = this.onChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onChange(selected) {
    this.props.displayColumns(selected);
    this.setState({ selected });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const colsList = (items) => {
      return items.map( (item) => {
        return {value: item.name, label: item.label};
      } ).filter( (item) => {
        return typeof item.value !== 'undefined';
      } );
    };

    return (
      <span>
        <i className="fa fa-cog" onClick={ this.toggle }></i>
        <i className="fa fa-filter ml-3" onClick={ this.props.callback } ></i>
        { this.state.dropdownOpen &&
          <div className="card card-columns">
            <div className="card-body">
              <DualListBox options={ colsList(this.props.columns) } selected={this.state.selected} onChange={this.onChange} />
            </div>
          </div>
        }
      </span>
    );
  }
}
