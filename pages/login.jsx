import React, { Component } from 'react';
import Text from '../segments/admin/text';
import Button from '../components/button';
import AdminLayout from '../components/admin/layout';
import { adminApi } from '../utils/admin';
import Cookies from 'js-cookie';
import cookies from 'next-cookies';
import { Router} from '../routes/admin-routes';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    }
  }
  static async getInitialProps(ctx) {
    const { session } = cookies(ctx)
    if (session) {
      if (ctx.res) {
        ctx.res.redirect('/');
      } else {
        Router.push('/')
      }
    }
    return {};
  }
  changeEmail = e => {
    this.setState({ email: e.target.value });
  }
  changePassword = e => {
    this.setState({ password: e.target.value });
  }
  login = async (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const res = await adminApi.login(this.state);
    if (res.success) {
      Cookies.set('session', res.data.session);
      Router.pushRoute('/');
    } else {
      this.setState({ error: res.message });
    }
  }
  render() {
    const { email, password, error } = this.state;
    return (
      <AdminLayout>
        <form onSubmit={this.login} >
          <h4>Login Form</h4>
          <div className="input-group" >
            <label>User Name</label>
            <Text data={email} type="email" placeholder="email id" onChange={this.changeEmail} />
          </div>
          <div className="input-group" >
            <label>Password</label>
            <Text data={password} type="password" placeholder="Password" onChange={this.changePassword} />
          </div>
          <div className="error">{error}</div>
          <Button label="Login" type="submit" />
        </form>
        <style jsx>{`
          form {
            max-width: 400px;
            width: 100%;
            margin: 20vh auto;
            padding: 20px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
            border-radius: 4px;
            border: none;
          }
          label {
            font-size: 14px;
            color: #777;
            font-weight: bold;
            margin-bottom: 6px;
            display: block;
          }
          .error {
            color: red;
            font-size: 14px;
            margin-bottom: 10px;
          }
        `}</style>
      </AdminLayout>
    );
  };
};

export default Login;