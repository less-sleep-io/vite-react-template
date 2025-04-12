import Axios from "axios";

import { env } from "~/config/env";

export const api = Axios.create({
  baseURL: env.API_URL,
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    // Handle errors here
    console.error(message);

    if (error.response?.status === 401) {
      throw new Error("Not Found");
    }

    return Promise.reject(error);
  },
);
