import { Injectable } from '@angular/core';
import { Usuario } from '../dashboard/usuario/usuario-interface'; 
import { AxiosClient } from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlUsuario = "http://localhost:8080/api/usuario"

  constructor(private meuAxios: AxiosClient) { }


  // Requisição GET 
  async listAll() {
    let result = await this.meuAxios.get(this.urlUsuario);
    return result.data._embedded.usuarioVOList;
  }

  listCoordenadores() {

  }


  // Requisição POST
  async insert(usuarios: Usuario) {
    let body = JSON.stringify(usuarios);
    let result = await this.meuAxios.post(this.urlUsuario, body,
      { headers: { 'content-type': 'application/json' } });

    console.log(result);
    return result;
  }

  async listByID(id: string) {

    try {
      let result = await this.meuAxios.get(this.urlUsuario + '/' + id);
      return result.data;
    } catch (err: any) {
      if (err.response.status == 404) {
        return null;
      } else {
        throw err;
      }
    }

  }

  // Requisição PUT
  async update(usuarios: Usuario, id: string) {
    let body = JSON.stringify(usuarios);
    let url = `${this.urlUsuario}/${id}`;

    let result = await this.meuAxios.put(url, body,
      { headers: { 'content-type': 'application/json' } });

    console.log(result);
    return result;
  }

  // Requisicao DELETE
  // Não está permitindo a deleção
  async del(matricula: string) {
    let url = `${this.urlUsuario}/${matricula}`;

    let result = await this.meuAxios.delete(url);
    console.log("deletou");
    return result;
  }


}

