import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscaneoPageRoutingModule } from './escaneo-routing.module';

import { EscaneoPage } from './escaneo.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscaneoPageRoutingModule,
    QRCodeModule
  ],
  declarations: [EscaneoPage]
})
export class EscaneoPageModule {}
