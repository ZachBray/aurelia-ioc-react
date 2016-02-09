/* @flow */

import React, { Component } from 'react';
import Calculator from './calculator';

export default class App extends Component {
  render() {
    return <div>{new Calculator().add(1,2)}</div>;
  }
}
