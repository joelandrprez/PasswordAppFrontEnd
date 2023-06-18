import { Component, OnInit } from '@angular/core';
import { MenuService } from './services/side.service';
import { menu_navigate } from './models/menu_navigate';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
  dataMenu: menu_navigate[] = [];

  constructor(
    private _apiMenu: MenuService
  ) {


   }

  ngOnInit(): void {
    this.obtenerListadoMenu()
  }

  obtenerListadoMenu(){
    this._apiMenu.getListarMenu().subscribe({
      next:(res: any) => {
          this.dataMenu = res.data;
        },
      error: (error) => {
      }
    });
  }
}
