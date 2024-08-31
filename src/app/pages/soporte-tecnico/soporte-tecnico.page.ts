import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soporte-tecnico',
  templateUrl: './soporte-tecnico.page.html',
  styleUrls: ['./soporte-tecnico.page.scss'],
})
export class SoporteTecnicoPage implements OnInit {

  nombre: string = '';
  correo: string = '';
  asunto: string = '';
  descripcion: string = '';

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {}

  async enviarReporte() {
    // Verificar si todos los campos están completos
    if (this.nombre && this.correo && this.asunto && this.descripcion) {
      // Credenciales correctas, redirigir a la página principal
      this.router.navigate(['/soporte-tecnico']);
    } else {
      // Credenciales incorrectas, mostrar alerta de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Debe rellenar todos los campos para continuar.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}
