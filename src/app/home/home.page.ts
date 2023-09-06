import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {




  constructor(private router : Router, private alertController: AlertController) { }

  nombre: string = "";
  clave: string = "";

  ngOnInit() {
  }

  async mostrarAlertaClaveInvalida() {
    const alert = await this.alertController.create({
      header: 'Inicio de Sesion Fallido',
      message: 'El usuario o clave que has ingresado es incorrecta.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  validarUsuario() {
    const datosUsuario = localStorage.getItem('usuario');
    const passUsuario = localStorage.getItem('password');
    if (datosUsuario === this.nombre && passUsuario === this.clave) {
      // Los datos coinciden, el usuario está autenticado
      console.log('Inicio de sesión exitoso');
      this.router.navigate(['/envio'])

      // Puedes realizar redirecciones u otras acciones aquí
    } else {
      // Los datos no coinciden, mostrar mensaje de error o tomar medidas apropiadas
      console.log('Nombre de usuario o contraseña incorrectos');
      this.mostrarAlertaClaveInvalida();
      
    }
  }
}
