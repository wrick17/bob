import React from 'react';
import { Link } from '../../routes/admin-routes'

const AdminHeader = ({ className }) => (
  <header className={className}>
    <Link route="/"><label className="logo">Website Builder</label></Link>
    <style jsx>{`
      header {
        display: block;
        padding: 20px 25px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 10;
      }
      .logo {
        font-weight: bold;
        font-size: 24px;
        cursor: pointer;
      }
    `}</style>
  </header>
);

export default AdminHeader;