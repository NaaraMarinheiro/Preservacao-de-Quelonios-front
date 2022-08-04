import { Injectable } from "@angular/core";
import { Router } from "@angular/router"
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import axios from "axios";

export interface Params {
  [key: string]: any;
}

interface GetOptions {
  url: string;
  params?: Params;
}

@Injectable()
export class AxiosClient {

  private axiosInstance: AxiosInstance;

  constructor(private router: Router) {
    this.createAxiosInstance();
    this.configureInterceptorRequest();
    this.configureInterceptorResponse(router);
  }

  createAxiosInstance() {
    this.axiosInstance = axios.create();
  }

  configureInterceptorRequest() {
    this.axiosInstance.interceptors.request.use(function (config) {

      let usuarioAtual = localStorage.getItem("usuarioAtual") || "";
      if (JSON.parse(usuarioAtual)) {
        let tokenAtual = JSON.parse(usuarioAtual).token;
        if (config && config.headers) config.headers['Authorization'] = "Bearer " + tokenAtual;
      }
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
  }

  configureInterceptorResponse(router: Router) {
    this.axiosInstance.interceptors.response.use((response) => {
      return response;
    },
      (error) => {
        //Mudar para erro 401 (Unauthorized) no backend  - 04/08/22
        // if (error.response.status === 500) { // erro na autenticação
        localStorage.removeItem("usuarioAtual");
        router.navigate(['/login']);
        // }
        return Promise.reject(error);
      });
  }

  getInstance() {
    return this.axiosInstance;
  }

  public get(url: string, config?: AxiosRequestConfig): any {
    try {
      return this.axiosInstance.get(url, config);
    } catch (error) {
      return error;
    }
  }

  public post(url: string, data?: any, config?: AxiosRequestConfig): any {
    try {
      return this.axiosInstance.post(url, data, config);
    } catch (error) {
      return error;
    }
  }

  public put(url: string, data?: any, config?: AxiosRequestConfig): any {
    try {
      return this.axiosInstance.put(url, data, config);
    } catch (error) {
      return error;
    }
  }

  public patch(url: string, data?: any, config?: AxiosRequestConfig): any {
    try {
      return this.axiosInstance.patch(url, data, config);
    } catch (error) {
      return error;
    }
  }

  public delete(url: string, config?: AxiosRequestConfig): any {
    try {
      return this.axiosInstance.delete(url, config);
    } catch (error) {
      return error;
    }
  }

}