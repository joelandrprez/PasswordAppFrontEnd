import { Component, OnInit } from '@angular/core';
import { OptionsPagination, ResponsePagination } from '../comun/models/pagination.model';
import { ICuenta } from './models/cuentas';
import { CuentaService } from './services/cuenta.service';
import { Subscription } from 'rxjs';

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

  constructor(private _cuentaService:CuentaService) { }

  ngOnInit(): void {
    this.ListadoCuentas();
    console.log(this.paginationInfo);
    
  }

  ngOnDestroy(): void {
    this.getClientesSub.unsubscribe();
  }

  ListadoCuentas(){
    this.getClientesSub = this._cuentaService.getListadoCuentas(this.options).subscribe(response => this.paginationInfo = response);
  }

}
