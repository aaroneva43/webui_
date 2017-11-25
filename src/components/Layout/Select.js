import React from 'react';
import Select from 'react-select';

export class FormXSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.initialValue || ''
        };

        console.log('david xselect ===>', this.props)
    }
    onAdd(){
        this.props.onCreateNew();
        console.log(this.props.onCreateNew);
    }

    onEdit(){
        this.props.onEditEntry();
        console.log(this.props.onEditEntry);
    }

    renderLink() {
        return <button type="button" className="btn-xselect" onClick={this.onAdd.bind(this)}>Create New</button>;
    }

    renderOption(option) {
        return <span>{option.label} {option.link}</span>;
    }

    setValue(value) {
        console.log('select val', value);
        if (typeof this.props.onValChange !== 'undefined') {
            this.props.onValChange(value);
        }
        this.props.onChange(value)
    }

    renderValue(option) {
        var editBtn = ' ';
        // disabled edit pencil icon for now
        // if (typeof option.label === 'undefined') {
        //     editBtn = '';
        // }
        // else {
        //     editBtn = <button type="button" className="select-edit" onClick={this.onEdit.bind(this)}><em className="fa fa-pencil"/></button>;
        // }
        return <span>{option.label} {editBtn}</span>;
    }

    render() {
        const { value } = this.props;
        var xSelect;
        const divProps = Object.assign({}, this.props);
        delete divProps.layout;

        {/* append add option */}
        if (divProps.addOpt === true) {
            var addOpt = { label: '', value: '999', disabled: true, link: this.renderLink() };
            var array = divProps.options.length ? divProps.options.slice() : [];
            array.push(addOpt);

            xSelect =
                <Select
                    {...divProps}
                    placeholder="Click to select"
                    options={array}
                    optionRenderer={this.renderOption.bind(this)}
                    onChange={this.setValue.bind(this)}
                    value={value || ''}
                    valueRenderer={this.renderValue.bind(this)}
                />;
        }
        else
        {
            xSelect =
                <Select
                    {...divProps}
                    placeholder="Click to select"
                    options={divProps.options}
                    optionRenderer={this.renderOption.bind(this)}
                    onChange={this.setValue.bind(this)}
                    value={value || ''}
                />;
        }

        return (
            <div>
                {xSelect}
            </div>
        );
    }
}

export class XSelect extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.initialValue || ''
        };
    }
    onAdd(){
        this.props.onCreateNew();
        console.log(this.props.onCreateNew);
    }

    onEdit(){
        this.props.onEditEntry();
        console.log(this.props.onEditEntry);
    }

    renderLink() {
        return <button type="button" className="btn-xselect" onClick={this.onAdd.bind(this)}>Create New</button>;
    }

    renderOption(option) {
        return <span>{option.label} {option.link}</span>;
    }

    setValue(value) {
        this.setState({value, value});
        if (typeof this.props.onValChange !== 'undefined') {
            this.props.onValChange(value);
        }
    }

    renderValue(option) {
        var editBtn;
        if (typeof option.label === 'undefined') {
            editBtn = '';
        }
        else {
            editBtn = <button type="button" className="select-edit" onClick={this.onEdit.bind(this)} ><em className="fa fa-pencil"/></button>;
        }
        return <span>{option.label} {editBtn}</span>;
    }

    render() {
        var xSelect;
        const divProps = Object.assign({}, this.props);
        delete divProps.layout;

        {/* append add option */}
        if (divProps.addOpt === true) {
            var addOpt = { label: '', value: '999', disabled: true, link: this.renderLink() };
            var array = divProps.options.slice();
            array.push(addOpt);

            xSelect =
                <Select
                    {...divProps}
                    placeholder="Click to select"
                    options={array}
                    optionRenderer={this.renderOption.bind(this)}
                    onChange={this.setValue.bind(this)}
                    value={this.state.value}
                    valueRenderer={this.renderValue.bind(this)}
                />;
        }
        else
        {
            xSelect =
                <Select
                    {...divProps}
                    placeholder="Click to select"
                    options={divProps.options}
                    optionRenderer={this.renderOption.bind(this)}
                    onChange={this.setValue.bind(this)}
                    value={this.state.value}
                />;
        }

        return (
            <div>
                {xSelect}
            </div>
        );
    }
}

// XSelect.propTypes = {
//     onCreateNew: React.PropTypes.func,
//     onValChange: React.PropTypes.func,
//     onEditEntry: React.PropTypes.func
// };

// FormXSelect.propTypes = {
//     onCreateNew: React.PropTypes.func,
//     onValChange: React.PropTypes.func,
//     onEditEntry: React.PropTypes.func
// };