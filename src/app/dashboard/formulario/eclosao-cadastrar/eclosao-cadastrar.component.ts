import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eclosao-cadastrar',
  templateUrl: './eclosao-cadastrar.component.html',
  styleUrls: ['./eclosao-cadastrar.component.css']
})
export class EclosaoCadastrarComponent implements OnInit {
  public eclosaoForm: FormGroup;

  constructor() { }

  onSubmit(){
    console.log(this.eclosaoForm);
  }

  ngOnInit(): void {
  
  this.eclosaoForm = new FormGroup({
    'voluntario': new FormControl(null, Validators.required),
    'numeroCova': new FormControl(null, Validators.required),
    'dataNascimento': new FormControl(null, Validators.required),
    'especie': new FormControl(null, Validators.required),
    'quantidadeFilhoteVivo': new FormControl(null, Validators.required),
    'quantidadeOvoInviavel': new FormControl(null, Validators.required),
    'quantidadeOvoInfertil': new FormControl(null, Validators.required),
    'quantidadeFilhoteMortoFormiga': new FormControl(null, Validators.required),
    'quantidadeFilhoteMortoBicheira': new FormControl(null, Validators.required),
    'quantidadeFilhoteMortoOutros': new FormControl(null, Validators.required),

  })
  
  
  
  }



}
