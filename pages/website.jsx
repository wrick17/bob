import React, { Component } from 'react';
import { withRouter } from 'next/router'
import { getPageData } from '../utils';
import AdminLayout from '../components/admin/layout';
import Sidebar from '../components/admin/sidebar';
import Content from '../components/admin/content';
import Button from '../components/button';

class Website extends Component {
  
  static async getInitialProps({ query }) {
    const { siteId } = query;
    const data = await getPageData(siteId);
    return { data, siteId };
  }

  constructor(props) {
    super(props);
    this.state = {
      details: props.data.content.home,
      page: 'home'
    }
  }

  openPage = (page) => {
    this.setState({ 
      page,
      details: this.props.data.content[page]
    });
  }

  render() {
    const { content } = this.props.data;
    const pages = Object.keys(content);
    const { details, page } = this.state;
    return (
      <AdminLayout>
        <div className="content">
          <aside>
            <Sidebar 
              pages={pages}
              content={content}
              selected={page}
              openPage={this.openPage} />
          </aside>
          <main>
            <Content content={details} />
          </main>
        </div>
        <div className="save">
          <Button label="Save" className="float-right" />
        </div>
        <style jsx>{`
          .content {
            display: flex;
            flex: 1;
          }
          aside {
            flex: 0 0 250px;
            box-shadow: 5px 0 5px -4px rgba(0,0,0,0.2);
          }
          main {
            flex: 1 1 auto;
            padding: 15px;
            overflow: auto;
          }
          .save {
            flex: 0 0 auto;
            box-shadow: 0 -2px 5px rgba(0,0,0,0.2);
            z-index: 100;
            padding: 10px;
            display: flex;
            justify-content: flex-end;
          }
        `}</style>
      </AdminLayout>
    );
  };
};

export default withRouter(Website);