import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlUsuario = "http://localhost:8080/api/usuario"

  constructor() { }

  async listAll(){
    let result = await axios.get(this.urlUsuario);
    return result.data._embedded.usuarioVOList;
  }

  listCoordenadores() {
  
  }




}
