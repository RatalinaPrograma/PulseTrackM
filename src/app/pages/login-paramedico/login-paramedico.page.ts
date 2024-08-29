import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login-paramedico',
  templateUrl: './login-paramedico.page.html',
  styleUrls: ['./login-paramedico.page.scss'],
})
export class LoginParamedicoPage implements OnInit {
  rut: string = "";
  password: string = "";

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  irPagina() {
    // Creamos la variable de contexto con los datos correctos
    let navigationExtras: NavigationExtras = {
      state: {
        rut: this.rut,
        pass: this.password,
      }
    };
    // Mostrar toast antes de navegar
    this.presentToast('bottom');
    this.router.navigate(['/register-paramedico'], navigationExtras);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Error',
      duration: 2500,
      position: position,
    });

    await toast.present();
  }

  async presentAlert(titulo: string, msj: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }

  // Método para validar el formulario de inicio de sesión
  async validarRegistro() {    
    // Validación de campos vacíos
    if (this.rut.trim() === '' || this.password.trim() === '') {
      await this.presentAlert('Campos incompletos', 'Por favor, rellena todos los campos obligatorios.');
      return;
    }

    // Si pasa la validación, llama a la función de navegación
    this.irPagina();
  }
}
