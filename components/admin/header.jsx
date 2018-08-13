import React from 'react';
import { Link } from '../../routes/admin-routes'
import { adminApi } from '../../utils/admin';
import { Router } from '../../routes/admin-routes';
import Cookies from 'js-cookie'

const logout = async () => {
  const res = await adminApi.logout();
  if (res.success) {
    Cookies.remove('session')
    Router.pushRoute('/login');
  }
}

const AdminHeader = ({ className }) => {
  const isLoggedIn = Cookies.get('session');
  return (
    <header className={className}>
      <Link route="/"><label className="logo">Website Builder</label></Link>
      {isLoggedIn && <label key="logout" className="logout f-r" onClick={logout}>Logout</label>}
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
      .logout {
        padding: 5px 15px;
        cursor: pointer;
      }
      `}</style>
    </header>
  )
};

export default AdminHeader;