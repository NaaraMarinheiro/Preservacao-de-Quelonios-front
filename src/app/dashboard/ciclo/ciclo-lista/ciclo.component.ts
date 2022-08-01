import { Component, OnInit } from '@angular/core';
import { Ciclo } from '../ciclo-interface';
import axios from "../../../utils/axios"
import { CicloService } from 'src/app/service/ciclo.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  formulario!: FormGroup;  
  idCicloPesquisa: string;
  
  // precisa tipar com ainterface, no lugar de any
  public meuArrayDeCiclos:any;

  constructor(private formBuilder: FormBuilder,  
              private service: CicloService,
              private toastrService: ToastrService) { }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      idCiclo: [null, Validators.required],
    });
  }

  async ngOnInit() {
    this.configurarFormulario();
    this.meuArrayDeCiclos = await this.service.listAll();
  }

  async onSubmit() {
    if (this.formulario.valid) {
      
      let resultado: Ciclo = await this.service.listByID(this.idCicloPesquisa);
      console.log(resultado);
      this.meuArrayDeCiclos = [];
      if(resultado) {
        this.meuArrayDeCiclos.push(resultado);
        this.formulario.reset();
      } else {
      
        this.toastrService.warning('Nenhum ciclo foi encontrado!',"Resultado", {
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

}

