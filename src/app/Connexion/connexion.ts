import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: 'connexion.page.html',
  styleUrls: ['connexion.page.scss']
})
export class connexion {

  constructor(
    public toastController: ToastController,
    public afAuth: AngularFireAuth
  ) { }
  loginData = {
    email: '',
    password: ''
  }
  login() {
    console.log('Je suis dans login')
    this.afAuth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
    .then(auth => {
      console.log(auth, 'utilisateur connecté');
    })
    .catch(err => {
      console.log('Erreur: ' + err);
      this.errorMail();
    });
  }
  signUp() {
    console.log('Je suis dans signup')
    this.afAuth.createUserWithEmailAndPassword(this.loginData.email, this.loginData.password)
    .then(auth => {
      console.log(auth,'utilisateur connecté');
    })
    .catch(err => {
      console.log('Erreur: ' + err);
      this.errorMail();
    });
  }
  async errorMail() {
    const toast = await this.toastController.create({
      message: 'Email ou mot de passe incorrect',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
