import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/auth/main/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';
import {EquipoComponent} from './components/info/equipo/equipo.component'
import { CuadroscrudsComponent} from './components/marcas/cuadroscruds/cuadroscruds.component';

import { Home2Component } from './components/main2/home2/home2.component';

import { GuardsGuard } from './guards.guard';
import { ClienteguardGuard } from './clienteguard.guard';
import { AdminguardGuard } from './adminguard.guard';
import { PerfilComponent } from './components/opciones/perfil/perfil.component';
import { ScreenPasswordComponent } from './components/auth/screen-password/screen-password.component';


//Errores
import { Error404Component } from './components/Errores/error404/error404.component';

const routes: Routes = [

  //Errores
  {path:'Errores',component:Error404Component},

  
  {path:'login',component:LoginComponent},
  {path:'prueba',component:ScreenPasswordComponent},
  
  {path:'perfil',component:PerfilComponent,canActivate:[GuardsGuard,]},
  {path:'register',component:RegisterComponent},
  {path:'home2',component:Home2Component ,canActivate: [GuardsGuard,ClienteguardGuard] },
  {path:'equipo',component:EquipoComponent, canActivate: [GuardsGuard, ClienteguardGuard]},
 
  {path:'home',component:HomeComponent, canActivate: [GuardsGuard,AdminguardGuard]},
  {path:'cuadros',component:CuadroscrudsComponent, canActivate: [GuardsGuard, AdminguardGuard]},
  {path:'equipo',component:EquipoComponent, canActivate: [GuardsGuard, ClienteguardGuard]},
   {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**',redirectTo:'/login'} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
