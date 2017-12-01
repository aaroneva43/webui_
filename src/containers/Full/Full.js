import React, { Component, createElement } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Navigator from '../../components/Navigator/';
import Aside from '../../components/Aside/';
import Tside from '../../components/Tside/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';
import Config from '../../containers/Config/';
import ModalConfig from '../ModalConfig/ModalConfig';
import { isEmpty } from '../../services/Utils';
import { ExtendModuleNode, ExtendFieldNode, ExtendNodeConditions } from '../../services/Data';
import _ from 'lodash';
// redux stuff
import { setGidNodeMap } from '../../actions/formActions';
import { connect } from 'react-redux';

@connect((store) => {
  return {
    store
  };
})

class Full extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loadingData: 0,
  //     gidNode: {}
  //   };
  // }

  componentWillReceiveProps(nextProps) {
    // const gidNode = _.cloneDeep(nextProps.store.ConfigData.GidNode);
    // const macroGidMap = nextProps.store.ConfigData.MacroGidMap;
    // const macroNameMap = nextProps.store.ConfigData.MacroNameMap;
    // const moduleFieldsMap = nextProps.store.ConfigData.ModuleFieldsMap;
    // const gidNodeMap = nextProps.store.ConfigData.GidNodeMap;
    // const conditions = nextProps.store.ConfigData.Conditions;

    // if (
    //   !isEmpty(gidNode) &&
    //   !isEmpty(macroGidMap) &&
    //   !isEmpty(macroNameMap) &&
    //   !isEmpty(moduleFieldsMap) &&
    //   !isEmpty(conditions) &&
    //   isEmpty(gidNodeMap)
    // ) {
    //   let gidNodeLocal = ExtendModuleNode(gidNode, macroGidMap, macroNameMap);
    //   gidNodeLocal = ExtendFieldNode(gidNodeLocal, macroGidMap, moduleFieldsMap);
    //   gidNodeLocal = ExtendNodeConditions(gidNodeLocal, conditions);
    //   nextProps.dispatch(setGidNodeMap(gidNodeLocal));
    // }
  }

  render() {

    const { location, menuData } = this.props

    return (
      <div className="app">
        {/* <Header /> */}
        
        <Header {...this.props} />
        <div className="app-body">
          {/* <Tside /> */}
          {/* <Sidebar {...this.props} /> */}
          {/* <div className="adc-vdom-container">
            Global
          </div> */}
          <main className="main">
            <Switch>
              <Route path="/dashboard" name="Dashboard" component={Dashboard} />
              <Route path="/config/" name="Config" render={({ location }) => { return createElement(Config, { location, menu: menuData }) }} />
              {/* <Route path="/config/:id/:id2/:id3" name="Config" component={Config} />
              <Route path="/config/:id/:id2" name="Config" component={Config} />
              <Route path="/config/:id" name="Config" component={Config} /> */}
              <Redirect from="/" exact to="/config/status/Main" />
            </Switch>
          </main>
          <Aside />
          <ModalConfig />
        </div>
      </div>
    );
  }
}

export default connect(states => ({ menuData: _.get(states, 'ConfigData.MenuData') }))(Full);
