import { Injectable } from '@angular/core';
import axios from '../utils/axios';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  private urlViagem = "http://localhost:8080/api/viagem"

  constructor() { }

  async listAll() {
    let result = await axios.get(this.urlViagem);
    return result.data._embedded.viagemVOList;
  }

  async insert(novaViagem: any) {
    let result = await axios.post(this.urlViagem, novaViagem);
    return result.data;
  }

  async listByID(idViagem: string) {
    let result = await axios.get(this.urlViagem + '/' + idViagem);
    return result.data;
  }

  async update(idViagem: string) {
    let result = await axios.put(this.urlViagem + '/' + 'editar' + idViagem);
    return result.data;
  }

  delete() { }

  async listById2(idCiclo:string){
    let result = await axios.get(this.urlViagem);
    let filteredResult = result.data._embedded.viagemVOList.filter((elemento: any) => {
      return (elemento.idCiclo.idCiclo == idCiclo)
    });

    filteredResult = filteredResult.map((elemento: any) => {
      let dataAtual = new Date();
      let dataDaViagem = new Date(elemento.dataViagem)
      let iniciada = dataAtual > dataDaViagem;
      elemento.status = (iniciada == true ? "Iniciada": "Agendada");

      let dataSplit = elemento.dataViagem.split("-")
      elemento.dataFormatada = dataSplit[2] + "/" + dataSplit[1]+ "/" + dataSplit[0];
      
      return elemento;
    });

    return filteredResult;
  }


  // Find all Viagens com classificação entre agendada e iniciada
  async listAllViagensClassificadas() {
    let resultadoDaRequisicao = await axios.get(this.urlViagem);
    let arrayDeViagens = resultadoDaRequisicao.data._embedded.viagemVOList;

    let viagensClassificadas = arrayDeViagens.map((elemento: any) => {
      let dataAtual = new Date();
      let dataDaViagem = new Date(elemento.dataViagem);
      let iniciada = dataAtual > dataDaViagem;

      elemento.status = (iniciada == true ? "Iniciada" : "Agendada");

      let dataSplit = elemento.dataViagem.split("-")
      elemento.dataFormatada = dataSplit[2] + "/" + dataSplit[1]+ "/" + dataSplit[0];
      
      return elemento;
    });

    console.log(viagensClassificadas)
    return viagensClassificadas
  }
}
