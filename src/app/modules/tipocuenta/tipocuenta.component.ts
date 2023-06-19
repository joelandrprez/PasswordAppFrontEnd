import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tipocuenta',
  templateUrl: './tipocuenta.component.html',
  styleUrls: ['./tipocuenta.component.css']
})
export class TipocuentaComponent implements OnInit {

  constructor(private titleService: Title, 
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.titleService.setTitle('Gestion Cuentas - Tipo Cuenta');
  }

}
