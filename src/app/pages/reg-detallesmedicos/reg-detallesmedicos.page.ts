import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reg-detallesmedicos',
  templateUrl: './reg-detallesmedicos.page.html',
  styleUrls: ['./reg-detallesmedicos.page.scss'],
})
export class RegDetallesMedicosPage {
  frecuenciaCardiaca!: number;
  presionArterial!: string;
  temperaturaCorporal!: number;
  saturacionOxigeno!: number;
  frecuenciaRespiratoria!: number;
  condicionesPreexistentes!: string;
  operacionesAnteriores!: string;

  constructor(private alertController: AlertController) {}

  async guardarRegistro() {
    if (
      !this.frecuenciaCardiaca ||
      !this.presionArterial ||
      !this.temperaturaCorporal ||
      !this.saturacionOxigeno ||
      !this.frecuenciaRespiratoria ||
      !this.condicionesPreexistentes ||
      !this.operacionesAnteriores
    ) {
      const alert = await this.alertController.create({
        header: 'Campos Incompletos',
        message: 'Por favor, llene todos los campos antes de guardar el registro.',
        buttons: ['OK'],
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Registro Guardado',
        message: 'Los detalles médicos han sido guardados exitosamente.',
        buttons: ['OK'],
      });

      await alert.present();
    }
  }
}
