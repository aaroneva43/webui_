import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import { isEmpty } from '../../services/Utils';
import Subbar from '../../components/Subbar/';
import Grid from '../../views/Grid/';
import Widget from '../../views/Widget/';

// redux stuff
import { connect } from 'react-redux';

@connect((store) => {
  return {
    store
  };
})

class Config extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widget: null,
      gid: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      !isEmpty(nextProps.store.ConfigData.MenuPieces) &&
      !isEmpty(nextProps.store.ConfigData.GidNodeMap)
    ) {
      const modules = nextProps.store.ConfigData.MenuPieces;
      this.setGidWidget(Object.values(nextProps.match.params), modules, nextProps);
    }
  }

  setGidWidget(params, modules, props) {
    const param = params.shift();
    let module = modules[param];

    if (typeof  module === 'undefined') {
      module = modules.find(function (item) {
        return item.name === param;
      });
    }

    if(module.children) {
      this.setGidWidget(params, module.children, props);
    } else if(module.modules) {
      this.setGidWidget(params, module.modules, props);
    } else {
      if (module.gid) {
        this.setState({ gid: module.gid, widget: null });
      } else if (module.widget) {
        this.setState({ widget: module.widget, gid: null });
      }
    }
  }

  render() {
    return (
      <div>
        <Subbar {...this.props} />
        <Container fluid>
        {this.state.gid ? (
          <Grid gid={ this.state.gid } />
        ) : (
          <Widget widget={ this.state.widget } />
        )}
        </Container>

      </div>
    );
  }
}

export default Config;
