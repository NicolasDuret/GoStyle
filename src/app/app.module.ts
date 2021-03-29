import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HttpClientModule } from '@angular/common/http';

export const firebaseConfig = {
  apiKey: '**-**',
  authDomain: 'auth-**.firebaseapp.com',
  databaseURL: 'https://auth-/******.firebaseio.com',
  projectId: 'auth-**',
  storageBucket: 'auth-**.appspot.com',
  messagingSenderId: '**',
  appId: '*:**:web:**'
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),  HttpClientModule, AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule,],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

