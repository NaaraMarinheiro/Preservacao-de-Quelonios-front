import { Injectable } from '@angular/core';
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


  listByID() { }

  insert() { }

  update() { }

  del() { }

}
