import 'isomorphic-unfetch'
import { apiUrl } from "../constants";
import Cookies from 'js-cookie'

export const getPageData = (siteId, session) => {
  return fetch(`${apiUrl}/api/site/${siteId}`, {
    headers: {
      'session-key': Cookies.get('session') || session,
    }
  })
    .then(res => res.json())
}

export const getVenueData = (siteId, venueId) => {
  let foo = '';
  return new Promise((resolve, reject) => {
    fetch(`https://sandbox.tn-apis.com/catalog/v1/venues/${venueId}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 8c24d5ac-0337-349c-a3b0-17cedb44f455',
        'x-listing-context': `website-config-id=${siteId}`,
      }
    })
      .then(res => {
        res.body.on('data', chunk => {
          console.log('chunk ->', chunk);
          foo += chunk;
        }).on('end', () => {
          console.log('end ->', foo);
          resolve(foo);
        })
      })
  })
}