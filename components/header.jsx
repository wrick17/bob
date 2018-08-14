import { Component } from 'react';
import { Link } from '../routes/frontend-routes'
import { allowedRoutes, accentColor } from '../constants';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  closeDropdown = (e) => {
    if (!document.getElementById('nav').contains(e.target)) {
      this.setState({ isOpen: false });
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.closeDropdown);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeDropdown);
  }

  toggleDropdown = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { data } = this.props;
    const { name } = data;
    const pages = Object.keys(data.content).filter(page => allowedRoutes.indexOf(page) !== -1);

    return (
      <header>
        <div className="container">
          <div className="contents">
            {/* <Link route="/home"><a className="logo">{name}</a></Link> */}
            <nav id="nav">
              <span onClick={this.toggleDropdown} className="trigger" >☰</span>
              <ul className={ !this.state.isOpen && 'hidden' } >
              {
                pages.map(page => <Link key={page} route={`/${page}`}><a onClick={this.toggleDropdown}>{data.content[page].label}</a></Link>)
              }
              </ul>
            </nav>
          </div>
        </div>
        <style jsx>{`
          header {
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
            background: ${accentColor};
            padding: 15px 0;
          }
          .contents {
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .logo {
            font-size: 24px;
            font-weight: bold;
            display: inline-block;
            cursor: pointer;
            text-decoration: none;
            color: white;
          }
          .trigger {
            display: none;
            color: white;
            font-size: 20px;
            cursor: pointer;
          }
          ul {
            margin: 0;
          }
          nav {
            position: relative;
          }
          nav a {
            color: white;
            margin-left: 15px;
            text-decoration: none;
            white-space: nowrap;
          }
          nav a:hover {
            text-decoration: underline;
          }
          @media (max-width: 768px) {
            .trigger {
              display: inline-block;
            }
            .hidden {
              display: none;
            }
            ul {
              position: absolute;
              right: 0;
              top: 100%;
              background: white;
              box-shadow: 0 2px 5px rgba(0,0,0,0.2);
              padding: 10px 0;
            }
            nav a {
              display: inline-block;
              color: black;
              width: 100%;
              padding: 10px 25px;
              margin-left: 0;
            }
            nav a:hover {
              background: ${accentColor};
              color: white;
            }
          }
        `}</style>
      </header>
    )
  }
}

export default Header;