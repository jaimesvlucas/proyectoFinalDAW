import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/servicios/tmdb.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  busqueda:string;
  constructor(private tmdb:TmdbService) { }

  ngOnInit(): void {
    this.popular();
  }

  buscar():void{
  }

  popular():void{
    let tipo='movie';
    this.tmdb.buscarPopulares(tipo).subscribe(
      respuesta=>{
        console.log(respuesta)
      },
      error=>console.log(error)
    )
  }
}
