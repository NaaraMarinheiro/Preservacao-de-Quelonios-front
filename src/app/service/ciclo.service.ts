import { Injectable } from '@angular/core';
import { Ciclo } from '../dashboard/ciclo/ciclo-interface';
import axios from "../utils/axios"

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  private urlCiclo = "http://localhost:8080/api/ciclo"
  private urlViagem = "http://localhost:8080/api/viagem"

  constructor() { }

  // Requisição GET 
  async listAll() {
    let result = await axios.get(this.urlCiclo);
    return result.data;
  }

  //Solução temporária, enquanto não faz o endpoint no back que retorna as viagens de um ciclo
  async listAllByCicle(idCiclo:string){
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

  // Requisição POST
  async insert(ciclos: Ciclo) {

    let body = JSON.stringify(ciclos);
    let result = await axios.post(this.urlCiclo, body, { headers: { 'content-type': 'application/json' } });
    console.log(result);
    return result;
  }

  // ***
  async listByID(id:string) {
    try {
      let result = await axios.get(this.urlCiclo + '/' + id);
      return result.data;
    } catch(err:any) {
      if(err.response.status == 404) {
        return null;
      } else {
        throw err;
      }
    }
   } 

  update() { }

  del() { }

}
