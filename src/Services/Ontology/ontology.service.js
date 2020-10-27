import axios from 'axios';
import config from '../../Config';

export function getAllCategories() {
  return axios
    .get(`http://${config.serverUrl}/types/entities`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => Promise.reject(err.response.data.message));
}
