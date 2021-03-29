import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-coupon',
  templateUrl: 'coupon.page.html',
  styleUrls: ['coupon.page.scss']
})
export class coupon {

  private _coupontUrl = 'http://localhost:8181/api-gostyle/coupons/1';

  coupon = null;

  constructor(private http: HttpClient) {}

  getCoupon(){
    return this.http.get(this._coupontUrl);
  }

  ngOnInit() {
    this.getCoupon().subscribe(result => {
      this.coupon = result;
    })
  }

}
