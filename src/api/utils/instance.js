import axios from "axios";

const baseURL = "https://www.pre-onboarding-selection-task.shop/";

const baseAPI = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

const authAPI = (url, options) => {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: url,
    headers: { Authorization: `Bearer ${token}` },
    ...options,
  });
  return instance;
};

export const baseInstance = baseAPI(baseURL);
export const authInstance = authAPI(baseURL);
