import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-step-2",
  templateUrl: "step-2.html",
})
export class Step2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  openWeekdayCallsPage() {
    this.navCtrl.setRoot("WeekdayCallsPage")
  }

  goBack() {
    this.navCtrl.setRoot("Step1Page");
  }

  goForward() {
    this.navCtrl.setRoot("Step3Page");
  }
}
