import React, { Component } from 'react';
import 'isomorphic-unfetch';
import { withRouter } from 'next/router'

import { getPageData, getVenueData } from '../utils';
import Paragraph from '../segments/paragraph';
import Heading from '../segments/heading';
import Image from '../segments/image';
import Layout from '../components/layout';
import NotFound from './not-found';
import Text from '../segments/text';
import Table from '../components/table';

const segmentMap = {
  text: Text,
  paragraph: Paragraph,
  heading: Heading,
  image: Image
}

class Page extends Component {
  
  static async getInitialProps({ req, query, res }) {
    const { pageId } = query;

    const host = req ? req.headers.host : location.host;
    const subdomain = host.split('.')[0];
    
    const data = await getPageData(subdomain);
    if (!data.content) {
      return { data: {} };
    }

    if (!pageId) {
      res.redirect('/home');
    }
    const venueRes = await getVenueData(237, 7928);
    const links = venueRes._links;
    console.log(venueRes)

    return { data, pageId, links };
  }

  generateContent = (content) => {
    return content.fields.map((segment, key) => {
      const ComposedComponent = segmentMap[segment.type];
      return <ComposedComponent key={key} {...segment} />
    })
  }

  // async componentDidMount() {
  //   const venueRes = await getVenueData(237, 7928);
  //   console.log(venueRes._links);
  //   const links = venueRes._links;
  // }

  render() {
    const { data, pageId, links } = this.props;
    const { content } = data;

    if (!content) {
      return <NotFound />
    }

    return (
      <Layout data={data} >
        <div className="container">
          <div>This website is not owned or operated by {data.name}</div>
          {this.generateContent(content[pageId])}
          <Table links={[]} />
        </div>
      </Layout>
    );
  };
};

export default withRouter(Page);