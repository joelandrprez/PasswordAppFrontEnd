import { Component, Input, OnInit } from '@angular/core';
import { menu_navigate } from '../models/menu_navigate';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.css']
})
export class SidebarMenuComponent implements OnInit {

  @Input() item: menu_navigate[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
