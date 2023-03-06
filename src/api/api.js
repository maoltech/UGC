import axios from "axios";
const baseURL = "https://ugc-backend2.onrender.com/api";
// const baseURL = "http://localhost:4000/api";
const authapi = axios.create({
  baseURL: baseURL,
});

const api = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

api.interceptors.response.use(undefined, function (error) {
  error.originalMessage = error.message;
  Object.defineProperty(error, "message", {
    get: function () {
      if (!error.response) {
        return error.originalMessage;
      }
      return JSON.stringify(error.response.data);
    },
  });
  return Promise.reject(error);
});

// export function extractAPIErrorResponse(axios) {
//   axios.interceptors.response.use(undefined, function (error) {
//     error.originalMessage = error.message;
//     Object.defineProperty(error, "message", {
//       get: function () {
//         if (!error.response) {
//           return error.originalMessage;
//         }
//         return JSON.stringify(error.response.data);
//       },
//     });
//     return Promise.reject(error);
//   });
// }

export const getAPI = (url, signal, param) => {
  return api.get(`${url}`, {
    signal: signal,
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    params: {},
  });
};

export const postAPI = (url, body) => {
  return api.post(`${url}`, body, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
};

export const putAPI = (url, body) => {
  return api.put(`${url}`, body, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
};

export const patchAPI = (url, body) => {
  return api.patch(`${url}`, body, {
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  });
};
