import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SolturaService } from 'src/app/service/soltura.service';
import { ViagemService } from 'src/app/service/viagem.service';

@Component({
  selector: 'app-soltura-cadastrar',
  templateUrl: './soltura-cadastrar.component.html',
  styleUrls: ['./soltura-cadastrar.component.css']
})
export class SolturaCadastrarComponent implements OnInit {

  public solturaForm: FormGroup;
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
    private minhaSolturaService: SolturaService,
    private toastrService: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.configurarFormularioSoltura();
    this.getViagem();

  }

  async getViagem() {
    this.idViagem = String(this.route.snapshot.paramMap.get('viagemId'));
    this.idCiclo = String(this.route.snapshot.paramMap.get('cicloId'));
    this.resultado = await this.minhaViagemService.listByID(this.idViagem);
  }

  configurarFormularioSoltura() {
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

  async onSubmit() {
    console.log(this.solturaForm);
    if (this.solturaForm.valid) {
      let novaSoltura = this.solturaForm.value;
      novaSoltura.viagem = {
        idViagem: this.idViagem
      };
      novaSoltura.voluntario = {
        matricula: this.solturaForm.value.voluntario
      };
      try {
        let result = await this.minhaSolturaService.insert(novaSoltura);
        if (result == 201) {
          this.toastrService.success('Formulário cadastrado!', "Sucesso", {
            timeOut: 8000,
          });
          this.solturaForm.reset();
        }
      } catch (error) {
        this.toastrService.error('Formulário não cadastrado', "Erro", {
          timeOut: 3000,
        });
      }
    }else {
      console.log('formulario inválido')
      Object.keys(this.solturaForm.controls).forEach(campo => {
        const controle = this.solturaForm.get(campo);
        controle?.markAsTouched();
      })
    }
  }
}


