import React, { Component } from 'react';
import Footer from './footer';
import Header from './header';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        {this.props.children}
        <Header />
        <Footer />
      </div>
    );
  }
}
