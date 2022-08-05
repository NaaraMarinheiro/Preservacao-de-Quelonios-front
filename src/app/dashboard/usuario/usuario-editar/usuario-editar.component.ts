import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Usuario } from '../usuario-interface';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styleUrls: ['./usuario-editar.component.css']
})
export class UsuarioEditarComponent implements OnInit {

  matricula: string;
  signupForm: FormGroup = new FormGroup({});

  documento: Usuario = {
    matricula: '',
    nome: '',
    tipoUsuario: '',
    username: '',
    password: '',
    enabled: true
  }

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private toastrService: ToastrService,
    private router: Router) { }


  async ngOnInit() {
    this.configurarFormulario();

    this.matricula = String(this.route.snapshot.paramMap.get('usuarioId'));

    await this.fetchUser(this.matricula);
  }

  get f() {
    return this.signupForm.controls;
  }

  configurarFormulario() {
    this.signupForm = new FormGroup({
      'matricula': new FormControl(null, [Validators.required]),
      'username': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'nome': new FormControl(null, [Validators.required]),
      'tipoUsuario': new FormControl(null, [Validators.required]),
      'enabled': new FormControl(null, [Validators.required]),
    })
  }

  async fetchUser(matricula: string) {
    let result = await this.usuarioService.listByID(matricula);
    result.password = "";
    this.signupForm.patchValue(result)
  }

  onSubmit() {
    if (this.signupForm.valid) {
      // requisicao http put
      this.usuarioService.update(this.documento, this.documento.matricula);

      console.log(this.documento);
      this.signupForm.reset();
      this.toastrService.success('Usuário alterado com sucesso!!', "Resultado", {
        timeOut: 3000,
      });
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/usuario']));
    } else {
      console.log('formulário inválido')
      Object.keys(this.signupForm.controls).forEach(campo => {
        const controle = this.signupForm.get(campo);
        controle?.markAsTouched();
      })
    }

  }
}