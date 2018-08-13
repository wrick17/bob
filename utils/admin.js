import 'isomorphic-unfetch'
import { apiUrl } from "../constants";
import { getDefaultData } from '../constants/site-data';
import Cookies from 'js-cookie'

export const adminApi = {

  getSites: (session) => {
    return fetch(`${apiUrl}/api/list`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'session-key': Cookies.get('session') || session,
      },
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => err)
  },
  
  saveSite: (data) => {
    return fetch(`${apiUrl}/api/edit`, {
      method: 'PUT', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'session-key': Cookies.get('session'),
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => err)
  },

  createSite: (data) => {
    const defaultData = getDefaultData();
    return fetch(`${apiUrl}/api/create`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'session-key': Cookies.get('session'),
      },
      body: JSON.stringify({ ...data, ...defaultData})
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => err)
  },

  login: (data) => {
    return fetch(`${apiUrl}/user/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey': '2f3d1290ebb2f1438b41e75451c8b5e565579265bb4a8dd64359f94b08648355d06575e0687d8517d83a05020d133fb0',
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => err)
  },

  logout: () => {
    return fetch(`${apiUrl}/user/logout`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'session-key': Cookies.get('session'),
      },
    })
      .then(res => res.json())
      .then(data => data)
      .catch(err => err)
  },
}

export const makeid = () => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
