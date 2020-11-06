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

export function fetchNumberOfPagesByParams(params, entitiesPerPage) {
  return (
    axios
      .post(`${config.serverUrl}/entities/pages`, {
        ...params,
        entitiesPerPage: entitiesPerPage,
      })
      .then((res) => {
        return res.data;
      })
      // eslint-disable-next-line no-undef
      .catch((err) => Promise.reject(err.response.data.message))
  );
}

export function fetchEntityInsightsById(id) {
  return axios
    .get(`${config.serverUrl}/entity/${id}/insights`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => Promise.reject(err.response.data.message));
}

export function saveInsights(id, message) {
  return axios
    .post(`${config.serverUrl}/entity/${id}/insights`, { insights: message })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err.response.data.message));
}
export function fetchEntityDetailsById(id) {
  return axios
    .get(`${config.serverUrl}/entity/${id}/properties`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => Promise.reject(err.response.data.message));
}

export function fetchEntityRelationsById(id, hops) {
  return axios
    .get(`${config.serverUrl}/entity/${id}/relations?hops=${hops}`)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err.response.data.message));
}

export function editEntityFieldById(id, key, value) {
  return axios
    .post(`${config.serverUrl}/entity/${id}/properties`, {
      key: key,
      value: value,
    })
    .then((res) => res.data)
    .catch((err) => Promise.reject(err.response.data.message));
}
