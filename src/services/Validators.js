export default function validate(values, props) {
  
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