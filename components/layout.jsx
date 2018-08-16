import React, { Component } from 'react';
import Header from './header';

class Layout extends Component {
  render() {
    const { data, children } = this.props;
    return (
      <div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Header data={data} />
        <div className="disclaimer">This website is not owned or operated by {data.name}</div>
        {children}
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
          .disclaimer {
            text-align: center;
            font-weight: bold;
            color: #333;
            padding: 10px;
            font-size: 18px;
            background: #EEE;
          }
        `}</style>
      </div>
    );
  };
};

export default Layout;