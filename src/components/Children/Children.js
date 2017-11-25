import React, {Component} from 'react';
import Grid from '../../views/Grid/';
import './Children.scss';

class Children extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: {}
    };
  }

  componentDidMount() {
    this.setState({ children: this.props.children ? this.props.children : {} });
  }

  render() {
    const child = (item, key) => {
      return (
        <fieldset key={ key }>
          <legend>URL Access Rule</legend>
          <Grid gid={ item } />
          <div className="overlay">
            <div>Please save parent record first !</div>
          </div>
        </fieldset>
      )
    };

    const childList = (items) => {
      if(Array.isArray(items)) {
        return items.map( (item, index) => child(item, index) );
      }
    };

    return (
      <div className="children">
        { childList(Object.values(this.state.children)) }
      </div>
    );
  }
}

export default Children;
