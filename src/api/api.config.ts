import { AxiosRequestConfig } from "axios";

export const apiConfig: AxiosRequestConfig = {
  withCredentials: false,
  baseURL: 'https://geo.ipify.org/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
}
