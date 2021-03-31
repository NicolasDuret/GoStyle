import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-scan',
  templateUrl: 'scan.page.html',
  styleUrls: ['scan.page.scss'],
})
export class Scan {
  public textToCode: string;
  public myAngularxQrCode: string = null;
  public showCamera = false;
  public textScanned: string = '';
  private _couponScannUrl = 'http://localhost:8181/api-gostyle/coupons/search/by-name';
  private _coupontUrl = 'http://localhost:8181/api-gostyle/coupons';
  scann = null;
  coupon: any;

  constructor(
    private iab: InAppBrowser,
    private qrScanner: QRScanner,
    private http: HttpClient,
    public toastController: ToastController

  ) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Coupon non valide',
      position: 'middle',
      animated: true,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  async  ajoutToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'ajout dans la liste',
      position: 'middle',
      animated: true,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  createQRCode() {
    this.myAngularxQrCode = this.textToCode;
    this.textToCode = "";
  }

  openLink(link: any) {
    const browser = this.iab.create(link, '_system', 'location=yes');
  }

  scanCode() {
    this.showCamera = true;
    // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
        // start scanning
        console.log('Scan en cours...' + JSON.stringify(status));
        const scanSub = this.qrScanner.scan().subscribe((text: any) => {
          console.log('Scanned something', text.result);
          this.textScanned = text.result;
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
          this.showCamera = false;
          this.getCoupon().subscribe(result => {
            this.scann = result;
            this.getListCoupon().subscribe((result: any) => {

              fetch(`http://localhost:8181/api-gostyle/coupons/search/by-name?name=${this.textScanned}`)
              .then((res) => {
                res.json().then((json)=>{
                  if(json._embedded.coupons.length){
                    this.ajoutToastWithOptions();
                    const coupon_path = new URL(json._embedded.coupons[0]._links.self.href).pathname
                    const regex = /\/api-gostyle\/coupons\/(.*)/g;
                    const id = regex.exec(coupon_path)[1];
                    const myHeaders = new Headers();
                    myHeaders.append("Content-Type", "text/plain");

                    const requestOptions = {
                      method: 'PATCH',
                      headers: myHeaders,
                      body: `http://localhost:8181/api-gostyle/coupons/${id}`
                    };

                    fetch("http://localhost:8181/api-gostyle/users/1/coupons", requestOptions)
                  }
                  else {
                    this.presentToastWithOptions();
                  }

                })
              })
            })
          })
        });
      } else if (status.denied) {
        // camera permission was permanently denied
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }

  getCoupon(){

    return this.http.get(`${this._couponScannUrl}?name=${this.textScanned}`);
  }

  getListCoupon() {
    return this.http.get(this._coupontUrl).pipe(shareReplay());
  }

  closeCamera() {
    this.showCamera = false;
    this.qrScanner.hide(); // hide camera preview
    this.qrScanner.destroy();
  }
}
