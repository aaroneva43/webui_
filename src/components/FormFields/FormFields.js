import React, { Component } from 'react';
import { Button, ButtonGroup, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';
import { FormXSelect } from '../Layout/Select';
import { connect } from 'react-redux';
import './FormFields.scss';

function tooltip() {
  function toggle(bool) {
    this.setState({
      showTooltip: bool
    });
  }

  return (
    this.props.desc &&
    <div className="pull-right form-help-icon">
      <i className="fa fa-question-circle" onMouseEnter={ toggle.bind(this, true) } onMouseLeave={ toggle.bind(this, false) }></i>
      {
        this.state.showTooltip &&
        <div className="tooltip bs-tooltip-left show" role="tooltip">
          <div className="arrow"></div>
          <div className="tooltip-inner">
            { this.props.desc }
          </div>
        </div>
      }
    </div>
  );
};

@connect((store) => {
  return {
    store
  };
})

export class InputField extends Component {
    constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    };
  }

  render() {
    const { input, type, label, placeholder, unit, validDesc, desc, disabled, meta: { touched, error }, ...rest} = this.props
    return (
      <FormGroup>
        <Label className="control-label">{label} {error && <span className="form-must-icon">*</span>}</Label>

        { tooltip.call(this) }

        {
          unit &&
          <InputGroup>
            <input {...input} className="form-control" placeholder={placeholder} type={type==="number" ? "number" : "text"} disabled={disabled} {...rest} />
            <InputGroupAddon className="form-must-icon">{unit}</InputGroupAddon>
            { touched && error && <span className="form-hint-text">{error}</span> }
          </InputGroup>
        }

        {
          !unit &&
          <span>
            <input {...input} className="form-control" placeholder={placeholder} type={type==="number" ? "number" : "text"} disabled={disabled} {...rest} />
            { touched && error && <span className="form-hint-text">{error}</span> }
          </span>
        }
      </FormGroup>
    );
  }
}

export class SelectField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    };
  }

  render() {
    const { input, type, label, placeholder, unit, validDesc, desc, disabled, meta: { touched, error }, ...rest} = this.props
    return (
      <FormGroup>
        <Label className="control-label">{label} {error && <span className="form-must-icon">*</span>}</Label>
        { tooltip.call(this) }
        <div>
          <FormXSelect {...input} className={touched && error ? "is-err" : ''} placeholder={placeholder} onBlur={() => input.onBlur()} disabled={disabled} {...rest}/>
          {touched && error && <span className="form-hint-text">{error}</span>}
        </div>
      </FormGroup>
    );
  }
}

export class RadioField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTooltip: false
    };
  }

  render() {
    const { input, label, placeholder, desc, disabled, meta: { touched, error }, ...rest} = this.props;
    console.log('dave (form fields 22 =======> ', this.props)
    return (
      <div>
        <Label className="control-label">{label} {error && <span className="form-must-icon">*</span>}</Label>
        <FormGroup>
        { tooltip.call(this) }
        <div className="radio-btn-group" role="group">
        {
          this.props.options.map((option, i)=>{
            return (
              <label>
                <input {...input} label={option.label} value={option.value} checked={option.value === input.value} placeholder={placeholder} type="radio" disabled={disabled} {...rest} />
                <em >{option.label}</em>
              </label>
            )
          })
        }
        {touched && error && <span className="form-hint-text">{error}</span>}
        </div>
        </FormGroup>
      </div>
    );
  }
}

export class CheckBoxField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTooltip: false
    };
  }

  render() {
    const { input, label, placeholder, desc, disabled, meta: { touched, error }, ...rest} = this.props;

    return (
      <div>
        <Label className="control-label">{label} {error && <span className="form-must-icon">*</span>}</Label>
        { tooltip.call(this) }
        {
          this.props.options.map((option, i)=>{
            return (
              <FormGroup>
                <Label className="checkbox c-checkbox">
                  <input {...input} label={option.label} value={option.value} placeholder={placeholder} type="checkbox" disabled={disabled} {...rest} />
                  <em className="fa fa-circle"></em>{option.label}
                </Label>
                {touched && error && <span className="form-hint-text">{error}</span>}
              </FormGroup>
            )
          })
        }
      </div>
    );
  }
}

export class ToggleField extends Component {
    constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    };
  }

  render() {
    const { input, label, placeholder, desc, disabled, meta: { touched, error }, ...rest} = this.props;
    return (
      <FormGroup>
      <Label className="control-label">{label} {error && <span className="form-must-icon">*</span>}</Label>
      { tooltip.call(this) }
      <div>
      <label className="switch switch-lg">
        <input {...input} placeholder={placeholder} type="checkbox" checked={input.value ? true : false} disabled={disabled} {...rest} />
        <em></em>
      </label>
      {touched && error && <span className="form-hint-text">{error}</span>}
      </div>
     </FormGroup>
    );
  }
}

export const LabelField = ({label, validDesc, desc, meta: { touched, error }}) => (
  <div>
    <label className="control-label">{label} {error && <span className="form-must-icon">*</span>}</label>
  </div>
);

export class TextAreaField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    };
  }

  render() {
    const { input, type, label, placeholder, unit, validDesc, desc, disabled, meta: { touched, error }, ...rest} = this.props
    return (
      <FormGroup>
        <Label className="control-label">{label} {error && <span className="form-must-icon">*</span>}</Label>
        { tooltip.call(this) }
        <div>
          <textarea {...input} className="form-control textarea" placeholder={placeholder} disabled={disabled} {...rest} />
          {touched && error && <span className="form-hint-text">{error}</span>}
        </div>
      </FormGroup>
    )
  }
}

export class FileField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTooltip: false
    };
  }

  render() {
    const { input, type, label, placeholder, unit, validDesc, desc, disabled, meta: { touched, error }, ...rest} = this.props
    return (

      // <FormGroup validationState={touched && error ? "error" : ''}>
      // <label className="control-label">{label} {error && <span className="form-must-icon">*</span>}</label>
      // <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={
      // <Popover id="file-field-popover">
      //     <strong>{validDesc}</strong>{desc}
      // </Popover>}
      // >
      //     <em className="fa fa-question-circle pull-right form-help-icon"></em>
      // </OverlayTrigger>
      // <input {...input} data-classbutton="btn btn-default" data-classinput="form-control inline" className="form-control filestyle" placeholder={placeholder} type="file" disabled={disabled} {...rest} />
      // {touched && error && <span className="form-hint-text">{error}</span>}
      // </FormGroup>

      <FormGroup>
        <Label className="control-label">{label} {error && <span className="form-must-icon">*</span>}</Label>
        { tooltip.call(this) }

        <div>
         <input {...input} data-classbutton="btn btn-default" data-classinput="form-control inline" className="form-control filestyle" placeholder={placeholder} type="file" disabled={disabled} {...rest} />
          {touched && error && <span className="form-hint-text">{error}</span>}
        </div>
      </FormGroup>
    )
  }
}
