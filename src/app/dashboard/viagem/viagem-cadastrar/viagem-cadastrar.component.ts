import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private meuUsuarioService: UsuarioService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  viagemCadastrarForm: FormGroup = new FormGroup({});
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
    return this.viagemCadastrarForm.controls;
  }

  public arrayDeCoordenadores: any[] = [];
  async configurarSelectCoordenador() {
    this.arrayDeCoordenadores = await this.meuUsuarioService.listAll();
    this.arrayDeCoordenadores = this.arrayDeCoordenadores.filter((elemento) => {
      return elemento.tipoUsuario == "ADMIN"
    })

    console.log(this.arrayDeCoordenadores)
  }

  async onSubmit() {
    console.log(this.viagemCadastrarForm)
    if (this.viagemCadastrarForm.valid) {
      let novaViagem = this.viagemCadastrarForm.value;

      novaViagem.idCiclo = {
        idCiclo: this.idCiclo
      };
      novaViagem.coordenador = {
        matricula: parseInt(novaViagem.coordenador, 10)
      };

      try {
        //novaViagem.idCiclo = null
        // novaViagem.coordenador = 'null'
        await this.minhaViagemService.insert(novaViagem);
        this.toastrService.success('Viagem inserida com sucesso!!', "Resultado", {
          timeOut: 3000,
        });
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.router.navigate(['/ciclo/' + novaViagem.idCiclo.idCiclo]));
      } catch (e) {
        this.toastrService.error('Erro ao inserir a viagem!', "Erro", {
          timeOut: 5000,
        });
      }

    } else {
      console.log('formulário inválido')
      Object.keys(this.viagemCadastrarForm.controls).forEach(campo => {
        const controle = this.viagemCadastrarForm.get(campo);
        controle?.markAsTouched();
      })
    }

    // if (this.viagemCadastrarForm.valid) {
    //   // criar a requisição http aqui
    //   console.log(this.viagemCadastrarForm);
    //   this.viagemCadastrarForm.reset();
  }

  configurarFormulario() {
    this.viagemCadastrarForm = new FormGroup({
      dataViagem: new FormControl(null, Validators.required),
      coordenador: new FormControl('', Validators.required)
    })
  }

}
