import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { SeriesComponent } from './componentes/series/series.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "buscador", component:BuscadorComponent},
  {path: "buscar/pelicula/:id", component:PeliculaComponent},
  {path: "buscar/serie/:id", component:SeriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
