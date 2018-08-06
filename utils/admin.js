import 'isomorphic-unfetch'
import { apiUrl } from "../constants";

export const getSites = () => {
  return fetch(`${apiUrl}/list`)
    .then(res => res.json())
    .then(data => data)
}