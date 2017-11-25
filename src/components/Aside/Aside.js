import React, { Component } from 'react';
import {CircleWidget} from '../Widgets/'
import Fieldset from '../Fieldset/'

class Aside extends Component {

  render() {

    return (
      <aside className="aside-menu">
        <Fieldset legend = 'Signed in as ' highlight='admin' line />
        <div className='d-flex justify-content-left mt-5'>
          <CircleWidget legend='Logout' color='success'>
            <i className='fa fa-sign-out' />
          </CircleWidget>
          <CircleWidget legend='Change Password' color='info'>
            <i className='fa fa-key' />
          </CircleWidget>
        </div>
        <div className='d-flex justify-content-left'>
          <CircleWidget legend='Reboot' color='warning' >
            <i className='fa fa-circle-o-notch' />
          </CircleWidget>
          <CircleWidget legend='Shutdown' color='danger' >
            <i className='fa fa-power-off' />
          </CircleWidget>
          <CircleWidget legend='Reset Configuration' color='dark' >
            <i className='fa fa-refresh' />
          </CircleWidget>
        </div>
      </aside>
    )
  }
}

export default Aside;
