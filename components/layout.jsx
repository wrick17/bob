import React, { Component } from 'react';

class Layout extends Component {
  render() {
    return (
      <div>
        <header>This is the page header</header>
        {this.props.children}
      </div>
    );
  };
};

export default Layout;