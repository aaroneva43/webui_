import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { InputField, SelectField, ToggleField, RadioField, CheckBoxField, TextAreaField, FileField, LabelField } from '../FormFields';
import { configEntryAdd, configEntryEdit, configEntryDone, configEntryReset } from '../../actions/processActions';
import classnames from 'classnames';
import { Field, reduxForm } from 'redux-form'
import _ from 'underscore';

@connect((store) => {
  return {
    store
  };
})

class Form extends Component {
   constructor(props) {
    super(props);
    this.state = {
      data: [],
      editors: {},
      mergedFields: [],
      specifics: {},
      gid: this.props.gid,
      formData: {},
      activeTab: 0,
      templates: this.props.store.ConfigData.Templates
    };
  }

  componentWillMount() {
    const props = this.props;
    // const configData = props.store.ConfigData;
    // const configVars = props.store.ConfigVars;
    const moduleInfo = props.moduleInfo;
    if (
      this.state.gid !== null &&
      !_.isEmpty(moduleInfo)
    ) {
      //  console.log('dave this props (Form) ===> ', props)
      //alert('this Props')
      this.fetchData(moduleInfo);
    }
  }

  componentWillReceiveProps(nextProps) {
    const props = nextProps;
    // const configData = nextProps.store.ConfigData;
    // const configVars = nextProps.store.ConfigVars;
    const moduleInfo = nextProps.moduleInfo;

   console.log('dave Store ==> (form.js) props: ', props)

    if (
      this.state.gid !== null &&
      !_.isEmpty(moduleInfo)
    ) {
      this.fetchData(moduleInfo);
    }
  }

  fetchData(props) {
    ///fids = specifics[props.gid].editors;
    ///Fields = _.omit(fids, ['excluded_fields']);

    let editorsObj = props.editors;
    let fieldsArr = props.fields;
    let Fields = [];
    let newObj = {};

    // console.log('editorsObj ==> ', editorsObj)
    // console.log('fieldsArr ===> ', fieldsArr)

    fieldsArr.map(arr=> {
      for (const prop in editorsObj) {
        if (arr.fieldName === prop) {
          newObj = Object.assign(arr, editorsObj[prop])
        } else {
          newObj = arr;
        }
      }
      return Fields.push(newObj);
    })

    // console.log('Fields ======> ', Fields)
    const NewFields = Fields.filter(elem => {
      if (elem.validate) {
        ///console.log('super dave name ooo : ', elem.name, '| validate: ', elem.validate, ' | type: ', typeof elem.validate)
        //console.log('super dave zzz: ', elem)
      }
      return elem.nodetype && elem.nodetype !== 'TABLE' && elem.label;
    })

    this.setState({
      mergedFields: NewFields
    })
  }

  renderField(fieldData, field) {
    let fieldType = 'InputField';
    let formField;
    let options = {};
    let addOptBool = false;
    let validateArr = [];

    // console.log('dave: fieldData: ', fieldData);
    // console.log('dave field : ', field);

     if (fieldData.options || fieldData.create) {
       if (fieldData.buttongroup) {
        fieldType = 'RadioField';
       } else {
        fieldType = 'SelectField';
       }
       options= fieldData.options ? fieldData.options.data : {}
       addOptBool = fieldData.create ? true : false
     }

     if (fieldData.switchbutton) {
       fieldType = 'ToggleField';
     }

   /// this.props.dispatch(openModal(gid, modalType));
   /// this.props.dispatch(configEntryAdd(fieldData.create.gid))

    switch (fieldType) {

      case 'SelectField':
        formField =
          <Field
              multi={fieldData.multi ? 'multi' : ''}
              name={fieldData.fieldName}
              label={fieldData.label}
              key={field}
              component={SelectField}
              options={options}
              desc={fieldData.help}
              helper={this.props.store.ConfigModal.modalform}
              addOpt={addOptBool}
              onCreateNew={() => this.props.dispatch(configEntryAdd({gid: fieldData.create.gid, modalType: 'form'}))}
              onEditEntry={() => this.props.dispatch(configEntryEdit(Action.cfgJson.sysNetworkInterface))}
              valueField="value"
          />
        break;

      case 'RadioField':
        formField =
          <Field
              name={fieldData.fieldName}
              label={fieldData.label}
              key={field}
              component={RadioField}
              options={options}
              value={options}
              desc={fieldData.help}
              helper={this.props.store.ConfigModal.modalform}
          />

      break;

      case 'CheckBoxField':
        formField =
          <Field
              name={fieldData.fieldName}
              label={fieldData.label}
              key={field}
              component={CheckBoxField}
              options={options}
              desc={fieldData.help}
              helper={this.props.store.ConfigModal.modalform}
          />

      break;

      case 'ToggleField':
        formField =
          <Field
              name={fieldData.fieldName}
              label={fieldData.label}
              key={field}
              component={ToggleField}
              desc={fieldData.help}
              helper={this.props.store.ConfigModal.modalform}
              valueField="value"
          />
        break;

      case 'TextAreaField':
        formField =
          <Field
              name={fieldData.fieldName}
              label={fieldData.label}
              key={field}
              component={TextAreaField}
              desc={fieldData.help}
              helper={this.props.store.ConfigModal.modalform}
          />

      break;

      default:
          formField =
            <Field
              name={fieldData.fieldName}
              label={fieldData.label}
              key={field}
              component={InputField}
              placeholder={fieldData.placeholder}
              desc={fieldData.help}
              helper={this.props.store.ConfigModal.modalform}
          />
      };

    return (
        <div key={field}>
          {formField}
        </div>
    );
  }

  passConditions(conditions) {
    let formName = Object.keys(this.props.store.form).toString();
    let requiredResults = [],
      optionalResults = [],
      values = this.props.store.form[formName].values || {};
    for (var i=0, len=conditions.length; i<len; i++) {
      let condition = conditions[i];
      if (!_.isArray(condition) && !_.isString(condition)) {
        console.log('Unsupported condition', condition);
        continue;
      }
      if (_.isString(condition)) {
        condition = condition.split(' ');
      }
      let dependee_fieldname = condition[0],
        operator = condition[1],
        value = condition[2],
        dependee_value;
        dependee_value = values[dependee_fieldname];
      let result;
      if (operator === 'EQ' || operator === 'eq') {
        result = (dependee_value === value);
      } else if (operator === 'NE' || operator === 'ne') {
        result = (dependee_value !== value);
      } else {
        console.log('Unsupported operator', operator, 'ignore condition', condition);
        continue;
      }
      if (_.contains(['EQ', 'NE'], operator)) {
        requiredResults.push(result);
      } else if (_.contains(['eq', 'ne'], operator)) {
        optionalResults.push(result);
      }
    }
    let pass = true;
    if (requiredResults.length > 0) {
      pass = _.every(requiredResults);
      if (!pass) return false;
    }
    if (optionalResults.length > 0) {
      pass = _.some(optionalResults);
    }
    return pass;
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    let that = this;
    let myFields = this.state.mergedFields;
    let tmpl = this.state.templates[this.state.gid] ? this.state.templates[this.state.gid] : this.state.templates['default'];

    const field = (item, key) => {
      for (var element of myFields) {
        if(element.fieldName == item) {
          if(element.conditions && element.conditions.conditions) {
            if (!that.passConditions(element.conditions.conditions)) return;
          }
          return (
            <Col lg="4">
              { that.renderField.call(this, element, key) }
            </Col>
          );
        }
      }
    };

    const fields = (items) => {
      return (
        <Row>
          { items.map( (item, index) => field(item, index) ) }
        </Row>
      );
    };

    const fieldSet = (item) => {
      return (
        <fieldset className="fieldset">
        <legend>{ item.fieldSet }</legend>
        { fields(item.children) }
        </fieldset>
      );
    };

    const tab = (item, key) => {
      return (
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === key })}
            onClick={() => { this.toggle(key); }}
          >
            { item.tab }
          </NavLink>
        </NavItem>
      )
    };

    const tabList = (items) => {
      if(Array.isArray(items)) {
        return items.map( (item, index) => tab(item, index) );
      }
    };

    const pane = (item, key) => {
      return (
        <TabPane tabId={ key }>
          <Row>
            <Col sm="12">
              { childList(item.children) }
            </Col>
          </Row>
        </TabPane>
      )
    };

    const paneList = (items) => {
      if(Array.isArray(items)) {
        return items.map( (item, index) => pane(item, index) );
      }
    };

    const tabs = (items) => {
      return (
        <div>
          <Nav tabs>
            { tabList(items) }
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            { paneList(items) }
          </TabContent>
        </div>
      );
    }

    const childList = (items) => {
        let list = [];
        if (Array.isArray(items) && items.length === 0) {
          list.push(myFields.map( (item, index) => this.renderField.call(this, item, index) ));
        } else {
          Object.entries(items).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              list.push(fields(value));
            } else if (value.fieldSet) {
              list.push(fieldSet(value));
            } else if (value.tabs) {
              list.push(tabs(value.tabs));
            }
          });
        }
        return list;
    };

    return (
      <div className="top-wrapper">
       <form>
        { childList(tmpl) }
       </form>
      </div>
    );
  }
}

function validate(values, props) {
  const validateConfig = {};

  // console.log('validate props ===> ', props);

   _.each(props.moduleInfo.fields, ({ name, fieldName, validate }) => {
    //  console.log('validate name ===> ', name)
    //  console.log('validate validate ===> ', validate)

    if (fieldName === 'mkey' && !values[fieldName]) {
        validateConfig[fieldName] = 'Please provide a value';
    }

    if (fieldName && validate && typeof validate === 'string' && validate.indexOf(':') >= 0) {

        // console.log('validate what? ==> ', typeof validate)
        // console.log('validate value ==> ', validate)

          var validateParts = validate.split(':'),
              validateType = validateParts[0],
              validateValue = validateParts[1];
            // if (validateType === 'RANGE') {
            // 	var validateValues = validateValue.split(','),
            // 		minValue = validateValues[0],
            // 		maxValue = validateValues[1];
            // 	validateConfig.number = {
            // 		minVal: parseInt(minValue),
            // 		maxVal: parseInt(maxValue)
            // 	};
            // } else
            if (validateType === 'REGEX' && values[fieldName]) {
            // (!/validateValue/.test(values[name]))
              // console.log('validate fieldName ==> ', fieldName)
              // console.log('validate regex ==> ', values[name])
              // console.log('validate val ==> ', validateValue)
              let pattern = new RegExp(validateValue)
              console.log('validate reg ===> ', pattern)
              if (!pattern.test(values[fieldName])) {
                return validateConfig[fieldName] = `Please specify ${pattern} option`;
              }
            }

            // if (validateType === 'IP_ADDRESS') {
            //   console.log('validate ip_address ==> ', values[name])
            //   return validateConfig[name] = `bad ip address`;
            // }

            else if (validateType === 'RANGE' && values[name]) {

              var validateValues = validateValue.split(','),
                minValue = validateValues[0],
                maxValue = validateValues[1];
                //console.log('validate range ===> ', validateType, validateValue)

                if (!validateValues) {
                  return validateConfig[name] = 'required';
                }
                var pattern = /^(0|-?[1-9]\d*)$/;
                // console.log('validate range : ===> ', validateValues)
                if (pattern.test(validateValues)) {
                  let val = parseInt(validateValues);
                  if ( val < minValue) {
                    return validateConfig[name] = 'The minimum value is '+minValue;
                  }
                  if ( val > maxValue) {
                    return validateConfig[name] = 'The maximum value is '+maxValue;
                  }
                } else {
                  // console.log('vvvvv ===> ', values[name], validateConfig[name], minValue)
                  return validateConfig[name] = 'This field should be a valid number';
                }

            }

        }

				if (validateType === 'IP_ADDRESS') { // IP_ADDRESS:RELAXED
						validateConfig.ipaddr = {
							multiple: field.multiAttr ? true : false,
							ipversion: field.ipversion
            };

            return validateConfig[name] = 'This field should be a valid IP address';
					}


   });
  return validateConfig;
}

function getFormName(gid) {
  console.log('dave form gid: ', gid)
  console.log('dave form gid2: ')
 return gid;
};

Form = reduxForm({
  validate,
  //form: formName, // a unique identifier for this form
  enableReinitialize: true
})(Form);

Form = connect(
  state => ({
    initialValues: state.operConfigEntry.stackObjArray[0].formdata,
    form: state.operConfigEntry.stackObjArray[0].gid
  })
)(Form);

export default Form;
