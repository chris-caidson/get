import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfProvider } from '../../../providers/pdf/pdf';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-step-5',
  templateUrl: 'step-5.html',
})
export class Step_5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pdfProvider: PdfProvider, public auth: AuthProvider) {
  }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }
}
