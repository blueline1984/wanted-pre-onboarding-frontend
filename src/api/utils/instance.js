import axios from "axios";

const baseURL = "https://www.pre-onboarding-selection-task.shop/";

const baseAPI = (url, options) => {
  return axios.create({ baseURL: url, ...options });
};

export const baseInstance = baseAPI(baseURL);
