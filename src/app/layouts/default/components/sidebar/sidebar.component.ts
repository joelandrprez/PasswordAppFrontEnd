import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/side.service';
import { menu_navigate } from './models/menu_navigate';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  url_GestionCuenta = [
    { path:'gestioncuenta/cuentas',titulo:'Cuentas'},
    { path:'gestioncuenta/usuarios',titulo:'Usuarios'},
    { path:'gestioncuenta/proyectos',titulo:'Proyectos'},
    { path:'gestioncuenta/tipocuenta',titulo:'Tipo cuenta'},
  ];
  url_GestionProyectos= [
    { path:'proyecto/angular',titulo:'Angular'},
    { path:'proyecto/csharp',titulo:'CSHARP'},
  ];
  url_Core= [
    { path:'core/dashboard',titulo:'dashboard'}
  ];



  
  dataMenu?: menu_navigate[] = [];

  constructor(
    private _apiMenu: MenuService
  ) {


   }

  ngOnInit(): void {
    this.obtenerListadoMenu()
  }
  obtenerListadoMenu(){
    this._apiMenu.getListarMenu().subscribe({
      next:
        (data: any) => {
          console.log(data);
          
          this.dataMenu = data;
        },
      error: (error) => {
      }
    });
  }
}
