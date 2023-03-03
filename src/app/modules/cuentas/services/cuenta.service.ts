import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { OptionsPagination, ResponsePagination } from '../../comun/models/pagination.model';
import { ICuenta } from '../models/cuentas';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class CuentaService {
  private _urlCliente: string = "https://localhost:7180/api/v1/api/v1/cuentas";
  constructor(private http:HttpClient) { 
    console.log(base_url);
    
  }
  
  getListadoCuentas(options: OptionsPagination):Observable<ResponsePagination<ICuenta>>{
    const url = `${this._urlCliente}?page=${options.page}&size=${options.size}&search=${options.search}&orderBy=${options.orderBy}&orderDir=${options.orderDir}`;
    return this.http.get(url).pipe(map(response => <ResponsePagination<ICuenta>>response));
  }
}
