/* eslint-disable no-undef */
import axios from 'axios';
import config from '../../Config';

export function fetchEntitiesByParams(params, pageNumber) {
  return (
    axios
      .post(`${config.serverUrl}/entities/search`, {
        ...params,
        pageNumber: pageNumber,
      })
      .then((res) => {
        return res.data;
      })
      // eslint-disable-next-line no-undef
      .catch((err) => Promise.reject(err.response.data.message))
  );
}

export function fetchEntityDetailsById(id) {
  return axios
    .get(`${config.serverUrl}/entitiy/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => Promise.reject(err.response.data.message));
}
