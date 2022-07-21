import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viagem-cadastrar',
  templateUrl: './viagem-cadastrar.component.html',
  styleUrls: ['./viagem-cadastrar.component.css']
})
export class ViagemCadastrarComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});

   ngOnInit(): void {
    this.signupForm = new FormGroup({
      'nomeciclo': new FormControl(null),
      'estado': new FormControl(null),
      'municipio': new FormControl(null),
      'comunidade': new FormControl(null),
      'data': new FormControl(null, Validators.required),
      'coordenador': new FormControl('', Validators.required),
      'voluntario': new FormControl('', Validators.required),
    })
   }

   get f() {
    return this.signupForm.controls;
   }

   onSubmit(){
    console.log("Aqui")
    console.log(this.signupForm);

   }
}
