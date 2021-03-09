import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TmdbService } from 'src/app/servicios/tmdb.service';

@Component({
  selector: 'app-listas-generales',
  templateUrl: './listas-generales.component.html',
  styleUrls: ['./listas-generales.component.css']
})
export class ListasGeneralesComponent implements OnInit {
  tipo:string;
  atributo:string;
  imageUrl='https://image.tmdb.org/t/p/w300';
  popularPeliculas:any[]=[];
  popularSeries:any[]=[];
  mejorValoradaPeliculas:any[]=[];
  mejorValoradaSeries:any[]=[];
  constructor(private tmdb:TmdbService, private rutaActiva: ActivatedRoute, private irHacia:Router) { }

  ngOnInit(): void {
    this.tipo = this.rutaActiva.snapshot.paramMap.get("tipo");
    this.atributo = this.rutaActiva.snapshot.paramMap.get("atributo");
    switch(this.tipo){
      case "movie":
        switch(this.atributo){
          case "popular":
            this.popular('movie');
            break;
          case "mejor":
            this.mejorValorada('movie');
            break;
        }
        break;
      case "serie":
        switch(this.atributo){
          case "popular":
            this.popular('tv');
            break;
          case "mejor":
            this.mejorValorada('tv');
            break;
        }
        break;
    }
  }

  verPelicula(id):void{
    this.irHacia.navigate(['/buscar/pelicula/'+id])
  }

  verSerie(id):void{
    this.irHacia.navigate(['/buscar/serie/'+id])
  }

  popular(tipo:string):void{
    this.tmdb.buscarPopulares(tipo).subscribe(
      respuesta=>{
        console.log(respuesta)
        if(tipo=='movie')this.popularPeliculas = respuesta.results
        else this.popularSeries = respuesta.results
      },
      error=>console.log(error)
    )
  }

  mejorValorada(tipo:string):void{
    this.tmdb.buscarMejorValoradas(tipo).subscribe(
      respuesta=>{
        console.log(respuesta)
        if(tipo=='movie')this.mejorValoradaPeliculas = respuesta.results
        else this.mejorValoradaSeries = respuesta.results
      },
      error=>console.log(error)
    )
  }
}
