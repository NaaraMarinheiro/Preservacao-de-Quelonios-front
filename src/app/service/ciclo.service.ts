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
      
      return elemento;
    });

    return filteredResult;
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
