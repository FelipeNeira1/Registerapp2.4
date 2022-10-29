import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthService } from './services/auth.service';

import { IonicStorageModule } from '@ionic/storage-angular';

import { AuthguardGuard } from '../guards/authguard.guard';

import { Camera } from '@awesome-cordova-plugins/camera/ngx';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, AuthService, Camera, BarcodeScanner],
  bootstrap: [AppComponent],
})
export class AppModule {}

const routes: Routes = [
  //{
    //path: '',

    //loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  //},
  {
    path: 'home',

    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',

    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[AuthService]
  }
];