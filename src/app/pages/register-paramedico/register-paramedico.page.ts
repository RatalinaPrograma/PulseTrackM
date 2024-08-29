import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-paramedico',
  templateUrl: './register-paramedico.page.html',
  styleUrls: ['./register-paramedico.page.scss'],
})
export class RegisterParamedicoPage implements OnInit {
  newrut: string="";
  nombre:string="";
  newclave:any;
  conficlave:any;

  paramedicos:any =[

  ];

  constructor( private router:Router,private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }
    async presentAlert(titulo:string, msj:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Soy un mensaje',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }
  async validarRegistro() {    
    if (this.newrut === "" || this.nombre === "" || this.newclave === "" || this.conficlave === "") {
      await this.presentAlert('Campos incompletos', 'Por favor, rellena todos los campos obligatorios.');
      return;
    }

    if (this.newclave !== this.conficlave) {
      await this.presentAlert('Contraseñas no coinciden', 'Las contraseñas ingresadas no son iguales.');
      return;
    }
  
    this.guardar();
  }

  guardar(){
    this.paramedicos.push({
      rut: this.newrut,
      clave:this.newclave,
      nombre:this.nombre
    });
    console.log('lista',this.paramedicos);
    
    this.irPagina();
  }

  irPagina(){
    let contex:NavigationExtras={
      state:{
        rut:this.newrut
      }
    }
    this.router.navigate(['/login-paramedico'],contex);
  }



}

