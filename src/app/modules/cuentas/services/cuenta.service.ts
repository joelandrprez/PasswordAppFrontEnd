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
  private _url: string = base_url+"/api/v1/cuentas";
  constructor(private http:HttpClient) {}
  
  getListadoCuentas(options: OptionsPagination):Observable<ResponsePagination<ICuenta>>{
    const url = `${this._url}?page=${options.page}&size=${options.size}&search=${options.search}&orderBy=${options.orderBy}&orderDir=${options.orderDir}`;
    return this.http.get(url).pipe(map(response => <ResponsePagination<ICuenta>>response));
  }

  getPassword(id: number):Observable<ICuenta>{
    const url = `${this._url}/cadena/${id}`;
    return this.http.get(url).pipe(map(response => <ICuenta>response));
  }

  postGuardarCuenta(cuenta: ICuenta):Observable<ICuenta>{
    return this.http.post<ICuenta>(
      this._url,
      cuenta,
    );
  }

}
