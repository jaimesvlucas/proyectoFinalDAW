import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { HomeComponent } from './componentes/home/home.component';
import { BuscadorComponent } from './componentes/buscador/buscador.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { SeriesComponent } from './componentes/series/series.component';
import { MinutosHorasPipe } from './Pipes/minutos-horas.pipe';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';
import { ListasGeneralesComponent } from './componentes/listas-generales/listas-generales.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    BuscadorComponent,
    PeliculaComponent,
    SeriesComponent,
    MinutosHorasPipe,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    ListasGeneralesComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide:LOCALE_ID, useValue:"es"},{provide: HTTP_INTERCEPTORS, useClass:EnviarTokenInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
