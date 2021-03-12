import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { SeriesComponent } from './componentes/series/series.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { ListasGeneralesComponent } from './componentes/listas-generales/listas-generales.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "buscador", component:BuscadorComponent},
  {path: "login", component:LoginComponent},
  {path: "registro", component:RegisterComponent},
  {path: "perfil", component:PerfilComponent},
  {path: "buscar/pelicula/:id", component:PeliculaComponent},
  {path: "buscar/serie/:id", component:SeriesComponent},
  {path: "busqueda/:query", component:BusquedaComponent},
  {path: "listar/:tipo/:atributo", component:ListasGeneralesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
