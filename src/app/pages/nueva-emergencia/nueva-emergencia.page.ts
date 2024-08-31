import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-emergencia',
  templateUrl: './nueva-emergencia.page.html',
  styleUrls: ['./nueva-emergencia.page.scss'],
})
export class NuevaEmergenciaPage implements OnInit {

  nombre: string = '';
  fechaNacimiento: string = '';
  genero: string = '';
  identificacion: string = '';
  telefono: string = '';

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {}

  async continuar() {
    // Verificar si todos los campos están completos
    if (this.nombre && this.fechaNacimiento && this.genero && this.identificacion && this.telefono) {
      // Si todos los campos están completos, redirigir a la página de detalles médicos
      this.router.navigate(['/reg-detallesmedicos']);
    } else {
      // Si algún campo está vacío, mostrar una alerta de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe rellenar todos los campos para continuar.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
