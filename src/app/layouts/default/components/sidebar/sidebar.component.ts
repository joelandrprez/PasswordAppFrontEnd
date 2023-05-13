import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
