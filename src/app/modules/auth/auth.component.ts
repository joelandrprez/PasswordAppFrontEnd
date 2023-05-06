import { Component, OnInit } from '@angular/core';
import { IUsuario } from './model/usuarioModel';
import { AuthService } from './services/auth.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  Usuario?:IUsuario;
  FormLogin: FormGroup = new FormGroup({
    NombreUsuario: new FormControl('joanpeq@gmail.com'),
    Password: new FormControl('ADOtata159')
  });
  constructor(private _authService: AuthService,
              private _formBuilder: FormBuilder) { }


  ngOnInit(): void {
  }

  Login(){
    this._authService.postLogin(this.FormLogin.value).subscribe({
      next: (response:any) => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
      },
      error: (reason) => {
        console.log(reason);
      },
      complete: () => {
      }
    })
  }

}
