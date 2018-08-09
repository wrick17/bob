import React, { Component } from 'react';
import { withRouter } from 'next/router'
import { Router } from '../routes/admin-routes'
import { getPageData } from '../utils';
import AdminLayout from '../components/admin/layout';
import Sidebar from '../components/admin/sidebar';
import Content from '../components/admin/content';
import Button from '../components/button';
import { adminApi } from '../utils/admin';
import Settings from '../components/admin/settings';
import { allowedRoutes } from '../constants';

class Website extends Component {
  

  static async getInitialProps({ query }) {
    const { siteId } = query;
    const data = await getPageData(siteId);
    return { data, siteId };
  }

  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      page: 'home'
    }
  }

  formDetails = (details) => {
    const detailsMap = {};
    details.map((detail, idx) => {
      const { id } = detail;
      detailsMap[id] = { ...detail, order: idx };
    })
    return detailsMap;
  }

  openPage = (page) => {
    this.setState({ 
      page,
    });
  }

  onChangeSettings = (changes) => {
    const { prop, value } = changes;
    const { data } = this.state;
    const newData = {
      ...data,
      [prop]: value
    }
    this.setState({ data: newData });
  }

  onChangeContent = (changes) => {
    const { data, page } = this.state;
    
    const newData = {
      ...data,
      content: {
        ...data.content,
        [page]: {
          ...data.content[page],
          fields: data.content[page].fields.map(field => {
            if (field.id === changes.id) {
              return {
                ...field,
                [changes.item]: changes.value.replace('<br>', '<br/>')
              }
            } else {
              return field
            }
          })
        }
      }
    }
    this.setState({ data: newData });
  }

  goBack = () => {
    Router.push('/');
  }

  saveSite = async () => {
    const res = await adminApi.saveSite({
      id: this.props.siteId,
      data: this.state.data
    });
    console.log(res);
    this.setState({ data: res });
  }

  render() {
    const { content } = this.props.data;
    const pages = Object.keys(content).filter(page => allowedRoutes.indexOf(page) !== -1);
    const { data, page } = this.state;
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
            {page === 'settings' && <Settings data={data} onChange={this.onChangeSettings} /> }
            { page !== 'settings' &&  <Content fields={this.formDetails(data.content[page].fields)} onChange={this.onChangeContent} />}
          </main>
        </div>
        <div className="save">
          <Button label="Back" onClick={this.goBack} />
          <Button label="Save" onClick={this.saveSite} />
        </div>
        <style jsx>{`
          .content {
            display: flex;
            flex: 1;
          }
          aside {
            flex: 0 0 250px;
            box-shadow: 5px 0 5px -4px rgba(0,0,0,0.2);
            display: flex;
            flex-direction: column;
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
            justify-content: space-between;
          }
        `}</style>
      </AdminLayout>
    );
  };
};

export default withRouter(Website);