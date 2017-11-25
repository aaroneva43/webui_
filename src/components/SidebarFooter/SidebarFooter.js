import React, {Component} from 'react';
import {
  NavbarToggler,
  InputGroup, InputGroupAddon, Input
} from 'reactstrap';

class SidebarFooter extends Component {
  constructor() {
    super();
    this.state = { toggle: false };

    this.sidebarMinimize = this.sidebarMinimize.bind(this);
  }

  sidebarMinimize(e) {
    e.preventDefault();
    this.setState({toggle: !this.state.toggle});
    document.body.classList.toggle('sidebar-minimized');
  }

  render() {
     return (
       <div className="sidebar-footer">
         <div className='d-flex justify-content-start'>
          <NavbarToggler className="d-md-down-none mr-4" onClick={this.sidebarMinimize}>
          {
            this.state.toggle === true ?
            <i className='fa fa-arrow-right' />
            :
            <i className='fa fa-arrow-left' />
          }
          </NavbarToggler>
          <InputGroup>
            <InputGroupAddon><i className='fa fa-search'/></InputGroupAddon>
            <Input />
          </InputGroup>
        </div>
       </div>
     )
  }
}

export default SidebarFooter;
