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

  public resultado: any = {
    municipio: {
      nomeMunicipio: ""
    },
    comunidade: {
      nomeComunidade: ""
    },
    uf: ""
  };

  constructor(
    private route: ActivatedRoute,
    private meuCicloService: CicloService,
    private minhaViagemService: ViagemService,
    private meuUsuarioService: UsuarioService,
    private toastrService: ToastrService,
    private router: Router,
  ) { }

  signupForm: FormGroup = new FormGroup({});
  private idCiclo: string;

  async ngOnInit() {
    this.configurarFormulario();
    this.getCiclo();
    this.configurarSelectCoordenador();

  }

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
  }

  onSubmit() {
    if (this.signupForm.valid) {
      let novaViagem = this.signupForm.value;

      novaViagem.idCiclo = {
        idCiclo: this.idCiclo
      };
      novaViagem.coordenador = {
        matricula: parseInt(novaViagem.coordenador, 10)
      };

      this.minhaViagemService.insert(novaViagem);
      this.toastrService.success('Viagem inserida com sucesso!!', "Resultado", {
        timeOut: 3000,
      });
      this.router.navigate(['/ciclo/' + this.idCiclo]);

    } else {
      console.log('formulário inválido')
      Object.keys(this.signupForm.controls).forEach(campo => {
        const controle = this.signupForm.get(campo);
        controle?.markAsTouched();
      })
    }
  }

  configurarFormulario() {
    this.signupForm = new FormGroup({
      dataViagem: new FormControl(null, Validators.required),
      coordenador: new FormControl('', Validators.required),
    })
  }

}
