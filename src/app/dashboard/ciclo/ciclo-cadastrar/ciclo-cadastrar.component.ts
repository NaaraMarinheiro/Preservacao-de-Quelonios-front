import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CicloService } from 'src/app/service/ciclo.service';
import { ComunidadeService } from 'src/app/service/comunidade.service';
import { MunicipioService } from 'src/app/service/municipio.service';
import { Ciclo } from '../ciclo-interface';
import { ToastrService } from 'ngx-toastr';

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
      idMunicipio: ''
    },
    comunidade: {
      idComunidade: ' '
    }
  }

  // variavel que guarda os municipios
  public arrayMunicipios:any;
  public arrayComunidades:any;

  constructor(private formBuilder: FormBuilder,
              private service: CicloService,
              private municipioService:MunicipioService,
              private comunidadeService:ComunidadeService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.configurarFormulario();
    this.selecionarMunicipio();
    this. selecionarComunidade();
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
      this.toastrService.success('Ciclo cadastrado com sucesso!',"Resultado", {
        timeOut: 3000,
      });
    } else {
      console.log('formulario inválido')
      Object.keys(this.formulario.controls).forEach(campo => {
        const controle = this.formulario.get(campo);
        controle?.markAsTouched();
      })
    }
  }


  async selecionarMunicipio(){
    this.arrayMunicipios = await this.municipioService.listAll();

  }


  async selecionarComunidade(){
    this.arrayComunidades = await this.comunidadeService.listAll();

  }



}
