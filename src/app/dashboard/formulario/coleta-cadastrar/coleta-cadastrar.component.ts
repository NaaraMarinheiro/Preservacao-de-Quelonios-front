import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-coleta-cadastrar',
  templateUrl: './coleta-cadastrar.component.html',
  styleUrls: ['./coleta-cadastrar.component.css']
})
export class ColetaCadastrarComponent implements OnInit {
  public coletaForm: FormGroup;

  constructor(){
  }

  onSubmit(){
    console.log(this.coletaForm);
  }

  ngOnInit() {

    this.coletaForm = new FormGroup({
      'voluntario': new FormControl(null, Validators.required),
      'dataColeta':  new FormControl(null, Validators.required),
      'nomePraiaTabuleiro': new FormControl(null, Validators.required),
      'numeroCova': new FormControl(null,Validators.required),
      'quantidadeOvos': new FormControl(null, Validators.required),
      'especie': new FormControl(null, Validators.required),
      'distanciaAgua': new FormControl(null, Validators.required),
      'distanciaVegetacao': new FormControl(null, Validators.required),
      'profundidadePrimeiroOvo': new FormControl(null, Validators.required),
      'profundidadeTotal': new FormControl(null, Validators.required),
      'larguraNinho': new FormControl(null, Validators.required),
      'larguraPata': new FormControl(null, Validators.required),
      'larguraEntrePatas': new FormControl(null, Validators.required),
     
    });
  }


}

