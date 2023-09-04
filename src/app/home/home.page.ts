import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario = "admin";

  constructor() {}

  ngOnInit(){
  }

  inicio(){
    localStorage.setItem('usuario', this.usuario)
  }

}
