import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CicloService } from 'src/app/service/ciclo.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ViagemService } from 'src/app/service/viagem.service';

@Component({
  selector: 'app-viagem-editar',
  templateUrl: './viagem-editar.component.html',
  styleUrls: ['./viagem-editar.component.css']
})

export class ViagemEditarComponent implements OnInit {

  public signupForm: FormGroup;
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
    private meuCicloService: CicloService,
    private minhaViagemService: ViagemService,
    private meuUsuarioService: UsuarioService
  ) { }

  async ngOnInit() {
    this.configurarFormulario();
    await this.getViagem();
    this.configurarSelectCoordenador();
  }


  async getViagem() {
    this.idViagem = String(this.route.snapshot.paramMap.get('viagemId'));
    this.idCiclo = String(this.route.snapshot.paramMap.get('cicloId'));
    this.resultado = await this.minhaViagemService.listByID(this.idViagem);

    // let matricula = this.resultado.coordenador.matricula || "";
    // if(this.signupForm && this.signupForm.get('matricula')) {
    //   this.signupForm.get('matricula').setValue(matricula);
    // }

    this.resultado.matricula = this.resultado.coordenador.matricula;
  }

  configurarFormulario() {
    this.signupForm = new FormGroup({
      'nomeciclo': new FormControl(null),
      'estado': new FormControl(null),
      'municipio': new FormControl(null),
      'comunidade': new FormControl(null),
      'id_viagem': new FormControl(null),
      'dataViagem': new FormControl(null, Validators.required),
      'matricula': new FormControl('', Validators.required),
      'participantes': new FormControl('', Validators.required),
    });
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
  }

  onSubmit() {
    // console.log(this.signupForm)

    // tentativa de update - falhou
    /**if (this.signupForm.valid) {
      let viagemAlterada = this.signupForm.value;
      viagemAlterada.idViagem = {
        idViagem: this.idViagem
      };
      viagemAlterada.coordenador = {
        matricula: parseInt(viagemAlterada.coordenador, 10)
      };
      this.minhaViagemService.update(viagemAlterada); */
  }


  /** código reescrito
   * if (this.signupForm.valid) {
     //criar a requisição http aqui
   console.log(this.signupForm);
   this.signupForm.reset();
 
   } else {
   console.log('formulário inválido')
   Object.keys(this.signupForm.controls).forEach(campo => {
      const controle = this.signupForm.get(campo);
      controle?.markAsTouched();
  })*/


  

}