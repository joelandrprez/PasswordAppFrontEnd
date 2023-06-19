import { Component, OnInit, Inject } from '@angular/core';
import { OptionsPagination, ResponsePagination } from '../comun/models/pagination.model';
import { ICuenta } from './models/cuentas';
import { CuentaService } from './services/cuenta.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';


declare var $: any;
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
  paginationInfo: ResponsePagination<ICuenta> = { totalGlobal: 0, totalfiltrado: 0, registros: [] };
  getClientesSub: any;
  cuentaEdicion?:ICuenta;
  constructor(private _cuentaService:CuentaService,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService,
              private titleService: Title, 
              @Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
    this.titleService.setTitle('Gestion Cuentas - Listado');
    this.spinner.show();
    this.ListadoCuentas();
  }

  ngOnDestroy(): void {
  }

  ListadoCuentas(){
    this._cuentaService.getListadoCuentas(this.options).subscribe({
      next: (response:any) => {
        this.paginationInfo = response.data;
      },
      error: (reason) => {
        console.log(reason);
        this.spinner.hide()
        if (reason.error.titulo) 
          this.toastr.error(reason.error.detalle,reason.error.titulo);
        if (reason.statusText) 
          this.toastr.error(reason.statusText,reason.name);        
      },
      complete: () => {
        this.spinner.hide()
      }
    });
  }

  CopiarContrasenia(id : number){
    this.spinner.show();
    this._cuentaService.getPassword(id).subscribe({
      next: (response:any) => {
        const el = document.createElement("textarea");
        el.value = response.data!.cadena;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        this.toastr.success(response.detalle,response.titulo);
      },
      error: (reason) => {
        this.spinner.hide()
        this.toastr.error(reason.error.detalle,reason.error.titulo);
      },
      complete: () => {
        this.spinner.hide()
      }
    })
  }
  
  AbrilModalEdicion(item:ICuenta){
    this.cuentaEdicion =item;
    $("#registroCuenta").modal("show");
  }

}
