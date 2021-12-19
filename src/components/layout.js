import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';

class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default Layout;