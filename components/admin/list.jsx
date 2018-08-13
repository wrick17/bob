import React, { Component } from 'react';
import { Link } from '../../routes/admin-routes'
import Button from '../button';
import Settings from './settings';
import { adminApi } from '../../utils/admin';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newSite: false,
      data: {}
    }
  }
  changeSiteData = (changes) => {
    const { data } = this.state;
    this.setState({
      data: {
        ...data,
        [changes.prop]: changes.value
      }
    })
  }
  showNewSite = () => this.setState({ newSite: true });
  hideNewSite = () => this.setState({ newSite: false });
  createSite = async () => {
    const { name, route } = this.state.data;
    if (!name || !route) {
      return;
    }
    await adminApi.createSite(this.state.data);
    if (typeof location !== 'undefined') {
      location.reload();
    }
  }
  render() {
    const { sites, archival } = this.props;
    const { newSite, data } = this.state;
    return (
      <div className="sites">
        <div className="wrapper">
          {
            newSite ?
              <div className="new-website" >
                <Settings data={data} onChange={this.changeSiteData} />
                <Button label="Cancel" onClick={this.hideNewSite} />
                <Button label="Create" onClick={this.createSite} className="f-r" />
              </div>
              :
              <Button label="Add New" className="f-r" onClick={this.showNewSite} />
          }
        </div>
        {
          sites.map(site => (
            <Link route={`/${site.route}`} key={site.route}>
              <div className="site">
                <span>{site.name}</span>
                {
                  archival &&
                  <span className="actions">
                    <i className="fas fa-trash archive"></i>
                    <i className="fas fa-cloud-upload-alt unarchive"></i>
                  </span>
                }
              </div>
            </Link>
          ))
        }
        <style jsx>{`
          .wrapper {
            overflow: hidden;
            margin-bottom: 20px;
          }
          .site, .new-website {
            display: block;
            padding: 20px 25px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
            border-radius: 4px;
            cursor: pointer;
          }
          .actions {
            float: right;
          }
          .actions i {
            margin-left: 15px;
            transition: 200ms;
          }
          .actions i:hover {
            transition: 200ms;
          }
          .actions .archive {
            color: #AAA;
          }
          .actions .archive:hover {
            color: #ff6666;
            transition: 200ms;
          }
          .actions .unarchive {
            color: #AAA;
            transition: 200ms;
          }
          .actions .unarchive:hover {
            color: #4ca64c;
            transition: 200ms;
          }
          .new-website {
            margin-top: 20px;
          }
        `}</style>
      </div>
    );
  };
};

export default List;