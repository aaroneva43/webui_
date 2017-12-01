import React, { Component } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import { isEmpty } from '../../services/Utils';
import Subbar from '../../components/Subbar/';
import Grid from '../../views/Grid/';
import Widget from '../../views/Widget/';
import Form2 from '../../components/Form/Form2';
import { getModuleInfo, getGidByPath } from '../../services/Data';

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
    // if (
    //   !isEmpty(nextProps.store.ConfigData.MenuPieces) &&
    //   !isEmpty(nextProps.store.ConfigData.GidNodeMap)
    // ) {
    //   const modules = nextProps.store.ConfigData.MenuPieces;
    //   this.setGidWidget(Object.values(nextProps.match.params), modules, nextProps);
    // }

    const { menu, location } = nextProps

    let gid,
      path = location.pathname

    if (!_.isEmpty(menu)) {
      path = path.replace(/^\/config/g, '') // 'config' is not in menu structure, strip it
      gid = getGidByPath(path, menu)
    }

    if (gid)
      this.setState(!_.isNaN(_.toNumber(gid)) ? { gid: gid, widget: null } : { widget: gid, gid: null })
  }

  // setGidWidget(params, modules, props) {
  //   const param = params.shift();
  //   let module = modules[param];

  //   if (typeof  module === 'undefined') {
  //     module = modules.find(function (item) {
  //       return item.name === param;
  //     });
  //   }

  //   if(module.children) {
  //     this.setGidWidget(params, module.children, props);
  //   } else if(module.modules) {
  //     this.setGidWidget(params, module.modules, props);
  //   } else {
  //     if (module.gid) {
  //       this.setState({ gid: module.gid, widget: null });
  //     } else if (module.widget) {
  //       this.setState({ widget: module.widget, gid: null });
  //     }
  //   }
  // }

  render() {
    let isWidget = 0;
    if (this.state.gid) {
      // console.log('dave (config.js) props ', this.props.store.ConfigData)
      // console.log('dave (config.js) gid => ', this.state.gid)
      // console.log('dave (config.js) => ', typeof this.props.store.ConfigData.Specifics[this.state.gid]['widget']);
      isWidget = this.props.store.ConfigData.Specifics[this.state.gid]['widget'];
    }

    let moduleInfo = getModuleInfo(this.state.gid, this.props.store.ConfigData);
    return (
      <div>
        {/* <Subbar {...this.props} /> */}
        <Container fluid>

          {this.state.gid ? typeof isWidget === 'object' ? (
            <Form2 gid={this.state.gid} moduleInfo={moduleInfo} />
          ) : (
              <Grid gid={this.state.gid} />
            ) : (
              <Widget widget={this.state.widget} />
            )}
        </Container>

      </div>
    );
  }
}

export default Config;
