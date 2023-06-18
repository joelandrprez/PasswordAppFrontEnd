import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SidebarMenuComponent
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    SidebarMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DefaultModule { }
