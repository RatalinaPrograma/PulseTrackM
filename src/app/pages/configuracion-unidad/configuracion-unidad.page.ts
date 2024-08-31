import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-configuracion-unidad',
  templateUrl: './configuracion-unidad.page.html',
  styleUrls: ['./configuracion-unidad.page.scss'],
})
export class ConfiguracionUnidadPage {
  disponibleParaCasos: boolean = false;
  notificacionesEmergencia: boolean = false;

  constructor(private alertController: AlertController) {}

  async guardarConfiguracion() {
    if (!this.disponibleParaCasos || !this.notificacionesEmergencia) {
      const alert = await this.alertController.create({
        header: 'Configuración Incompleta',
        message: 'Por favor, asegúrese de configurar la disponibilidad para nuevos casos y las notificaciones de emergencia.',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Configuración Guardada',
        message: 'La configuración de la unidad ha sido guardada exitosamente.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
