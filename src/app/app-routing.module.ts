import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AuthComponent } from './modules/auth/auth.component';
import { CuentasComponent } from './modules/cuentas/cuentas.component';
import { NopagefoundComponent } from './modules/nopagefound/nopagefound.component';
import { ProyectosComponent } from './modules/proyectos/proyectos.component';
import { TipocuentaComponent } from './modules/tipocuenta/tipocuenta.component';
import { UsuariosComponent } from './modules/usuarios/usuarios.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { HistorialAccionesComponent } from './modules/historial-acciones/historial-acciones.component';

const routes: Routes = [
  {
    path: 'GestionCuenta',
    component: DefaultComponent,
    children: [
      {path:'',redirectTo:'cuentas',pathMatch:'full'},
      { path: 'Cuentas',component: CuentasComponent },
      { path: 'Usuarios',component: UsuariosComponent },
      { path: 'Proyectos',component: ProyectosComponent },
      { path: 'Tipocuenta',component: TipocuentaComponent },

    ]
  }, 
  {
    path: 'Core',
    component: DefaultComponent,
    children: [
      { path: '',component: DashboardComponent },
      { path: 'Dashboard',component: DashboardComponent }

    ]
  },
  {
    path: 'Perfil',
    component: DefaultComponent,
    children: [
      {path:'',redirectTo:'Me',pathMatch:'full'},
      { path: 'Me',component: PerfilComponent },
      { path: 'Historial',component: HistorialAccionesComponent }

    ]
  },
  {path:'',redirectTo:'/Core/Dashboard',pathMatch:'full'},
  { path: 'Login',component: AuthComponent},
  { path: '**',component: NopagefoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
