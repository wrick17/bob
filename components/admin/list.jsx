import React, { Component } from 'react';
import { Link } from '../../routes/admin-routes'

class List extends Component {
  render() {
    const { sites, archival } = this.props;
    return (
      <div className="sites">
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
          .site {
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
        `}</style>
      </div>
    );
  };
};

export default List;