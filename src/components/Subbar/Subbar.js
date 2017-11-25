import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Nav, NavItem} from 'reactstrap';
import classNames from 'classnames';
import { isEmpty } from '../../services/Utils';

class Subbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuList: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.match.params !== this.props.match.params ) {
      this.setState({menuList: []});
    }
    if (
      !isEmpty(nextProps.store.ConfigData.MenuPieces) &&
      nextProps.match.params !== this.props.match.params
    ) {
      const menuPcs = nextProps.store.ConfigData.MenuPieces;
      this.setSubbar(Object.values(nextProps.match.params), menuPcs, '/config');
    }
  }

  setSubbar(params, menuPcs, url) {
    const param = params.shift();
    let subMenuPcs = menuPcs[param];
    url += `/${param}`;

    if (typeof  subMenuPcs === 'undefined') {
      subMenuPcs = menuPcs.find(function (item) {
        return item.name === param;
      });
    }

    if(subMenuPcs.children) {
      this.setSubbar(params, subMenuPcs.children, url);
    } else if(subMenuPcs.modules) {
      subMenuPcs.modules.forEach(function(mod) {
          mod.url = `${url}/${mod.name}`;
      });
      this.setState({menuList: subMenuPcs.modules});
    }
  }

  render() {
    // nav item with nav link
    const navLink = (item, key) => {
      const classes = classNames( "nav-link", item.class);
      return (
        <NavItem key={key}>
          <NavLink to={`${item.url}`} className={ classes } activeClassName="active">
            {item.text}
          </NavLink>
        </NavItem>
      )
    };

    // nav list
    const navList = (items) => {
      if(Array.isArray(items)) {
        return items.map( (item, index) => navLink(item, index) );
      }
    };

    // sidebar-nav root
    return (
      <Container fluid className='subbar-container mb-4'>
        <div className="subbar">
          <Nav pills>
            {navList(this.state.menuList)}
          </Nav>
        </div>
      </Container>
    )
  }
}

export default Subbar;
