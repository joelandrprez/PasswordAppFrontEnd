import { AfterViewInit, Component,Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CuentaService } from '../../services/cuenta.service';

@Component({
  selector: 'app-modal-mantenimiento-cuenta',
  templateUrl: './modal-mantenimiento-cuenta.component.html',
  styleUrls: ['./modal-mantenimiento-cuenta.component.css']
})
export class ModalMantenimientoCuentaComponent implements OnInit,AfterViewInit {

  @Input() ValoresForm: any;
  FormMantenimientoCuenta: FormGroup = new FormGroup({
    TipoCuenta_Id: new FormControl(null,[Validators.required]),
    Proyecto_Id: new FormControl(null,[Validators.required]),
    Sitio: new FormControl('',[Validators.required,Validators.maxLength(1000),Validators.minLength(1)]),
    Usuario: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(1)]),
    Password: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(1)])
  });
  valorPassword:string = 'password';

  constructor(private _cuentaService:CuentaService) { }
  ngAfterViewInit(): void {
    if(this.ValoresForm != null){

    }
    if(this.ValoresForm == null){

    }
  }

  ngOnInit(): void {
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
        // this.ListadoCuentas();
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

}
