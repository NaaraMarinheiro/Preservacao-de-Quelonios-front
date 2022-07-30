import { Injectable } from '@angular/core';
import { Ciclo } from '../dashboard/ciclo/ciclo-interface';
import axios from "../utils/axios"

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  private urlCiclo = "http://localhost:8080/api/ciclo"


  constructor() { }   

// Requisição GET 
  async listAll() {
    let result = await axios.get(this.urlCiclo);
    return result.data;
  }

  // Requisição POST
 async insert(ciclos:Ciclo) {

  let body = JSON.stringify(ciclos);
  /* let headers:any = new Headers(
    {'Accept': 'application/json',
     'Content-Type': 'application/json'}
  );
 */

  let result = await axios.post(this.urlCiclo,body,{headers: {'content-type':'application/json'}});
  console.log(result);
  return result;  

  }

  // ***
  async listByID(id:string) {
    let result = await axios.get(this.urlCiclo + '/' + id);
    return result.data;
   } 

  update() { }

  del() { }

}
