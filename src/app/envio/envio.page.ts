import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.page.html',
  styleUrls: ['./envio.page.scss'],
})
export class EnvioPage implements OnInit {

  name : string = "";
  lastname : string = "";
  carrera : string = "";

  constructor() { }

  ngOnInit() {

    this.name = JSON.stringify(localStorage.getItem('name'));
    this.lastname=JSON.stringify(localStorage.getItem('lastname'));
    this.carrera=JSON.stringify(localStorage.getItem('carrera'));

  }

}
