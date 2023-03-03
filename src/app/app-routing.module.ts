import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AuthComponent } from './modules/auth/auth.component';
import { CuentasComponent } from './modules/cuentas/cuentas.component';
import { NopagefoundComponent } from './modules/nopagefound/nopagefound.component';
import { ProyectosComponent } from './modules/proyectos/proyectos.component';
import { TipocuentaComponent } from './modules/tipocuenta/tipocuenta.component';
import { UsuariosComponent } from './modules/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: 'configuracion',
    component: DefaultComponent,
    children: [
      { path: 'cuentas',component: CuentasComponent },
      { path: 'usuarios',component: UsuariosComponent },
      { path: 'proyectos',component: ProyectosComponent },
      { path: 'tipocuenta',component: TipocuentaComponent },

    ]
  },
  {path:'',redirectTo:'/configuracion',pathMatch:'full'},
  { path: 'login',component: AuthComponent},
  { path: '**',component: NopagefoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
