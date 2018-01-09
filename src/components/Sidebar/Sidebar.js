import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Badge, Nav, NavItem} from 'reactstrap';
import { isEmpty } from '../../services/Utils';
import classNames from 'classnames';
import SidebarFooter from './../SidebarFooter';
import SidebarForm from './../SidebarForm';
import SidebarHeader from './../SidebarHeader';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuPieces: {},
      menu: {},
      menuList: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      !isEmpty(nextProps.store.ConfigData.Menu) &&
      !isEmpty(nextProps.store.ConfigData.MenuPieces)
    ) {
      this.setState({
        menu: nextProps.store.ConfigData.Menu,
        menuPieces: nextProps.store.ConfigData.MenuPieces
      });
      this.setMenuPieces(nextProps.store.ConfigData.Menu, nextProps.store.ConfigData.MenuPieces);
    }
  }

  getChild2(pieces, prop2) {
    let url = `/config/${pieces.name}/${prop2.name}`;
    if (prop2.modules) {
      url += `/${prop2.modules[0].name}`;
    }
    return {
      name: prop2.text,
      url: url
    };
  }

  getChild3(pieces, prop2, prop3) {
    let url = `/config/${pieces.name}/${prop2.name}/${prop3.name}`;
    if (prop3.modules) {
      url += `/${prop3.modules[0].name}`;
    }
    return {
      name: prop3.text,
      url: url
    };
  }

  setMenuPieces(menu, menuPieces) {
    let items = [];
    let that = this;

    // set localStorage
    if (!localStorage.DBPanelsShow) {
      localStorage.setItem("DBPanelsShow", JSON.stringify({current: 'Main', dbs: {Main: ['SystemInfo', 'HAInfo', 'VSThroughput', 'InterfaceThroughput', 'LicenseInfo', 'CPU', 'Disk', 'RAM', 'VSConnections', 'RecentEventLogs']}}));
    }
    let DBPanelsShow = JSON.parse(localStorage.DBPanelsShow);
    menuPieces.status.children = [];
    _.each(Object.keys(DBPanelsShow.dbs), function(item){
      menuPieces.status.children.push({name: item, text: item, widget: "Status"});
    });

    menu.vdom_disabled.forEach(function(prop) {
      let obj = {
        name: menuPieces[prop].text,
        url: `/${menuPieces[prop].name}`,
        icon: 'icon-speedometer',
        children: []
      };
      menuPieces[prop].children.forEach(function(prop2) {
        if (prop2.children) {
          obj.children.push({
            name: prop2.text,
            title: prop2.text
          });
          prop2.children.forEach(function(prop3) {
            obj.children.push(that.getChild3(menuPieces[prop], prop2, prop3));
          });
        } else {
          obj.children.push(that.getChild2(menuPieces[prop], prop2));
        }
      });
      items.push(obj);
    });

    this.setState({menuList: items});
  }

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName, props) {
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  render() {
    const props = this.props;
    const activeRoute = this.activeRoute;
    const handleClick = this.handleClick;

    // simple wrapper for nav-title item
    const wrapper = item => { return (item.wrapper && item.wrapper.element ? (React.createElement(item.wrapper.element, item.wrapper.attributes, item.name)): item.name ) };

    // nav list section title
    const title =  (title, key) => {
      const classes = classNames( "nav-title", title.class);
      return (<li key={key} className={ classes }>{wrapper(title)} </li>);
    };

    // nav list divider
    const divider = (divider, key) => (<li key={key} className="divider"></li>);

    // nav item with nav link
    const navItem = (item, key) => {
      const classes = classNames( "nav-link", item.class);
      return (
        <NavItem key={key}>
          <NavLink to={item.url} className={ classes } activeClassName="active">
            <i className={item.icon}></i>{item.name}
          </NavLink>
        </NavItem>
      )
    };

    // nav dropdown
    const navDropdown = (item, key) => {
      return (
        <li key={key} className={activeRoute(item.url, props)}>
          <a className="nav-link nav-dropdown-toggle" href="#" onClick={handleClick.bind(this)}><i className={item.icon}></i>{item.name}</a>
          <ul className="nav-dropdown-items">
            {navList(item.children)}
          </ul>
        </li>)
    };

    // nav link
    const navLink = (item, idx) =>
      item.title ? title(item, idx) :
      item.divider ? divider(item, idx) :
      item.children ? navDropdown(item, idx)
                    : navItem(item, idx) ;

    // nav list
    const navList = (items) => {
      return items.map( (item, index) => navLink(item, index) );
    };

    // sidebar-nav root
    return (
      <div className="sidebar">
        <SidebarHeader/>
        <SidebarForm/>
        <nav className="sidebar-nav">
          <Nav>
            {navList(this.state.menuList)}
          </Nav>
        </nav>
        <SidebarFooter/>
      </div>
    )
  }
}

export default Sidebar;
