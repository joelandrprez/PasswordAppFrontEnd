import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';
import { UsuariosComponent } from './modules/usuarios/usuarios.component';
import { CuentasComponent } from './modules/cuentas/cuentas.component';
import { AuthComponent } from './modules/auth/auth.component';
import { NopagefoundComponent } from './modules/nopagefound/nopagefound.component';
import { ProyectosComponent } from './modules/proyectos/proyectos.component';
import { TipocuentaComponent } from './modules/tipocuenta/tipocuenta.component';
import { RouterModule } from '@angular/router';
import { DefaultModule } from './layouts/default/default.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    UsuariosComponent,
    CuentasComponent,
    AuthComponent,
    NopagefoundComponent,
    ProyectosComponent,
    TipocuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    DefaultModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
