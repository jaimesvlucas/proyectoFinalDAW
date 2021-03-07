import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const url = 'https://api.themoviedb.org/3/';
const api = '?api_key=8d16caf7eddcb9dc523bd8c85ba93a25';
@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http:HttpClient) { }

  buscarPopulares(tipo:string):Observable<any>{
    return this.http.get(url+tipo+'/popular'+api+'&language=es');
  }
  buscarMejorValoradas(tipo:string):Observable<any>{
    return this.http.get(url+tipo+'/top_rated'+api+'&language=es');
  }
  buscarPelicula(id):Observable<any>{
    return this.http.get(url+'movie/'+id+api+'&language=es');
  }
}
