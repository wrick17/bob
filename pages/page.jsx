import React, { Component } from 'react';
import 'isomorphic-unfetch';
import { withRouter } from 'next/router'

import { getPageData } from '../utils';
import Paragraph from '../segments/paragraph';
import Heading from '../segments/heading';
import Image from '../segments/image';
import Layout from '../components/layout';
import NotFound from './not-found';
import Text from '../segments/text';

const segmentMap = {
  text: Text,
  paragraph: Paragraph,
  heading: Heading,
  image: Image
}

class Page extends Component {
  
  static async getInitialProps({ query, res }) {
    const { siteId, pageId } = query;
    const homePage = process.env.NODE_ENV === 'development' ? `/${siteId}/home` : '/home'
    
    const data = await getPageData(siteId);
    if (!data.content) {
      return { data, pageId }
    }

    if (!pageId) {
      res.send(homePage);
    }
    if (!data.content[pageId]) {
      return res.status(404).redirect(homePage);
    }
    return { data, pageId };
  }

  generateContent = (content) => {
    return content.fields.map((segment, key) => {
      const ComposedComponent = segmentMap[segment.type];
      return <ComposedComponent key={key} {...segment} />
    })
  }

  render() {
    const { data, pageId } = this.props;
    const { content } = data;

    if (!content) {
      return <NotFound />
    }

    return (
      <Layout data={data} >
        <div className="container">
          <div>This website is not owned or operated by {data.name}</div>
          {this.generateContent(content[pageId])}
        </div>
      </Layout>
    );
  };
};

export default withRouter(Page);