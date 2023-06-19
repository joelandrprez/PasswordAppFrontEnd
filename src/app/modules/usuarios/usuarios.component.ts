import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private titleService: Title, 
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.titleService.setTitle('Gestion Cuentas - Usuarios');
  }

}
