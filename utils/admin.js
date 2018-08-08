import 'isomorphic-unfetch'
import { apiUrl } from "../constants";

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
    return fetch(`${apiUrl}/create`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => data)
  }

}
