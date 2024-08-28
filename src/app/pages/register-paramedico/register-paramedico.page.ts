import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-paramedico',
  templateUrl: './register-paramedico.page.html',
  styleUrls: ['./register-paramedico.page.scss'],
})
export class RegisterParamedicoPage implements OnInit {
  paramedico = {
    rut: '',
    nombre: '',
    clave: ''
  };

  constructor(private navCtrl: NavController) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  register() {
    // Aquí se agregará la lógica para el registro en el futuro
    console.log('Registrando paramédico:', this.paramedico);
    // Navegar al login después de registrar
    this.navCtrl.navigateRoot('/login');
  }

}
