import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { liste } from '../Liste/liste.page';

@Component({
  selector: 'app-coupon',
  templateUrl: 'coupon.page.html',
  styleUrls: ['coupon.page.scss']
})
export class coupon {

  private _coupontUrl = 'http://localhost:8181/api-gostyle/coupons';
  couponID : any;
  information = null;
  coupon =null;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
    ) {
      this.couponID = Number(this.route.snapshot.params['id']);
    }

  ngOnInit() {
    // Get the information from the API
    fetch(`${this._coupontUrl}/${this.couponID}`)
    .then((res) => {
      res.json().then((json)=>{
        this.coupon = json
      })
    })
    /*this.list.details(this.couponID).subscribe(result => {
      this.information = result;
    });*/
  }

}
