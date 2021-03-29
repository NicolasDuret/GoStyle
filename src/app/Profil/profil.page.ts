import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profil',
  templateUrl: 'profil.page.html',
  styleUrls: ['profil.page.scss']
})
export class profil {

  private _userUrl = 'http://localhost:8181/api-gostyle/users/1';

  user = null;

  constructor(private http: HttpClient) {}

  getUser(){
    return this.http.get(this._userUrl);
  }

  ngOnInit() {
    this.getUser().subscribe(result => {
      this.user = result;
    })
  }

}
