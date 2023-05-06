import { Component, OnInit } from '@angular/core';
import { OptionsPagination, ResponsePagination } from '../comun/models/pagination.model';
import { ICuenta } from './models/cuentas';
import { CuentaService } from './services/cuenta.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css']
})
export class CuentasComponent implements OnInit {

  options: OptionsPagination = {
    page: 1,
    previousPage: 1,
    size: 10,
    search: '',
    orderBy: '',
    orderDir: '',
  };
  paginationInfo: ResponsePagination<ICuenta> = { totalGlobal: 0, totalFiltered: 0, records: [] };
  getClientesSub: any;

  FormMantenimientoCuenta: FormGroup = new FormGroup({
    TipoCuenta_Id: new FormControl(null,[Validators.required]),
    Proyecto_Id: new FormControl(null,[Validators.required]),
    Sitio: new FormControl('',[Validators.required,Validators.maxLength(1000),Validators.minLength(1)]),
    Usuario: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(1)]),
    Password: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(1)])
  });
  valorPassword:string = 'password';
  constructor(private _cuentaService:CuentaService) { }

  ngOnInit(): void {
    this.ListadoCuentas();
  }

  ngOnDestroy(): void {
    this.getClientesSub.unsubscribe();
  }

  ListadoCuentas(){
    this._cuentaService.getListadoCuentas(this.options).subscribe({
      next: (response:any) => {
        this.paginationInfo = response.data;

      },
      error: (reason) => {
        console.log(reason);
      },
      complete: () => {

      }
    });
  }
  CopiarContrasenia(id : number){
    this._cuentaService.getPassword(id).subscribe({
      next: (response:any) => {
        const el = document.createElement("textarea");
        el.value = response.data!.password;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      },
      error: (reason) => {
        console.log(reason);
      },
      complete: () => {

      }
    })
  }

  MostrarContrasenia(){

      if(this.valorPassword === 'password'){
        this.valorPassword = 'text';
      }else{
        this.valorPassword = 'password';
      }
  }

  CerrarModalMantenimiento(){
    this.FormMantenimientoCuenta.value.TipoCuenta = '';
    this.FormMantenimientoCuenta.value.Sitio = '';
    this.FormMantenimientoCuenta.value.Usuario = '';
    this.FormMantenimientoCuenta.value.Password = '';
  }

  guardarCuenta(){
    
    this._cuentaService.postGuardarCuenta(this.FormMantenimientoCuenta.value).subscribe({
      next: (response:any) => {
        console.log(response);
        this.ListadoCuentas();
      },
      error: (reason) => {
        console.log(reason);
      },
      complete: () => {

      }
    })   
  }

}
