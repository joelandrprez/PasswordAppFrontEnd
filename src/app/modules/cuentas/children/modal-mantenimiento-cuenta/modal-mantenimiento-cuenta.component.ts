import { AfterViewInit, Component,Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

declare var $: any;

import { CuentaService } from '../../services/cuenta.service';
@Component({
  selector: 'app-modal-mantenimiento-cuenta',
  templateUrl: './modal-mantenimiento-cuenta.component.html',
  styleUrls: ['./modal-mantenimiento-cuenta.component.css']
})
export class ModalMantenimientoCuentaComponent implements OnInit,AfterViewInit,OnChanges,OnDestroy  {

  @Input() ValoresForm: any;
  FormMantenimientoCuenta: FormGroup = new FormGroup({
    TipoCuenta_Id: new FormControl(null,[Validators.required]),
    Proyecto_Id: new FormControl(null,[Validators.required]),
    Sitio: new FormControl('',[Validators.required,Validators.maxLength(1000),Validators.minLength(1)]),
    Usuario: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(1)]),
    Password: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(1)])
  });

  private formBuilder?: FormBuilder;
  valorPassword:string = 'text';

  constructor(  private _cuentaService:CuentaService,
                private toastr: ToastrService,
                private spinner: NgxSpinnerService) { }

  ngOnDestroy(): void {
    $("#registroCuenta").modal("hide");
    this.FormMantenimientoCuenta  = new FormGroup({
      TipoCuenta_Id: new FormControl(null,[Validators.required]),
      Proyecto_Id: new FormControl(null,[Validators.required]),
      Sitio: new FormControl('',[Validators.required,Validators.maxLength(1000),Validators.minLength(1)]),
      Usuario: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(1)]),
      Password: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(1)])
    });

  }
  
  ngAfterViewInit(): void {
    this.valorPassword = 'password';

  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.ValoresForm.currentValue===undefined){

    }
    if(changes.ValoresForm.currentValue!=undefined){
      this.FormMantenimientoCuenta.setValue({
        TipoCuenta_Id:changes.ValoresForm.currentValue.tipoCuenta_Id,
        Proyecto_Id:changes.ValoresForm.currentValue.proyecto_Id,
        Sitio:changes.ValoresForm.currentValue.sitio,
        Usuario:changes.ValoresForm.currentValue.usuario,
        Password:changes.ValoresForm.currentValue.password
      });

    }

  }

  ngOnInit(): void {

  }

  CerrarModalMantenimiento(){
    $("#registroCuenta").modal("hide");
    this.FormMantenimientoCuenta  = new FormGroup({
      TipoCuenta_Id: new FormControl(null,[Validators.required]),
      Proyecto_Id: new FormControl(null,[Validators.required]),
      Sitio: new FormControl('',[Validators.required,Validators.maxLength(1000),Validators.minLength(1)]),
      Usuario: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(1)]),
      Password: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(1)])
    });
  }

  guardarCuenta(){
    console.log('se guarda');
    
      this.spinner.show();
    // this._cuentaService.postGuardarCuenta(this.FormMantenimientoCuenta.value).subscribe({
    //   next: (response:any) => {
    //     this.toastr.success( response.titulo);
    //     this.CerrarModalMantenimiento();
    //   },
    //   error: (reason) => {
    //     this.toastr.error(reason.error.detalle,reason.error.titulo);
    //   },
    //   complete: () => {

    //   }
    // })   
  }

  MostrarContrasenia(){
    // if(this.valorPassword === 'password' ){
    //   this.valorPassword = 'text';
    // }else{
    //   this.valorPassword = 'password';

    // }
  }

  
  
}
