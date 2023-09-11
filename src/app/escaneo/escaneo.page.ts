import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@Component({
  selector: 'app-escaneo',
  templateUrl: './escaneo.page.html',
  styleUrls: ['./escaneo.page.scss'],
})
export class EscaneoPage implements OnDestroy {

  qrCodeString = 'el manzana';
  scannedResult: any;

  constructor() {}

  async checkPermission(){
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted){
        return true;
      }
      return false;
    } catch(e) { 
      console.log(e);
    }
    return true;
  }

  async startScan() {
    try{
      const permission = await this.checkPermission();
      if(!permission){
        return;
      }
      await BarcodeScanner.hideBackground();
      const result = await BarcodeScanner.startScan();
      console.log(result);
      if(result?.hasContent){
        this.scannedResult = result.content;
        BarcodeScanner.showBackground();
        console.log(this.scannedResult);
      }
    } catch(e){
      console.log(e);
      this.stopScan();
    }
  }

  async stopScan(){
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  }

  ngOnDestroy(): void {
      this.stopScan();
  }
}
