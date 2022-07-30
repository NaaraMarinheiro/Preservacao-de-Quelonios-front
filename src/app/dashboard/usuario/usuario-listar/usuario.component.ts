import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public usuarios:{enabled:boolean,
    matricula:string,
     nome:string,
     password:string,
     tipoUsuario:string,
     username:string} []

  constructor(private usuarioService: UsuarioService) { }


  async  ngOnInit() {
    this.usuarios = await this.usuarioService.listAll();
 }

}
