import React, {Component} from 'react';
import _ from 'lodash'

class Widget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widget: null
    };
  }

  componentDidMount() {
    this.setState({
      widget: this.props.widget
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      widget: nextProps.widget
    });
  }

  render() {
    if(this.state.widget === null) return <div>Warning! Widget Not Ready.</div>;

    let error = null;
    let RequestLazyBundle = <div />;

    try {
      let dir = _.endsWith(this.state.widget, '_') ? _.dropRight(this.state.widget).join('') : this.state.widget
      RequestLazyBundle = require('./widgets/'+ dir +'/'+this.state.widget).default;
    } catch (ex) {
      error = true;
    }

    return (
      <div className="widget-page">
        {error === null ? (
          <RequestLazyBundle {...this.props}/>
        ) : (
          <div>
            <h1>This is a widget: {this.state.widget}</h1>
            Error! Missing Widget.
          </div>
        )}
      </div>
    );
  }
}

export default Widget;
