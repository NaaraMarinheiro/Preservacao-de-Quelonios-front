import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  documento: Usuario = {
    matricula: '',
    nome: '',
    tipoUsuario: '',
    username: '',
    password: '',
    enabled: true
  }

  constructor(private usuarioService: UsuarioService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  get f() {
    return this.signupForm.controls;
  }

  configurarFormulario() {
    this.signupForm = new FormGroup({
      'matricula': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'senha': new FormControl(null, Validators.required),
      'nome': new FormControl(null, [Validators.required]),
      'tipoUsuario': new FormControl(null, [Validators.required]),
      'status': new FormControl(null, [Validators.required]),
    })
  }

  async onSubmit() {
    try {
      let result = await this.usuarioService.insert(this.documento);
      if (this.signupForm.valid) {
        this.toastrService.success('Usuário cadastrado com sucesso!', "Resultado", {
          timeOut: 3000,
        });
        this.router.navigate(['/usuario']);
      }
    } catch (error) {
      this.toastrService.error('Usuário não cadastrado', "Erro", {
        timeOut: 5000,
      });
    }
  }

}
