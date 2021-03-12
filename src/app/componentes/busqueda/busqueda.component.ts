import { Component, OnInit } from '@angular/core';
import { TmdbService } from 'src/app/servicios/tmdb.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private tmdb:TmdbService, private rutaActiva: ActivatedRoute, private irHacia:Router) {
    rutaActiva.params.subscribe(val => {
      this.busqueda = this.rutaActiva.snapshot.paramMap.get("query");
      this.cargarBusquedaPelicula();
      this.cargarBusquedaSerie();
    });
   }
  imageUrl='https://image.tmdb.org/t/p/w300';
  busqueda:string;
  peliculas:any[]=[];
  series:any[]=[];
  ngOnInit(): void {
    this.busqueda = this.rutaActiva.snapshot.paramMap.get("query");
    this.cargarBusquedaPelicula();
    this.cargarBusquedaSerie();
  }

  cargarBusquedaPelicula():void{
    this.tmdb.realizarBusqueda(this.busqueda,"movie").subscribe(
      respuesta=>{
        console.log(respuesta);
        this.peliculas=respuesta.results;
      },error=>console.log(error)
    )
  }

  cargarBusquedaSerie():void{
    this.tmdb.realizarBusqueda(this.busqueda,"tv").subscribe(
      respuesta=>{
        console.log(respuesta);
        this.series=respuesta.results;
      },error=>console.log(error)
    )
  }

  verPelicula(id):void{
    this.irHacia.navigate(['/buscar/pelicula/'+id])
  }

  verSerie(id):void{
    this.irHacia.navigate(['/buscar/serie/'+id])
  }

}
