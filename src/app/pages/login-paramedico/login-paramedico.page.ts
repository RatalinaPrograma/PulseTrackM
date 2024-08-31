
  import { Component } from '@angular/core';
  import { AlertController } from '@ionic/angular';
  import { Router } from '@angular/router';
  
  @Component({ selector: 'app-login-paramedico',
    templateUrl: './login-paramedico.page.html',
     styleUrls: ['./login-paramedico.page.scss'],
    })
  export class LoginParamedicoPage  {
    nameUser!: string;
    password!: string;
  
    // Arreglo para almacenar varios nombres de usuario y contraseñas
    private readonly validUsers = [
      { username: 'admin', password: '1234' },
      { username: 'user1', password: 'password1' },
      { username: 'user2', password: 'password2' }
    ];
  
    constructor(private alertController: AlertController, private router: Router) {}
  
    async login() {
      const user = this.validUsers.find(u => u.username === this.nameUser && u.password === this.password);
      
      if (user) {
        // Credenciales correctas, redirigir a la página principal
        this.router.navigate(['/home']);
      } else {
        // Credenciales incorrectas, mostrar alerta de error
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Nombre de usuario o contraseña incorrectos.',
          buttons: ['OK']
        });
  
        await alert.present();
      }
    }
  }
  