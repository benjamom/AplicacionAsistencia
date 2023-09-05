import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor() { }
  usuario = "";
  password = "";

  ngOnInit() {
  }

  inicio(){
    localStorage.setItem('usuario', this.usuario)
    localStorage.setItem('password', this.password)
  }

}
