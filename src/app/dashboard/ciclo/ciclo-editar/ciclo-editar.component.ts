import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ciclo-editar',
  templateUrl: './ciclo-editar.component.html',
  styleUrls: ['./ciclo-editar.component.css']
})
export class CicloEditarComponent implements OnInit {

 

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Meu id é:", id);
    
  }

}
