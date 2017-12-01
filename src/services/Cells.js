import React, {Component} from 'react';

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

export function ActionsCell() {
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
        <span>
          <i className="fa fa-cog" onClick={ this.toggleColsDD }></i>
          <i className="fa fa-filter ml-3" onClick={ this.toggleFilter } ></i>
        </span>
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
