import React from 'react';
import AdminHeader from './header';

const AdminLayout = (props) => (
  <div className="page" >
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
    <AdminHeader className="header" />
    <div className="content">
      {props.children}
    </div>
    <style jsx>{`
      .page {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
      .header {
        flex: 0 0 auto;
      }
      .content {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    `}</style>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-family: sans-serif;
      }
    `}</style>
  </div>
);

export default AdminLayout;