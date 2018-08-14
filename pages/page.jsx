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

  constructor(props) {
    super(props);
    this.state = {
      links: []
    }
  }
  
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

    return { data, pageId };
  }

  generateContent = (content) => {
    return content.fields.map((segment, key) => {
      const ComposedComponent = segmentMap[segment.type];
      return <ComposedComponent key={key} {...segment} links={this.state.links} />
    })
  }

  async componentDidMount() {
    const venueRes = await getVenueData(7928);
    const links = venueRes.results;
    this.setState({ links });
  }

  render() {
    const { data, pageId } = this.props;
    
    const { links } = this.state;
    const { content } = data;

    if (!content) {
      return <NotFound />
    }

    return (
      <Layout data={data} >
        <div className="container">
          <div className="disclaimer">This website is not owned or operated by {data.name}</div>
          <h1>{data.name}</h1>
          {this.generateContent(content[pageId])}
          <style jsx>{`
            h1 {
              text-align: center;
              margin: 40px 0 60px;
            }
            .disclaimer {
              text-align: center;
              font-weight: bold;
              color: #333;
            }
          `}</style>
        </div>
      </Layout>
    );
  };
};

export default withRouter(Page);