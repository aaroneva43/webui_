import React, { Component } from 'react';
import {CircleWidget} from '../Widgets/'
import Fieldset from '../Fieldset/'

class Tside extends Component {
  constructor () {
    super();
  }

  tSideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('tside-menu-fixed');
  }

  render() {

    return (
      <div className="t-side">
        <div className='t-side-header'>
          <i className='fa fa-times pull-right' onClick={this.tSideToggle} />
        </div>
        <div className='t-side-body'>
          <Fieldset legend = 'Choose a vdom' line className='mt-3' />
          <div className='d-flex justify-content-start flex-wrap'>
            <CircleWidget legend='vdom1' color='success' onClick={this.tSideToggle}>
              V
            </CircleWidget>
            <CircleWidget legend='root' color='info' onClick={this.tSideToggle}>
              R
            </CircleWidget>
          </div>
        </div>
      </div>
    )
  }
}

export default Tside;
