import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const baseURL = "https://en.wikipedia.org/api/rest_v1/"; //import.meta.env.VITE_API_BASE_URL;

if (!baseURL) {
  throw new Error("Base URL must be defined in the .env file");
}

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }
}

const apiService = new ApiService(baseURL);

export default apiService;
