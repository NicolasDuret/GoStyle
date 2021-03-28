import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-creation_coupon',
  templateUrl: 'creation_coupon.page.html',
  styleUrls: ['creation_coupon.page.scss',
]
})
export class creation_coupon {
  form: FormGroup;
  data:any = {};

  constructor(public fb: FormBuilder,private http: HttpClient,public navCtrl: NavController) {
    this.form = this.fb.group({
      nom: [''],
      description: [''],
      dateDebut: [''],
      dateExpiration: [''],
      montantMinimum: [''],
      ville: [''],
      nbUtilisation: [''],
    })
  }
 
  submit() {
    var formData: any = new FormData();
    formData.append("nom", this.form.get('nom').value);
    formData.append("description", this.form.get('description').value);
    formData.append("dateDebut", this.form.get('dateDebut').value);
    formData.append("dateExpiration", this.form.get('dateExpiration').value);
    formData.append("montantMinimum", this.form.get('montantMinimum').value);
    formData.append("ville", this.form.get('ville').value);
    formData.append("nbUtilisation", this.form.get('nbUtilisation').value);
  
    this.http.post('http://localhost:8181/api-gostyle/coupons', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}
