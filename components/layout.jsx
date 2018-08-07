import React, { Component } from 'react';
import Header from './header';

class Layout extends Component {
  render() {
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Header data={this.props.data} />
        {this.props.children}
        <style jsx global>{`
          * {
            box-sizing: border-box;
          }
          body {
            font-family: sans-serif;
            margin: 0;
          }
          .container {
            max-width: 1000px;
            width: 100%;
            padding: 0 15px;
            margin: auto;
          }
        `}</style>
      </div>
    );
  };
};

export default Layout;