import { Injectable } from '@angular/core';
import { Ciclo } from '../dashboard/ciclo/ciclo-interface';
import axios from "../utils/axios"

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  private urlCiclo = "http://localhost:8080/api/ciclo"


  constructor() { }   

  async listAll() {
    let result = await axios.get(this.urlCiclo);
    return result.data;
  }

 async insert(ciclos:Ciclo) {

  let body = JSON.stringify(ciclos);
  let headers:any = new Headers({ 'Content-Type' : 'application/json'});

  let result = await axios.post(this.urlCiclo, body, {headers});
  return result;  

  }



  listByID() { } 

  update() { }

  del() { }

}
