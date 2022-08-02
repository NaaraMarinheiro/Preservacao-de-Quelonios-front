import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ColetaService } from 'src/app/service/coleta.service';
import { ViagemService } from 'src/app/service/viagem.service';

@Component({
  selector: 'app-coleta-cadastrar',
  templateUrl: './coleta-cadastrar.component.html',
  styleUrls: ['./coleta-cadastrar.component.css']
})

export class ColetaCadastrarComponent implements OnInit {

  public coletaForm: FormGroup;
  public resultado: any = {
    idCiclo: {
      idCiclo: "",
      municipio: {
        nomeMunicipio: ""
      },
      comunidade: {
        nomeComunidade: ""
      },
      uf: ""
    }
  };
  private idViagem: string;
  private idCiclo: string;

  constructor(
    private route: ActivatedRoute,
    private minhaViagemService: ViagemService,
    private minhaColetaService: ColetaService,
    private toastrService: ToastrService,
    private router: Router,
  ) { }



  ngOnInit() {
    this.configurarFormularioColeta();
    this.getViagem();

  }

  async getViagem() {
    this.idViagem = String(this.route.snapshot.paramMap.get('viagemId'));
    this.idCiclo = String(this.route.snapshot.paramMap.get('cicloId'));
    this.resultado = await this.minhaViagemService.listByID(this.idViagem);
  }

  configurarFormularioColeta() {
    this.coletaForm = new FormGroup({
      'voluntario': new FormControl(null, Validators.required),
      'dataColeta': new FormControl(null, Validators.required),
      'nomePraiaTabuleiro': new FormControl(null, Validators.required),
      'numeroCova': new FormControl(null, Validators.required),
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


  async onSubmit() {
    console.log(this.coletaForm);
    if (this.coletaForm.valid) {
      let novaColeta = this.coletaForm.value;
      novaColeta.viagem = {
        idViagem: this.idViagem
      };
      novaColeta.voluntario = {
        matricula: this.coletaForm.value.voluntario
      };
      try {
        let result = await this.minhaColetaService.insert(novaColeta);
        if (result == 201) {
          this.toastrService.success('Formulário cadastrado!', "Sucesso", {
            timeOut: 8000,
          });
          this.coletaForm.reset(); //apaga o form para gerar outro
          //this.router.navigate(['/ciclo/'+ this.idCiclo + "/viagem/" + this.idViagem]);  - redirecionamento 
        }
      } catch (error) {
        this.toastrService.error('Formulário não cadastrado', "Erro", {
          timeOut: 3000,
        });
      }
    }else {
      console.log('formulario inválido')
      Object.keys(this.coletaForm.controls).forEach(campo => {
        const controle = this.coletaForm.get(campo);
        controle?.markAsTouched();
      })
    }
  }
}