import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../../../providers/auth/auth';
import { PdfProvider } from '../../../../providers/pdf/pdf';

@IonicPage()
@Component({
  selector: 'page-text-your-few',
  templateUrl: 'text-your-few.html',
})
export class TextYourFewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public auth: AuthProvider, public pdfProvider: PdfProvider) {
  }

  goBack() {
    this.navCtrl.pop();
  }
}
