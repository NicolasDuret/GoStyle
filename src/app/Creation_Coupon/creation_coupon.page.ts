import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-creation_coupon',
  templateUrl: 'creation_coupon.page.html',
  styleUrls: ['creation_coupon.page.scss',
]
})
export class creation_coupon {
  data:any = {};
  http: any;

  constructor(public httpClient: HttpClient) {
  }
  ngOnInit(){}
 
  sendPostRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let postData = {
      city: [''],
      description: [''],
      discount: [''],
      first_day: [''],
      image: [''],
      last_day: [''],
      min_amount: [''],
      name: [''],
      nb_use: [''],
    }

    this.httpClient.post("http://localhost:8181/api-gostyle/coupons", postData)
      .subscribe(data => {
        console.log(data['_body']);
       }, error => {
        console.log(error);
      });
  }
}


