import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CicloService } from 'src/app/service/ciclo.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ViagemService } from 'src/app/service/viagem.service';

@Component({
  selector: 'app-viagem-cadastrar',
  templateUrl: './viagem-cadastrar.component.html',
  styleUrls: ['./viagem-cadastrar.component.css']
})


export class ViagemCadastrarComponent implements OnInit {


  //req http
  public resultado: any = {
    municipio: {
      nomeMunicipio: ""
    },
    comunidade: {
      nomeComunidade: ""
    },
    uf: ""
  };
  //req http
  constructor(
    private route: ActivatedRoute,
    private meuCicloService: CicloService,
    private minhaViagemService: ViagemService,
    private meuUsuarioService: UsuarioService
  ) { }

  signupForm: FormGroup = new FormGroup({});
  private idCiclo: string;

  async ngOnInit() {
    /**
     * 1. Configrar o formulário
     * 2. Pegar detalhes do ciclo
     * 3. Popular o select de coordenador
     * 4. Enviar dados pro backend (submit)
     */
    this.configurarFormulario();
    this.getCiclo();
    this.configurarSelectCoordenador();

  }

  //req http
  async getCiclo() {
    this.idCiclo = String(this.route.snapshot.paramMap.get('cicloId'));
    this.resultado = await this.meuCicloService.listByID(this.idCiclo);
  }

  get f() {
    return this.signupForm.controls;
  }

  public arrayDeCoordenadores: any[] = [];
  async configurarSelectCoordenador() {
    this.arrayDeCoordenadores = await this.meuUsuarioService.listAll();
    this.arrayDeCoordenadores = this.arrayDeCoordenadores.filter((elemento) => {
      return elemento.tipoUsuario == "ADMIN"
    })

    console.log(this.arrayDeCoordenadores)
  }

  onSubmit() {
    console.log(this.signupForm)
    if (this.signupForm.valid) {
      let novaViagem = this.signupForm.value;
      novaViagem.idCiclo = {
        idCiclo: this.idCiclo
      };
      novaViagem.coordenador = {
        matricula: parseInt(novaViagem.coordenador, 10)
      };
      this.minhaViagemService.insert(novaViagem);
    }

    // if (this.signupForm.valid) {
    //   // criar a requisição http aqui
    //   console.log(this.signupForm);
    //   this.signupForm.reset();

    // } else {
    //   console.log('formulário inválido')
    //   Object.keys(this.signupForm.controls).forEach(campo => {
    //     const controle = this.signupForm.get(campo);
    //     controle?.markAsTouched();
    //   })
    // }
  }

  configurarFormulario() {
    this.signupForm = new FormGroup({
      dataViagem: new FormControl(null, Validators.required),
      coordenador: new FormControl('', Validators.required),
      voluntario: new FormControl('', Validators.required),
    })
  }

}
