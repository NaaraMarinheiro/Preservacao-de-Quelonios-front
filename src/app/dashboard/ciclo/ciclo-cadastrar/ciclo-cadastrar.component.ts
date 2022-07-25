import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-ciclo-cadastrar',
  templateUrl: './ciclo-cadastrar.component.html',
  styleUrls: ['./ciclo-cadastrar.component.css']
})
export class CicloCadastrarComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nomeCiclo: [null, Validators.required],
      uf: ['', Validators.required],
      municipio: ['', Validators.required],
      comunidade: ['', Validators.required]

    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      // criar a requisição http aqui
      console.log(this.formulario);
      this.formulario.reset();

    } else {
      console.log('formulario inválido')
      Object.keys(this.formulario.controls).forEach(campo => {
        const controle = this.formulario.get(campo);
        controle?.markAsTouched();
      })
    }
  }

}
