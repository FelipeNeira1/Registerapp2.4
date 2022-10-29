import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  image: string;

  constructor( private barcodeScanner: BarcodeScanner ) { }


  ngOnInit() {
  }

  camara() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
