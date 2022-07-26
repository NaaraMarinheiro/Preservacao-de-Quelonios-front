import { Injectable } from '@angular/core';
import axios from "../utils/axios"

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  urlCiclos = "http://localhost:8080/api/ciclo.json"
  urlCiclo = "http://localhost:8080/api/ciclo"


  constructor() { }

   

  listAll(): Promise<void> {
    return axios.get(this.urlCiclos).then(res => {
      console.log(res);

    }).catch((error) => {
      console.log(error);
    })

  }

  listByID() { }

  insert() { }

  update() { }

  del() { }

}
