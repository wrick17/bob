import 'isomorphic-unfetch'
import { apiUrl, siteId } from "../constants";
import Cookies from 'js-cookie'

export const getPageData = (siteId, session) => {
  return fetch(`${apiUrl}/api/site/${siteId}`, {
    headers: {
      'session-key': Cookies.get('session') || session,
    }
  })
    .then(res => res.json())
}

export const getVenueData = (venueId) => {
  return fetch(`https://www.tn-apis.com/catalog/v1/events/search?q=*&filter=venue%2Fid%20eq%20${venueId}&perPage=4`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer 2efaf2c8-6885-3e82-b387-6d4d5655883b',
      'x-listing-context': `website-config-id=${siteId}`,
    }
  })
    .then(res => res.json())
}

export const getVenueDataServer = (venueId) => {
  return fetch(`https://www.tn-apis.com/catalog/v1/events/search?q=*&filter=venue%2Fid%20eq%20${venueId}&perPage=4`, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer 2efaf2c8-6885-3e82-b387-6d4d5655883b',
      'x-listing-context': `website-config-id=${siteId}`,
    }
  })
    .then(res => res.text())
}

export const zeropad = (value) => {
  if (value !== 0 && (!value || isNaN(value))) return '0';
  let temp = value;
  if (typeof value === String) {
    temp = parseInt(value);
  }
  if (temp > 9) {
    return temp.toString();
  } else {
    return `0${temp}`;
  }
}

export const timeConvert = (time) => {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice(1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join(''); // return adjusted time or original string
}

export const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
