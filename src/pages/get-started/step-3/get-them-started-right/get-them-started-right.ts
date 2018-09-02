import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PdfProvider } from '../../../../providers/pdf/pdf';
import { AuthProvider } from '../../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-get-them-started-right',
  templateUrl: 'get-them-started-right.html',
})
export class GetThemStartedRightPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public pdfProvider: PdfProvider, public auth: AuthProvider) {
  }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }
  
  goBack() {
    this.navCtrl.pop();
  }
}
