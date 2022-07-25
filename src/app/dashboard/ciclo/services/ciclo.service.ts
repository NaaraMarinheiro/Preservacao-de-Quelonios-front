import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CicloService {

  private readonly API = 'localhost:8080/api/ciclo'

  constructor( ) { }

  listAll(){}

  listByID(){}

  insert(){}

  update(){}

  del(){}


}
