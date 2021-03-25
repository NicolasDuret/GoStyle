import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
      this.initializeApp();
      this.afAuth.authState.subscribe(auth => {
        console.log('Connecté: ' + auth.uid);
      });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.authState.subscribe(auth => {
        if (!auth) {
          console.log('non connecté');
          this.router.navigateByUrl('/tabs/connexion');
        } else {
          this.router.navigateByUrl('/');
          console.log('Connecté: ' + auth.uid);
        }
      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
