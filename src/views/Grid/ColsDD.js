import React, {Component} from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';

class ColsDD extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: this.props.displayCols
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }

  onChange(selected) {
    this.setState({ selected });
  }

  onSave() {
    this.props.setSelectedColumns(this.state.selected);
  }

  onCancel() {
    this.props.setSelectedColumns();
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
      <div className="card-columns-dd-overlay">
        <div className="card card-columns-dd">
          <div className="card-body">
            <DualListBox options={ colsList(this.props.allCols) } selected={this.state.selected} onChange={this.onChange} />
            <button type="button" className="btn btn-primary btn-sm ml-1 mt-3 pull-right" onClick={this.onSave}>Save</button>
            <button type="button" className="btn btn-default btn-sm mt-3 pull-right" onClick={this.onCancel}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ColsDD;
