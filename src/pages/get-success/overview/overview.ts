import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { PdfProvider } from '../../../providers/pdf/pdf';
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-overview',
  templateUrl: 'overview.html',
})
export class OverviewPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    private modalCtrl: ModalController,
    public auth: AuthProvider
  ) { }

  goForward() {
    this.navCtrl.setRoot("GetSuccessGetFitPage");
  }
}
