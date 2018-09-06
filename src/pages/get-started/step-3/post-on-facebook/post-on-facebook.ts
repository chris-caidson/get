import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../../providers/auth/auth';
import { PdfProvider } from '../../../../providers/pdf/pdf';

@IonicPage()
@Component({
  selector: 'page-post-on-facebook',
  templateUrl: 'post-on-facebook.html',
})
export class PostOnFacebookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public auth: AuthProvider, public pdfProvider: PdfProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
