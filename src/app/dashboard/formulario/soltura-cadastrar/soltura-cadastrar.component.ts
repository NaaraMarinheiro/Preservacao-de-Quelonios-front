import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-soltura-cadastrar',
  templateUrl: './soltura-cadastrar.component.html',
  styleUrls: ['./soltura-cadastrar.component.css']
})
export class SolturaCadastrarComponent implements OnInit {
  public solturaForm: FormGroup;

  constructor() { }

  onSubmit(){
    console.log(this.solturaForm)
  }

  ngOnInit(): void {

    this.solturaForm = new FormGroup({
      'voluntario': new FormControl(null, Validators.required),
      'numeroAnimal': new FormControl(null, Validators.required),
      'especie': new FormControl(null, Validators.required),
      'dataSoltura': new FormControl(null, Validators.required),
      'carapacaComprimento': new FormControl(null, Validators.required),
      'carapacaLargura': new FormControl(null, Validators.required),
      'plastraoComprimento': new FormControl(null, Validators.required),
      'plastraoLargura': new FormControl(null, Validators.required),
      'peso': new FormControl(null, Validators.required),
      'altura': new FormControl(null, Validators.required),

    } )

  }

}
