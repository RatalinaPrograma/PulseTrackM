import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-paramedico',
  templateUrl: './login-paramedico.page.html',
  styleUrls: ['./login-paramedico.page.scss'],
})
export class LoginParamedicoPage implements OnInit {
  credentials = {
    rut: '',
    clave: ''
  };

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Aquí puedes agregar cualquier lógica de inicialización si es necesario.
  }

  login() {
    // Aquí se agregará la lógica para el login en el futuro
    console.log('Intentando iniciar sesión con:', this.credentials);
    // Navegar a la página de gestión de paramédicos después de iniciar sesión
    this.navCtrl.navigateRoot('/home');
  }
}
