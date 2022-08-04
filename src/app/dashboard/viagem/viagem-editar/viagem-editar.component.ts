import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CicloService } from 'src/app/service/ciclo.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ViagemService } from 'src/app/service/viagem.service';
import { Viagem } from '../viagem-interface';

@Component({
  selector: 'app-viagem-editar',
  templateUrl: './viagem-editar.component.html',
  styleUrls: ['./viagem-editar.component.css']
})

export class ViagemEditarComponent implements OnInit {

  public viagemForm: FormGroup;
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
  public result: FormGroup;

  documento: Viagem = {
    idViagem: '',
    dataViagem: '',
    coordenador: {
      idCoordenador: ''
    },
    ciclo: {
      idCiclo: '',
      nomeCiclo: '',
      municipio: {
        idMunicipio: '',
        nomeMunicipio: ''
      },
      comunidade: {
        idComunidade: '',
        nomeComunidade: ''
      }
    }
  }

  constructor(
    private route: ActivatedRoute,
    private meuCicloService: CicloService,
    private minhaViagemService: ViagemService,
    private meuUsuarioService: UsuarioService,
    private toastrService: ToastrService,
    private router: Router,
  ) { }

  async ngOnInit() {
    this.configurarFormulario();
    await this.getViagem();

    this.configurarData();
    this.configurarSelectCoordenador();
  }

  async getViagem() {
    this.idViagem = String(this.route.snapshot.paramMap.get('viagemId'));
    this.idCiclo = String(this.route.snapshot.paramMap.get('cicloId'));
    this.resultado = await this.minhaViagemService.listByID(this.idViagem);

    this.resultado.matricula = this.resultado.coordenador.matricula;
  }

  configurarData(){ 
    let dataViagem = this.viagemForm.get('dataViagem');
    if (dataViagem) {
      dataViagem.setValue(this.resultado.dataViagem);
    }
  }

  configurarFormulario() {
    this.viagemForm = new FormGroup({
      'dataViagem': new FormControl(null, Validators.required),
      'matricula': new FormControl('', Validators.required)
    });
  }

  get f() {
    return this.viagemForm.controls;
  }

  public arrayDeCoordenadores: any[] = [];
  async configurarSelectCoordenador() {
    this.arrayDeCoordenadores = await this.meuUsuarioService.listAll();
    this.arrayDeCoordenadores = this.arrayDeCoordenadores.filter((elemento) => {
      return elemento.tipoUsuario == "ADMIN"
    })

    let matricula = this.viagemForm.get('matricula');
    if (matricula) {
      matricula.setValue(this.resultado.matricula); 
    }
  }

  dateChange(event: any) {
    let dataViagem = this.viagemForm.get('dataViagem');
    if (dataViagem) {
      dataViagem.setValue(event.target.value);
    }
  }

  // Adaptação enquanto não faz o endpoint do back  - 04/08/22
  // Modificar após correção do update de viagem - 04/08/22

  async onSubmit() {
    //ajuste de formato do objeto a ser enviado para o service
    try {
      if (this.viagemForm.valid) {
        let viagemAlterada = this.viagemForm.value;

        viagemAlterada.idCiclo = {
          idCiclo: +this.resultado.idCiclo.idCiclo
        };
        viagemAlterada.coordenador = {
          matricula: +viagemAlterada.matricula
        };

        delete viagemAlterada.matricula;

        // alteração no service para passar o id e o objeto
        let result = await this.minhaViagemService.update(this.idViagem, viagemAlterada);
        if (result == 200) {
          this.toastrService.success('Viagem alterada com sucesso!', "Resultado", {
            timeOut: 3000,
          });
          this.router.navigate(['/ciclo/' + this.idCiclo]);
        }
      }
    } catch (error) {
      this.toastrService.error('Viagem não alterada', "Erro", {
        timeOut: 5000,
      });
    }
  }


}
