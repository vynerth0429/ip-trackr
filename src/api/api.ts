import axios, { AxiosRequestConfig } from 'axios';

import { apiConfig } from './api.config';

const axiosInstance = axios.create(apiConfig);

axiosInstance.interceptors.request.use((config) => {
  const headerAuthorization = {
    'Content-Type': 'application/json',
  };

  return {
    ...config,
    headers: {
      ...config.headers,
      ...headerAuthorization,
    },
  }
});

axiosInstance.interceptors.response.use((params) => {
  // Add something if needed

  return {
    ...params
  }
}, (error) => {
  return Promise.reject(error.response);
});

export async function get<T>(
  path: string,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.get(path, config);
  return data;
};

export async function post<T>(
  path: string,
  reqData?: any,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.post(path, reqData, config);
  return data;
};

export async function patch<T>(
  path: string,
  reqData?: any,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.patch(path, reqData, config);
  return data;
};

export async function put<T>(
  path: string,
  reqData?: any,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.put(path, reqData, config);
  return data;
};

export async function del<T>(
  path: string,
  config?: AxiosRequestConfig | undefined
): Promise<T> {
  const { data } = await axiosInstance.delete(path, config);
  return data;
};

const convertJsonToParams = (
  json: {
    [dynamic: string]: unknown
  }
): string => {
  let jsonString: string = '';

  if (json) {
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        const value = json[key];

        if (value === undefined || value === null) {
          continue;
        }

        if (jsonString.length > 0) {
          jsonString += '&';
        }

        if (Array.isArray(value)) {
          for (let index = 0; index < value.length; index++) {
            const item = value[index];
            if (item === undefined || item === null) {
              continue;
            }

            if (index > 0) {
              jsonString += '&';
            }

            jsonString += `${key}=${item}`;
          }
        } else {
          jsonString += `${key}=${value}`;
        }
      }
    }
  }

  return jsonString;
};

export const API = {
  get,
  post,
  patch,
  put,
  del,
  convertJsonToParams,
};