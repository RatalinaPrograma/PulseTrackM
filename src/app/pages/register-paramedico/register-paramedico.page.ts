import { Component } from '@angular/core';

@Component({
  selector: 'app-register-paramedico',
  templateUrl: './register-paramedico.page.html',
  styleUrls: ['./register-paramedico.page.scss'],
})
export class RegisterParamedicoPage {
  // Variables para almacenar los valores de los campos del formulario
  rut: string;
  password: string;
  confirmPassword: string;

  constructor() {
    // Inicialización de variables si es necesario
    this.rut = '';
    this.password = '';
    this.confirmPassword = '';
  }
}
