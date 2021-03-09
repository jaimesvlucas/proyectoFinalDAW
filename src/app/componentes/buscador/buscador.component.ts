import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TmdbService } from 'src/app/servicios/tmdb.service'; 
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  imageUrl='https://image.tmdb.org/t/p/w300';
  popularPeliculas:any[]=[];
  popularSeries:any[]=[];
  mejorValoradaPeliculas:any[]=[];
  mejorValoradaSeries:any[]=[];
  constructor(private tmdb:TmdbService, private irHacia:Router) { }

  ngOnInit(): void {
    this.popular('movie');
    this.popular('tv');
    this.mejorValorada('movie');
    this.mejorValorada('tv');
  }

  popular(tipo:string):void{
    this.tmdb.buscarPopulares(tipo).subscribe(
      respuesta=>{
        if(tipo=='movie')this.popularPeliculas = respuesta.results
        else this.popularSeries = respuesta.results
      },
      error=>console.log(error)
    )
  }

  mejorValorada(tipo:string):void{
    this.tmdb.buscarMejorValoradas(tipo).subscribe(
      respuesta=>{
        if(tipo=='movie')this.mejorValoradaPeliculas = respuesta.results
        else this.mejorValoradaSeries = respuesta.results
      },
      error=>console.log(error)
    )
  }

  verPelicula(id):void{
    this.irHacia.navigate(['/buscar/pelicula/'+id])
  }

  verSerie(id):void{
    this.irHacia.navigate(['/buscar/serie/'+id])
  }

  verLista(tipo,atributo):void{
    this.irHacia.navigate(['/listar/'+tipo+'/'+atributo])
  }
}
