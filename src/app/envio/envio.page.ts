import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.page.html',
  styleUrls: ['./envio.page.scss'],
})
export class EnvioPage implements OnInit, OnDestroy {

  name: string = "";
  lastname: string = "";
  carrera: string = "";
  isSupported = false;

  constructor(private navCtrl: NavController, private router: Router, private alertController: AlertController) { }

  ngOnInit() {

    this.name = JSON.stringify(localStorage.getItem('name'));
    this.lastname = JSON.stringify(localStorage.getItem('lastname'));
    this.carrera = JSON.stringify(localStorage.getItem('carrera'));
  }

  async scan(){
    const resultadoQr = (await BarcodeScanner.scan()).code;
    alert("Resultado: " + resultadoQr)
    
  
  }

  ngOnDestroy(): void {

  }
  
}
