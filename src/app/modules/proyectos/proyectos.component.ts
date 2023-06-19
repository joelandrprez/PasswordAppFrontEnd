import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private titleService: Title, 
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.titleService.setTitle('Gestion Cuentas - Proyectos');
  }

}
