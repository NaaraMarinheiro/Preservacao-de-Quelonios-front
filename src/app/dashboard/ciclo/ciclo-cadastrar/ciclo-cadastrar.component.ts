import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CicloService } from 'src/app/service/ciclo.service';
import { ComunidadeService } from 'src/app/service/comunidade.service';
import { MunicipioService } from 'src/app/service/municipio.service';
import { Ciclo } from '../ciclo-interface';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ciclo-cadastrar',
  templateUrl: './ciclo-cadastrar.component.html',
  styleUrls: ['./ciclo-cadastrar.component.css']
})

export class CicloCadastrarComponent implements OnInit {

  formulario!: FormGroup;

  documento: Ciclo = {
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
  public arrayMunicipios: any;
  public arrayComunidades: any;

  constructor(private formBuilder: FormBuilder,
    private cicloService: CicloService,
    private municipioService: MunicipioService,
    private comunidadeService: ComunidadeService,
    private toastrService: ToastrService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.configurarFormulario();
    this.selecionarMunicipio();
    this.selecionarComunidade();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nomeCiclo: [null, Validators.required],
      uf: ['', Validators.required],
      municipio: ['', Validators.required],
      comunidade: ['', Validators.required]

    });
  }

  async onSubmit() {
    try {
      let result = await this.cicloService.insert(this.documento);
      if (this.formulario.valid) {
        this.toastrService.success('Ciclo cadastrado com sucesso!', "Resultado", {
          timeOut: 3000,
        });
        this.router.navigate(['/ciclo']);
      }
    } catch (error) {
      this.toastrService.error('Ciclo não cadastrado', "Erro", {
        timeOut: 5000,
      });


      //} else {
      //  console.log('formulario inválido')
      //  Object.keys(this.formulario.controls).forEach(campo => {
      //    const controle = this.formulario.get(campo);
      //    controle?.markAsTouched();

    }}

  async selecionarMunicipio(){
      this.arrayMunicipios = await this.municipioService.listAll();
    }

  async selecionarComunidade(){
      this.arrayComunidades = await this.comunidadeService.listAll();
    }

}
