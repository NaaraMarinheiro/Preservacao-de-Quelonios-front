import { Router } from "@angular/router"
import axios from "axios"

let router: any = Router;

// Do something before request is sent
axios.interceptors.request.use((config) => {
  let usuarioAtual = localStorage.getItem("usuarioAtual") || "";
  if (JSON.parse(usuarioAtual)) {
    if(config && config.headers) config.headers['Authorization'] = JSON.parse(usuarioAtual).accessToken
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function trigger
  return response;
}, (error) => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  if (error.response.status === 401) { // erro na autenticação
    localStorage.removeItem("usuarioAtual");
    router.navigate(['/login']);
  }
  return Promise.reject(error);
});

export default axios;