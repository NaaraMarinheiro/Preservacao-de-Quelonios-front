import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'matricula': new FormControl(null,[Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'senha': new FormControl(null, Validators.required),
      'nome': new FormControl(null,[Validators.required]),
      'tipoUsuario': new FormControl(null,[Validators.required]),
      'status': new FormControl(null,[Validators.required]),
    })
   }

   get f() {
    return this.signupForm.controls;
   }

  onSubmit(){
    console.log(this.signupForm);

   }
  }

