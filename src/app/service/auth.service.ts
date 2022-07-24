import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  async login (username:string, password:string) {
    let result = await axios.post(
      "http://localhost:8080/auth/signin", 
      {
        username: username,
        password: password
      }
    )
    if (result.status == 200) {
      localStorage.setItem("usuarioAtual", JSON.stringify(result.data));
    }
    return result.status;
  } 


}
