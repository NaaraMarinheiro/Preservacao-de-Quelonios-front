import { Injectable } from '@angular/core';
import { Usuario } from '../dashboard/usuario/usuario-interface';
import axios from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlUsuario = "http://localhost:8080/api/usuario"

  constructor() { }


  // Requisição GET 
  async listAll() {
    let result = await axios.get(this.urlUsuario);
    return result.data._embedded.usuarioVOList;
  }

  listCoordenadores() {
  
  }

  // Requisição POST
  async insert(usuarios: Usuario) {
    let body = JSON.stringify(usuarios);
    let result = await axios.post(this.urlUsuario, body,
      { headers: { 'content-type': 'application/json' } });

    console.log(result);
    return result;
  }
}
