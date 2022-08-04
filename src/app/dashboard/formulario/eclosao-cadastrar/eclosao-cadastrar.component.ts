import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EclosaoService } from 'src/app/service/eclosao.service';
import { ViagemService } from 'src/app/service/viagem.service';

@Component({
  selector: 'app-eclosao-cadastrar',
  templateUrl: './eclosao-cadastrar.component.html',
  styleUrls: ['./eclosao-cadastrar.component.css']
})
export class EclosaoCadastrarComponent implements OnInit {

  public eclosaoForm: FormGroup;
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
    private minhaEclosaoService: EclosaoService,
    private toastrService: ToastrService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.configurarFormularioEclosao();
    this.getViagem();
  }

  async getViagem() {
    this.idViagem = String(this.route.snapshot.paramMap.get('viagemId'));
    this.idCiclo = String(this.route.snapshot.paramMap.get('cicloId'));
    this.resultado = await this.minhaViagemService.listByID(this.idViagem);
  }

  configurarFormularioEclosao() {
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

    });
  }

  async onSubmit() {
    console.log(this.eclosaoForm);
    if (this.eclosaoForm.valid) {
      let novaEclosao = this.eclosaoForm.value;
      novaEclosao.viagem = {
        idViagem: this.idViagem
      };
      novaEclosao.voluntario = {
        matricula: this.eclosaoForm.value.voluntario
      };
      try {
        let result = await this.minhaEclosaoService.insert(novaEclosao);
        if (result == 201) {
          this.toastrService.success('Formulário cadastrado!', "Sucesso", {
            timeOut: 8000,
          });
          this.eclosaoForm.reset();
        }
      } catch (error) {
        this.toastrService.error('Formulário não cadastrado', "Erro", {
          timeOut: 3000,
        });
      }
    } else {
      console.log('formulario inválido')
      Object.keys(this.eclosaoForm.controls).forEach(campo => {
        const controle = this.eclosaoForm.get(campo);
        controle?.markAsTouched();
      })
    }
  }
}