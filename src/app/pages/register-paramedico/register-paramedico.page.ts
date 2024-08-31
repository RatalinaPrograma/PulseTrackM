import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-paramedico',
  templateUrl: './register-paramedico.page.html',
  styleUrls: ['./register-paramedico.page.scss'],
})
export class RegisterParamedicoPage implements OnInit {



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
    if (this.correoEle === "" || this.newNameUser === "" || this.newPassword === "" || this.confiPassword === "") {
      await this.presentAlert('Campos incompletos', 'Por favor, rellena todos los campos obligatorios.');
      return;
    }

    if (this.newPassword !== this.confiPassword) {
      await this.presentAlert('Contraseñas no coinciden', 'Las contraseñas ingresadas no son iguales.');
      return;
    }

    this.irPagina();
  }
  irPagina(){
    let contex:NavigationExtras={
      state:{
        nombreUser:this.newNameUser
      }
    }
    this.router.navigate(['/home'],contex);
  }


}

