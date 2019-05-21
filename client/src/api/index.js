import axios from "axios";

export function apiCall(method, path, data) {
  return new Promise((resolve, reject) => {
    return axios[method](path)
      .then(res => resolve(res.data))
      .catch(err => reject(err.response.data.error));
  });
}
