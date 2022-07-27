import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CicloService } from 'src/app/service/ciclo.service';
import { Ciclo } from '../ciclo-interface';

@Component({
  selector: 'app-ciclo-cadastrar',
  templateUrl: './ciclo-cadastrar.component.html',
  styleUrls: ['./ciclo-cadastrar.component.css']
})
export class CicloCadastrarComponent implements OnInit {

  formulario!: FormGroup;

  documento:Ciclo={
    nomeCiclo: '',
    uf: '',
    municipio: {
      nomeMunicipio: ''
    },
    comunidade: {
      nomeComunidade: ' '
    }
  }

  constructor(private formBuilder: FormBuilder,
              private service: CicloService) { }

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
      this.service.insert(this.documento);
    
      console.log(this.documento);
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
