import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-manage-paramedicos',
  templateUrl: './manage-paramedicos.page.html',
  styleUrls: ['./manage-paramedicos.page.scss'],
})
export class ManageParamedicosPage {
  paramedicos = [
    { rut: '12345678-9', nombre: 'Juan Pérez' },
    { rut: '98765432-1', nombre: 'Ana Gómez' }
  ];

  constructor(private navCtrl: NavController) {}

  edit(paramedico: any) {
    // Aquí se agregará la lógica para editar el paramédico en el futuro
    console.log('Editando paramédico:', paramedico);
  }

  delete(paramedico: any) {
    // Aquí se agregará la lógica para eliminar el paramédico en el futuro
    console.log('Eliminando paramédico:', paramedico);
    this.paramedicos = this.paramedicos.filter(p => p !== paramedico);
  }
}
