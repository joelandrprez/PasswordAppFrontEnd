import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AuthComponent } from './modules/auth/auth.component';
import { CuentasComponent } from './modules/cuentas/cuentas.component';
import { NopagefoundComponent } from './modules/nopagefound/nopagefound.component';
import { ProyectosComponent } from './modules/proyectos/proyectos.component';
import { TipocuentaComponent } from './modules/tipocuenta/tipocuenta.component';
import { UsuariosComponent } from './modules/usuarios/usuarios.component';
import { AngularComponent } from './modules/angular/angular.component';
import { CsharpComponent } from './modules/csharp/csharp.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { HistorialAccionesComponent } from './modules/historial-acciones/historial-acciones.component';

const routes: Routes = [
  {
    path: 'gestioncuenta',
    component: DefaultComponent,
    children: [
      { path: 'cuentas',component: CuentasComponent },
      { path: 'usuarios',component: UsuariosComponent },
      { path: 'proyectos',component: ProyectosComponent },
      { path: 'tipocuenta',component: TipocuentaComponent },

    ]
  },
  {
    path: 'proyecto',
    component: DefaultComponent,
    children: [
      { path: 'angular',component: AngularComponent },
      { path: 'csharp',component: CsharpComponent },

    ]
  },  
  {
    path: 'core',
    component: DefaultComponent,
    children: [
      { path: 'dashboard',component: DashboardComponent }

    ]
  },
  {
    path: 'perfil',
    component: DefaultComponent,
    children: [
      { path: 'me',component: PerfilComponent },
      { path: 'historial',component: HistorialAccionesComponent }

    ]
  },
  {path:'',redirectTo:'/core',pathMatch:'full'},
  { path: 'login',component: AuthComponent},
  { path: '**',component: NopagefoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
