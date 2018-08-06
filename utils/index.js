import 'isomorphic-unfetch'
import { apiUrl } from "../constants";

export const getPageData = (siteId) => {
  return fetch(`${apiUrl}/site/${siteId}`)
  .then(res => res.json())
  .then(data => data)
}