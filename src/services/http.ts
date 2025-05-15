// Sample axios setup file included for reference, not currently used in the project

import axios from "axios";
import { config } from "../config/config";
import { UNAUTHORIZED } from "../config/httpStatusCodes";

const instance = axios.create({
  baseURL: config.apiBaseUrl,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;
    if (response.status === UNAUTHORIZED) {
      window.location.href = config.appBaseUrl || '';
    }
    if (response.status === 409) {
      window.location.href = config.baseName || '';
    }
    throw error;
  }
);

export default instance;