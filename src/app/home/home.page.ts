import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  horaActual: string | undefined;

  ngOnInit() {
    this.actualizarHora();
    setInterval(() => {
      this.actualizarHora();
    }, 1000); // Actualiza la hora cada segundo
  }

  actualizarHora() {
    const ahora = new Date();
    this.horaActual = ahora.toLocaleTimeString(); // Esto da la hora en formato local HH:MM:SS
  }

  emergenciasActivas = [
    { titulo: 'Incendio en Edificio A', descripcion: 'Se reporta un incendio en el cuarto piso.' },
    { titulo: 'Accidente de Tráfico', descripcion: 'Colisión múltiple en la autopista.' }
  ];

  nuevaEmergencia() {
    // Lógica para crear una nueva emergencia
  }

  verHistorial() {
    // Lógica para ver el historial de emergencias
  }

  irConfiguraciones() {
    // Lógica para ir a la configuración
  }

  constructor() {}

}
