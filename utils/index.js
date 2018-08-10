import 'isomorphic-unfetch'
import { apiUrl } from "../constants";
import {TextDecoder} from 'text-encoding'

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
      'x-listing-context': `website-config-id=${siteId}`,
      'Accept-Encoding': 'gzip, compress, deflate',
    }
  })
    // .then(processChunkedResponse)
    .then(res => res.text())
    .catch(err => err)
}

const processChunkedResponse = (response) => {
  let text = '';
  const reader = response.body
  const decoder = new TextDecoder();

  return readChunk();

  function readChunk() {
    return reader.read()
      .then(appendChunks);
  }

  function appendChunks(result) {
    var chunk = decoder.decode(result.value || new Uint8Array, { stream: !result.done });
    console.log('got chunk of', chunk.length, 'bytes')
    text += chunk;
    console.log(text);
    console.log('text so far is', text.length, 'bytes\n');
    if (result.done) {
      console.log('returning')
      return text;
    } else {
      console.log('recursing')
      return readChunk();
    }
  }
}