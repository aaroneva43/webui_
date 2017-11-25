/*
 * Created on Thu Nov 16 2017
 *
 * Copyright (c) 2017 Fortinet
 * author: Stanley Song
 */

import React from 'react';

export class CircleWidget extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <span className='widget-container'>
        <div className={`widget-circle ${this.props.color}`} onClick={this.props.onClick}>
           { this.props.children }
        </div>
        { typeof(this.props.legend) !== 'undefined' &&
          <p className='text-center mt-3'>{this.props.legend}</p>
        }
      </span>
      );
  }
}
