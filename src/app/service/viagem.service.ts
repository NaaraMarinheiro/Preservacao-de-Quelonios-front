import { Injectable } from '@angular/core';
import { Viagem } from '../dashboard/viagem/viagem-interface';
import { AxiosClient } from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  private urlViagem = "http://localhost:8080/api/viagem"

  constructor(private meuAxios: AxiosClient) { }

  async listAll() {
    let result = await this.meuAxios.get(this.urlViagem);
    return result.data._embedded.viagemVOList;
  }

  async insert(novaViagem: any) {
    let result = await this.meuAxios.post(this.urlViagem, novaViagem);
    return result.data;
  }

  async listByID(idViagem: string) {
    let result = await this.meuAxios.get(this.urlViagem + '/' + idViagem);
    return result.data;
  }

  async update(idViagem: any, viagemAtualizada: any) {
    let endpoint = this.urlViagem + '/' + idViagem;
    let result = await this.meuAxios.put(endpoint, viagemAtualizada);
    return result.status;
  }

  async editar(viagens: Viagem, id: string) {
    let body = JSON.stringify(viagens);
    let url = `${this.urlViagem}/${id}`;

    let result = await this.meuAxios.put(url, body,
      { headers: { 'content-type': 'application/json' } });
  }

  delete() { }

  async listById2(idViagem: string) {
    let result = await this.meuAxios.get(this.urlViagem);
    let filteredResult = result.data._embedded.viagemVOList.filter((elemento: any) => {
      return (elemento.idViagem == idViagem)
    });

    filteredResult = filteredResult.map((elemento: any) => {
      let dataAtual = new Date();
      let dataDaViagem = new Date(elemento.dataViagem)
      let iniciada = dataAtual > dataDaViagem;
      elemento.status = (iniciada == true ? "Iniciada" : "Agendada");

      let dataSplit = elemento.dataViagem.split("-")
      elemento.dataFormatada = dataSplit[2] + "/" + dataSplit[1] + "/" + dataSplit[0];

      return elemento;
    });

    return filteredResult;
  }

  async listAllViagensClassificadas() {
    let resultadoDaRequisicao = await this.meuAxios.get(this.urlViagem);
    let arrayDeViagens = resultadoDaRequisicao.data._embedded.viagemVOList;

    let viagensClassificadas = arrayDeViagens.map((elemento: any) => {
      let dataAtual = new Date();
      let dataDaViagem = new Date(elemento.dataViagem);
      let iniciada = dataAtual > dataDaViagem;

      elemento.status = (iniciada == true ? "Iniciada" : "Agendada");

      let dataSplit = elemento.dataViagem.split("-")
      elemento.dataFormatada = dataSplit[2] + "/" + dataSplit[1] + "/" + dataSplit[0];

      return elemento;
    });

    console.log(viagensClassificadas)
    return viagensClassificadas
  }
}
