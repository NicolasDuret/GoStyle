import { Component } from '@angular/core';
import {Router, Routes, RouterModule} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-liste',
  templateUrl: 'liste.page.html',
  styleUrls: ['liste.page.scss']
})
@Injectable({
  providedIn: 'root',
})
export class liste {

  private _coupontUrl = 'http://localhost:8181/api-gostyle/users/1/coupons';
  listCoupons : any;

  constructor(
    private http: HttpClient,
    public router: Router
    )
  {}

  getListCoupon() {
    return this.http.get(this._coupontUrl).pipe(shareReplay());
  }
  ngOnInit() {
    this.getListCoupon().subscribe((result: any) => {
      this.listCoupons = result._embedded.coupons;
      this.listCoupons.map((coupon) => {
        const coupon_path = new URL(coupon._links.self.href).pathname
        const regex = /\/api-gostyle\/coupons\/(.*)/g;
        console.log(coupon_path)
        coupon['id'] = regex.exec(coupon_path)[1];
        console.log(coupon)
        return coupon
      })
    })
  }

  details(couponId: number) {
    return this.http.get(`${this._coupontUrl}/${couponId}`).pipe(shareReplay());
  }

  redirectCoupon(id: number) {
    this.router.navigate(['tabs/coupon', id]);
  }

}

