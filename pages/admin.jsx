import React, { Component } from 'react';
import 'isomorphic-unfetch';
import AdminLayout from '../components/admin/layout';
import List from '../components/admin/list';
import { getSites } from '../utils/admin';
import Heading from '../segments/heading';
import { withRouter } from 'next/router'

class Admin extends Component {
  
  static async getInitialProps() {
    const sites = await getSites();
    return { sites };
  }

  render() {
    return (
      <AdminLayout>
        <div className="list-wrapper" >
          <Heading text="Manage your websites" />
          <List sites={this.props.sites} />
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