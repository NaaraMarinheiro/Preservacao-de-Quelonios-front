import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
signupForm: FormGroup = new FormGroup({});

ngOnInit(): void {
  this.signupForm = new FormGroup({
    'matricula': new FormControl(null,[Validators.required]),
    'email': new FormControl(null, [Validators.required, Validators.email]),
    'nome': new FormControl(null,[Validators.required]),
    'tipoUsuario': new FormControl(null,[Validators.required]),
  })
 }

 get f() {
  return this.signupForm.controls;
 }

onSubmit(){
  console.log(this.signupForm);

 }
}


