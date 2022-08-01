import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  matricula: string;
  signupForm: FormGroup = new FormGroup({});


  constructor (private route: ActivatedRoute, private meuService: UsuarioService,  private toastrService: ToastrService){
  }

  async ngOnInit(){
    this.signupForm = new FormGroup({
      'matricula': new FormControl(null,[Validators.required]),
      'username': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'nome': new FormControl(null,[Validators.required]),
      'tipoUsuario': new FormControl(null,[Validators.required]),
      'enabled': new FormControl(null,[Validators.required]),
    })

    this.matricula = String(this.route.snapshot.paramMap.get('usuarioId'));

    await this.fetchUser(this.matricula);
   }

   get f() {
    return this.signupForm.controls;
   }

   onSubmit(){
    if (this.signupForm.valid){
    console.log(this.signupForm);
    this.signupForm.reset();
    this.toastrService.success('Usuário alterado com sucesso!!',"Resultado", {
      timeOut: 3000,
    });
    }else{
      console.log('formulário inválido')
      Object.keys(this.signupForm.controls).forEach(campo =>{
        const controle =this.signupForm.get(campo);
          controle?.markAsTouched();
      })
      
    }
  
   }

   async fetchUser(matricula:string){
    let result = await this.meuService.listByID(matricula);
    result.password = "";
    this.signupForm.patchValue(result)
   }
}