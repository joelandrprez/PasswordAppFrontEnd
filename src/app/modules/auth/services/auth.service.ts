import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { IUsuario } from '../model/usuarioModel';
import { environment } from 'src/environments/environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})



export class AuthService {
  
  private _url: string = base_url+"/api/v1/token/login";
  constructor(private http: HttpClient) { }

  postLogin(Usuario: IUsuario): Observable<any> {
    return this.http.post<string>(
      this._url,
      Usuario,
    );
  }
}
