import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public usuarios=[
    {
        matricula: "7139",
        nome:"José da Silva",
        tipoUsuario:"Voluntário",
        email:"jose@email.com",
        status:"Ativo",
        permissao:"Voluntário"
    },
    {
        matricula: "4896",
        nome:"Amanda Alvez",
        tipoUsuario:"Voluntário",
        email:"amanda@email.com",
        status:"Ativo",
        permissao:"Voluntário"
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}
