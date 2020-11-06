/* eslint-disable no-undef */
import axios from 'axios';
import config from '../../Config';

export function fetchAllCategories() {
  return axios
    .get(`${config.serverUrl}/types/entities`)
    .then((res) => {
      console.log(res.data)
      return res.data;
    })
    .catch((err) => Promise.reject(err.response.data.message));
}

export function fetchCategoryById(id) {
  return axios
    .get(`${config.serverUrl}/types/entities/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => Promise.reject(err.response.data.message));
}
