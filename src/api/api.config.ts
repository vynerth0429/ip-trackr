import { AxiosRequestConfig } from "axios";

export const apiConfig: AxiosRequestConfig = {
  withCredentials: false,
  baseURL: 'https://geo.ipify.org/api/v1?apiKey=at_e9Mg1JcTJQQu9eBfQfFeX1BVIXBn0',
  headers: {
    'Content-Type': 'application/json'
  }
}