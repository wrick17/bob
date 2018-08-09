import 'isomorphic-unfetch'
import { apiUrl } from "../constants";
import { getDefaultData } from '../constants/site-data';

export const adminApi = {

  getSites: () => {
    return fetch(`${apiUrl}/list`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => data)
  },
  
  saveSite: (data) => {
    return fetch(`${apiUrl}/edit`, {
      method: 'PUT', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => data)
  },

  createSite: (data) => {
    const defaultData = getDefaultData();
    return fetch(`${apiUrl}/create`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, ...defaultData})
    })
      .then(res => res.json())
      .then(data => data)
  }

}

export const makeid = () => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
