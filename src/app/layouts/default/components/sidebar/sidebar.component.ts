import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  url = [
    { path:'configuracion/cuentas',titulo:'configuracion de cuentas'},
    { path:'configuracion/usuarios',titulo:'configuracion de usuarios'},
    { path:'configuracion/proyectos',titulo:'configuracion de proyectos'},
    { path:'configuracion/tipocuenta',titulo:'configuracion de tipo cuenta'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
