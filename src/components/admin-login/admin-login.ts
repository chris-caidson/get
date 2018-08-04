import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'admin-login',
  templateUrl: 'admin-login.html'
})
export class AdminLoginComponent {

  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authProvider: AuthProvider) {
  }

  public login()
  {
    this.authProvider.loginAsAdmin(this.password);
  }

}
