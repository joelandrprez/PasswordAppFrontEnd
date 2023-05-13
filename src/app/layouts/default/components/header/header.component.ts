import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  NavegarAlPerfil(){
    this.router.navigate(['/perfil/me'])
  }
  NavegarAlHistorialAcciones(){
    this.router.navigate(['/perfil/historial'])
  }
  CerrarSecion(){
    console.log('Cerrar secion');
    
  }
}
