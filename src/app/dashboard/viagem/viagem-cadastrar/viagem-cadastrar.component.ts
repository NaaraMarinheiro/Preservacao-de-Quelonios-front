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
    if (this.signupForm.valid) {
      // criar a requisição http aqui
      console.log(this.signupForm);
      this.signupForm.reset();

    } else {
      console.log('formulário inválido')
      Object.keys(this.signupForm.controls).forEach(campo => {
        const controle =this.signupForm.get(campo);
        controle?.markAsTouched();
      })
    }
  }
}