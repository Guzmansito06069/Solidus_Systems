import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/auth/main/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EquipoComponent } from './components/info/equipo/equipo.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CuadroscrudsComponent } from './components/marcas/cuadroscruds/cuadroscruds.component';
import { Home2Component } from './components/main2/home2/home2.component';
import { PerfilComponent } from './components/opciones/perfil/perfil.component';
import { ScreenPasswordComponent } from './components/auth/screen-password/screen-password.component';
import { Error404Component } from './components/Errores/error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EquipoComponent,
     CuadroscrudsComponent,
     PerfilComponent,
     ScreenPasswordComponent,
     Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
