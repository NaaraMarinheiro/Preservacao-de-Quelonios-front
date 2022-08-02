import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from '../usuario-interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  formulario!: FormGroup;
  matriculaPesquisa: string;

  public usuarios:{enabled:boolean,
    matricula:string,
     nome:string,
     password:string,
     tipoUsuario:string,
     username:string} []

  constructor(private usuarioService: UsuarioService,
              private formBuilder: FormBuilder,
              private toastrService: ToastrService) { }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      matricula: [null, Validators.required],
    });
  }

  async  ngOnInit() {
    this.configurarFormulario();
    this.usuarios = await this.usuarioService.listAll();
  }

  async onSubmit() {
    if (this.formulario.valid) {
      
      let resultado: Usuario = await this.usuarioService.listByID(this.matriculaPesquisa);
      console.log(resultado);
      this.usuarios = [];
      if(resultado) {
        this.usuarios.push(resultado);
        this.formulario.reset();
      } else {
        this.toastrService.warning('Nenhum usuário foi encontrado!',"Resultado", {
          timeOut: 3000,
        });
      }
    } else {
      console.log('formulario inválido')
      Object.keys(this.formulario.controls).forEach(campo => {
        const controle = this.formulario.get(campo);
        controle?.markAsTouched();
      })
    }
  }

 async deletarUsuario(matricula:any){
  await this.usuarioService.del(matricula);
  await this.ngOnInit();
  this.toastrService.success('Usuário deletado com sucesso!',"Resultado", {
    timeOut: 3000,
  });
 }
}
