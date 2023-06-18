import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { menu_navigate } from '../models/menu_navigate';
import { environment } from 'src/environments/environment';

const base_url = environment.API_URL;


@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  getListarMenu(): Observable<menu_navigate> {
    return this.http.get<menu_navigate>(base_url+`/api/Menu`);
  }
}
