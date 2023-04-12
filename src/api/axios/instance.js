import axios from "axios";

const baseURL = "https://www.pre-onboarding-selection-task.shop/";

const token = localStorage.getItem("token");

const baseAPI = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

const authAPI = (url, token, options) => {
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: `Bearer ${token}` },
    ...options,
  });
  return instance;
};

export const baseInstance = baseAPI(baseURL);

export const authInstance = authAPI(baseURL, token);

export const setClientHeaders = (token) => {
  authInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  });
};
