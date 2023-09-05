import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



  constructor() { }

  nombre: string = "";
  clave: string = "";

  ngOnInit() {
  }

  validarUsuario() {
    const datosUsuario = localStorage.getItem('usuario');
    const passUsuario = localStorage.getItem('password');
    if (datosUsuario === this.nombre && passUsuario === this.clave) {
      // Los datos coinciden, el usuario está autenticado
      console.log('Inicio de sesión exitoso');
      // Puedes realizar redirecciones u otras acciones aquí
    } else {
      // Los datos no coinciden, mostrar mensaje de error o tomar medidas apropiadas
      console.log('Nombre de usuario o contraseña incorrectos');
      
    }
  }
}
