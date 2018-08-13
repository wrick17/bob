import React, { Component } from 'react';
import 'isomorphic-unfetch';
import AdminLayout from '../components/admin/layout';
import List from '../components/admin/list';
import { adminApi } from '../utils/admin';
import Heading from '../segments/heading';
import { withRouter } from 'next/router'
import cookies from 'next-cookies';
import { Router } from '../routes/admin-routes';
import Cookies from 'js-cookie'

class Admin extends Component {
  
  static async getInitialProps(ctx) {
    const { session } = cookies(ctx)
    if (!session) {
      if (ctx.res) {
        ctx.res.redirect('/login');
      } else {
        Router.push('/login')
      }
    }
    const sites = await adminApi.getSites(session);
    return { sites };
  }

  render() {
    const { sites } = this.props;
    if (sites.error) {
      return null;
    }
    return (
      <AdminLayout>
        <div className="list-wrapper" >
          <List sites={sites} />
        </div>
        <style jsx>{`
          .list-wrapper {
            max-width: 1000px;
            width: 100%;
            margin: 0 auto;
            padding: 15px 25px;
          }
        `}</style>
      </AdminLayout>
    );
  };
};

export default withRouter(Admin);