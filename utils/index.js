import 'isomorphic-unfetch'
import { apiUrl } from "../constants";

export const getPageData = (siteId) => {
  return fetch(`${apiUrl}/site/${siteId}`)
  .then(res => res.json())
  .then(data => data)
}

export const getVenueData = (siteId, venueId) => {
  return fetch(`https://sandbox.tn-apis.com/catalog/v1/venues/${venueId}`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer 8c24d5ac-0337-349c-a3b0-17cedb44f455',
      'x-listing-context': `website-config-id=${siteId}`
    }
  })
    // .then(res => res.json())
    .then(data => data)
}