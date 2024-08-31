import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-preferencia-hospital',
  templateUrl: './preferencia-hospital.page.html',
  styleUrls: ['./preferencia-hospital.page.scss'],
})
export class PreferenciaHospitalPage {
  hospitalesEspecialidad: Array<{ nombre: string, especialidades: string[] }> = [
    { nombre: 'Hospital General', especialidades: ['Cardiología', 'Urgencias'] },
    { nombre: 'Clínica Santa María', especialidades: ['Neurología', 'Pediatría'] },
    // Nuevos hospitales
    { nombre: 'Clínica Los Andes', especialidades: ['Ginecología', 'Traumatología'] },
    { nombre: 'Hospital de la Costa', especialidades: ['Dermatología', 'Oncología'] }
  ];

  hospitalesHistorial: Array<{ nombre: string, historial: string }> = [
    { nombre: 'Hospital del Sur', historial: 'Frecuente, Última visita: 12/08/2024' },
    { nombre: 'Clínica Central', historial: 'Moderado, Última visita: 05/07/2024' },
    // Nuevos hospitales
    { nombre: 'Clínica San Juan', historial: 'Ocasional, Última visita: 20/06/2024' },
    { nombre: 'Hospital del Norte', historial: 'Frecuente, Última visita: 30/07/2024' }
  ];

  constructor(private alertController: AlertController) {}

  agregarHospitalEspecialidad() {
    // Aquí podrías abrir un modal para agregar un nuevo hospital.
  }

  agregarHospitalHistorial() {
    // Aquí podrías abrir un modal para agregar un nuevo hospital.
  }

  eliminarHospitalEspecialidad(index: number) {
    this.hospitalesEspecialidad.splice(index, 1);
  }

  eliminarHospitalHistorial(index: number) {
    this.hospitalesHistorial.splice(index, 1);
  }

  async guardarCambios() {
    if (this.hospitalesEspecialidad.length === 0 || this.hospitalesHistorial.length === 0) {
      const alert = await this.alertController.create({
        header: 'Campos Obligatorios',
        message: 'Debe agregar al menos un hospital en cada sección antes de guardar los cambios.',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Cambios Guardados',
        message: 'Los cambios han sido guardados exitosamente.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
