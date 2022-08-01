import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from '../usuario-interface';

@Component({
  selector: 'app-usuario-cadastrar',
  templateUrl: './usuario-cadastrar.component.html',
  styleUrls: ['./usuario-cadastrar.component.css']
})
export class UsuarioCadastrarComponent implements OnInit {

  signupForm: FormGroup = new FormGroup({});

  documento:Usuario={
    matricula: '',
    nome: '',
    tipoUsuario: '',
    username: '',
    password:'',
    enabled: true
  }

  constructor(private usuarioService:UsuarioService,
              private toastrService: ToastrService){}

  ngOnInit(): void {
    this.configurarFormulario();
   }

   get f() {
    return this.signupForm.controls;
   }

   configurarFormulario() {
    this.signupForm = new FormGroup({
      'matricula': new FormControl(null,[Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'senha': new FormControl(null, Validators.required),
      'nome': new FormControl(null,[Validators.required]),
      'tipoUsuario': new FormControl(null,[Validators.required]),
      'status': new FormControl(null,[Validators.required]),
    })
   }

   onSubmit(){
    if (this.signupForm.valid){
      // requisicao http aqui
      this.usuarioService.insert(this.documento)
        
      this.toastrService.success('Usuário inserido com sucesso!!',"Resultado", {
        timeOut: 3000,
      });
    console.log(this.documento);
    this.signupForm.reset();
  
    }else{
      console.log('formulário inválido')
      Object.keys(this.signupForm.controls).forEach(campo =>{
        const controle =this.signupForm.get(campo);
          controle?.markAsTouched();
      })
      
    }
  
   }
  }
