import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, ButtonGroup } from 'reactstrap';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import { InputField, SelectField, ToggleField, RadioField, CheckBoxField, TextAreaField, FileField, LabelField } from '../FormFields';
import { configEntryAdd, configEntryEdit, configEntryDone, configEntryReset } from '../../actions/processActions';
import classnames from 'classnames';
import { Field, reduxForm } from 'redux-form'
import _ from 'underscore';
import s from 'underscore.string';

@connect((store) => {
  return {
    store
  };
})

class Form2 extends Component {
   constructor(props) {
    super(props);
    this.state = {
      data: [],
      editors: {},
      mergedFields: [],
      specifics: {},
      gid: this.props.gid,
      activeTab: 0,
      templates: this.props.store.ConfigData.Templates
    };
  }

  componentWillMount() {
    const props = this.props;
    // const configData = props.store.ConfigData;
    // const configVars = props.store.ConfigVars;
    const moduleInfo = props.moduleInfo;
    ///console.log('zzz ===> ', props)
    if (
      this.state.gid !== null &&
      !_.isEmpty(moduleInfo)
    ) {
     // console.log('dave this props (Form) ===> ', props)
      this.fetchData(moduleInfo);
    }
  }

  componentWillReceiveProps(nextProps) {
    const props = nextProps;
    // const configData = nextProps.store.ConfigData;
    // const configVars = nextProps.store.ConfigVars;
    const moduleInfo = nextProps.moduleInfo;

   //console.log('dave Store ==> (form.js) props: ', props)

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
    console.log('dave fetchData (form2.js) => ', props)

    let editorsObj = props.editors; // specific
    let fieldsArr = props.fields;
    let Fields1 = [];
    let Fields2 = [];
    let newObj = {};
    let newObj2 = {};
    let newObj3 = {};

    // merge Field with speicific object
    fieldsArr.map(arr=> {
      for (const prop in editorsObj) {
        if (arr.fieldName === prop) {
          newObj = Object.assign(arr, editorsObj[prop]);
        }
      }
      return Fields1.push(newObj); // update
    })

    // remove not needed prop (ex: fields_order) this is from (Specific) (based/original)
    for (let key in editorsObj) {
        if (!Array.isArray(editorsObj[key])) {
          newObj2['fieldName'] = key;
          newObj3 = Object.assign(newObj2, editorsObj[key])
          Fields2.push(_.clone(newObj3))
        }
    }

// console.log('what is Fields1 (Arr) => ', Fields1) // update (merged)
// console.log('what is Fields2 (Obj) => ', Fields2) 

    for(var i = 0, l = Fields2.length; i < l; i++) {
      for(var j = 0, ll = Fields1.length; j < ll; j++) {
          if(Fields2[i].fieldName === Fields1[j].fieldName) {
              Fields2.splice(i, 1, Fields1[j]);
              break;
        }
      }
    }

  const Fields = Fields2;

  // const tempArr = Fields.map(field => {
  //   return field.fieldName;
  // });
  // console.log('tempArr: ', tempArr);

    // console.log('Fields ======> ', Fields)
    const NewFields = Fields.filter(elem => {
      if (elem.validate) {
        ///console.log('super dave name ooo : ', elem.name, '| validate: ', elem.validate, ' | type: ', typeof elem.validate)
        console.log('super dave zzz: ', elem)
      }
      return elem.label;
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

    console.log('dave (Form2.js) : what the? ', this.props)

    const field = (item, key) => {
      //console.log('dave item: ', item, ' - key: ', key)
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
  
  var validateConfig = {};
  var fields = props.moduleInfo.fields;
  //var mustFields = [];
  var options = {};

  //console.log('validate props ===> ', props);

   _.each(fields, function(field) {
     
    ///console.log('validate each ===> ', field.validate)
    var parseflag_hidden_reverse = [
					"5018", //"G_LOAD_BALANCE_CONTENT_ROUTING_FORWARDING_METHOD"
					"5019"  //"G_LOAD_BALANCE_CONTENT_ROUTING_SRC_POOL_LIST"
				];

    var fieldName = field.fieldName;
    var mkeyField = 'mkey';

      if (!fieldName) {
        console.log('This field has no \'fieldName\'', field);
        return;
      }
      
      if (fieldName == 'port') {
        console.log('help text: ', field);
      }

      var valType = field.valType;
      if (s.startsWith(valType, 'CHILD')) {
        console.log('Ignore', valType);
        return;
      }

      var parseflags = field.parseflag || [];
          // 'skip' fields can be ignored
      if (_.contains(parseflags, 'skip')) {
        console.log('Ignore \'skip\' field', fieldName);
        return;
      }

      // 'hidden' fields can be ignored
      if (_.contains(parseflags, 'hidden') && !_.contains(parseflag_hidden_reverse, field.gid)) {
        console.log('Ignore \'hidden\' field', fieldName);
        return;
      }

      if (fieldName === mkeyField && field.property === 'INT') {
        console.log('Ignore \'INT\' mkey field');
        return;
      }

					
    // validation starts here:
    if (fieldName === mkeyField && !values[fieldName]) {
        validateConfig[fieldName] = 'This field is required.';
    }

    if (_.contains(parseflags, 'must')) {
				validateConfig[fieldName] = 'This field is required.';
    }
    
    if (_.isObject(field.validate) && !_.isEmpty(field.validate) && field.validate['required']) {
        validateConfig[fieldName] = 'This field is required.';
    }
    
    if (field.ipversion) {
            
              var value = values[fieldName];
              options = {
								multiple: field.multiAttr ? true : false,
								ipversion: field.ipversion
              };

              console.log('ip addr field:: ', field.label, ' - ', field.ipversion)
              
              if (!value) {
                return;
              }
              options = options || {
                multiple: false
              };
            
              var ipv4Pattern = /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d))$/;
			        var ipv6Pattern = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;

              if (options.ipversion == 4) {
                if (!ipv4Pattern.test(value)) {
                  validateConfig[fieldName] = 'This field should be a valid ipv4 address';
                }
              } else if (options.ipversion == 6) {
                if (!ipv6Pattern.test(value)) {
                  validateConfig[fieldName] = 'This field should be a valid ipv6 address';
                }
              } else {
                if (!ipv4Pattern.test(value) && !ipv6Pattern.test(value)) {
                  validateConfig[fieldName] = 'This field should be a valid ip address'.i18n()+(options.multiple ? '. Use space to separate multiple values'.i18n() : '');
                }
              }

          }

    if (fieldName && field.validate && typeof field.validate === 'string' && field.validate.indexOf(':') >= 0) {
      //if (!_.isEmpty(field.validate) && typeof validate === 'string') {

          var validateParts = field.validate.split(/:(.+)/),//this will only split and stop at the first occurence of ':'
							validateType = validateParts[0],
              validateValue = validateParts[1];
          var value;
              
          if (validateType === 'RANGE') {
              value = values[fieldName];
            	var validateValues = validateValue.split(','),
            		minValue = validateValues[0],
            		maxValue = validateValues[1];
            	options = {
            		minVal: parseInt(minValue),
            		maxVal: parseInt(maxValue)
              };

              if (!value) {
                return;
              }
              options = options || {
                multiple: false
              };

              if (_.isNumber(options.minVal) && (value < options.minVal)) {
                validateConfig[fieldName] = `The minimum value is ${options.minVal}`;
              }
              if (_.isNumber(options.maxVal) && (value > options.maxVal)) {
                validateConfig[fieldName] = `The maximum value is ${options.maxVal}`;
              }
              

          } else if (validateType === 'REGEX') {
              value = values[fieldName];
              options = {
                regex: validateValue,
								multiple: field.multiAttr ? true : false
              }
              if (!value) {
                return;
              }

              options = options || {
                multiple: false
            };
            if (!options.regex) {
              return 'Please specify \'regex\' option for \'regex\' validator'.i18n();
            }
            var pattern = new RegExp(options.regex);
            //var vals = options.multiple ? values[fieldName].split(' ') : [val];
            if (!pattern.test(value)) {
                validateConfig[fieldName] = `Invalid value, should match regular expression ${pattern}`;
            }
          } 
        } // end of if
   });
  return validateConfig;
}

var formName = 'formName3'

Form2 = reduxForm({
  validate,
  form: formName, // a unique identifier for this form
  enableReinitialize: true
})(Form2);

// Form2 = connect(
//   state => ({
//     initialValues: state.operConfigEntry.stackObjArray[state.operConfigEntry.stackObjArray.length-1].formdata,
//     form: state.operConfigEntry.stackObjArray[state.operConfigEntry.stackObjArray.length-1].gid
//   })
// )(Form2);

export default Form2;
