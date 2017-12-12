import React, { Component } from 'react';
import {
  NavbarBrand,
  Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Card, CardTitle, CardText
} from 'reactstrap';
import Select from 'react-select';

import './Header.scss';
import Navigator from '../../components/Navigator/'

class Header extends Component {
  constructor(props) {
    super(props);

    this.tsideToggle = this.tsideToggle.bind(this);
    this.asideToggle = this.asideToggle.bind(this);
    this.state = {
      dropdownOpen: false,
      coverHide: false,
      activeFa: ''
    };
  }

  asideToggle(e, activeFa) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
    this.setState({
      coverHide: !this.state.coverHide,
      activeFa: activeFa
    });
  }

  tsideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('tside-menu-fixed');
  }



  vdomChange(val) {
    console.log('Selected: ', val);
  }

  render() {
    const { location, menuData } = this.props

    return (
      <header className="app-header navbar">
        {/*<NavbarBrand href="#/config/status/status"></NavbarBrand>*/}
        <Navigator
          location={location}
          menuData={menuData}
        />
        {/*<div className='adc-header-tools adc-vdom-menu'>
          <i className='fa fa-th-large' onClick={(e) => this.tsideToggle(e)} />
        </div>*/}
        <div className={`pull-right adc-header-tools mr-5 ${this.state.coverHide === true ? 'show' : ''}`}>

          <i className={`fa fa-bell-o ${this.state.activeFa === 'bell' ? 'active' : ''}`} onClick={(e) => this.asideToggle(e, 'bell')} />
          <i className='fa fa-question-circle-o' />
          <i className={`fa fa-terminal ${this.state.activeFa === 'terminal' ? 'active' : ''}`} onClick={(e) => this.asideToggle(e, 'terminal')} />
          <i className={`fa fa-user-o ${this.state.activeFa === 'user' ? 'active' : ''}`} onClick={(e) => this.asideToggle(e, 'user')} />
          <div className='aside-header-cover'>
            {this.state.coverHide === true &&
              <i className='fa fa-times pull-left' onClick={this.asideToggle} />
            }
          </div>
        </div>
      </header>
    )
  }
}

export default Header;
