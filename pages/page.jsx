import React, { Component } from 'react';
import 'isomorphic-unfetch';
import atob from 'atob'
import { withRouter } from 'next/router'

import { getPageData, getVenueData, getVenueDataServer } from '../utils';
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
  image: Image,
  tickets: Table,
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

    const venueDetails = JSON.parse(await getVenueDataServer(data.eventId));

    return { data, pageId, venueDetails };
  }

  generateContent = (content) => {
    return content.fields.map((segment, key) => {
      const ComposedComponent = segmentMap[segment.type];
      return <ComposedComponent key={key} {...segment} links={this.props.venueDetails.results} />
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
          <h1>{data.name}</h1>
          <h2>Tickets</h2>
          {this.generateContent(content[pageId])}
          <style jsx>{`
            h1 {
              text-align: center;
              margin: 40px 0 10px;
            }
            h2 {
              text-align: center;
              margin: 0px 0 60px;
              color: #777;
              font-weight: normal;
            }
          `}</style>
        </div>
      </Layout>
    );
  };
};

export default withRouter(Page);