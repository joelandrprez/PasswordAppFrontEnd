import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DefaultModule { }
