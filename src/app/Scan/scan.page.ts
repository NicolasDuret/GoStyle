import { Component } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { HttpClient } from '@angular/common/http';

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
  scann = null;

  constructor(
    private iab: InAppBrowser,
    private qrScanner: QRScanner,
    private http: HttpClient
  ) {}
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
            console.log('Je suis là')
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

  closeCamera() {
    this.showCamera = false;
    this.qrScanner.hide(); // hide camera preview
    this.qrScanner.destroy();
  }
}
