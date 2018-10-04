import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ModalController } from "ionic-angular";
import { PdfProvider } from "../../../providers/pdf/pdf";
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-step-1",
  templateUrl: "step-1.html",
})
export class Step1Page {
  public activeVideo: string = "unpacking";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public pdfProvider: PdfProvider,
    private modalCtrl: ModalController,
    public auth: AuthProvider
  ) { }

  openPage(pageName) {
    this.navCtrl.push(pageName);
  }

  goBack() {
    this.navCtrl.setRoot("StartHerePage");
  }

  goForward() {
    this.navCtrl.setRoot("Step2Page");
  }

  toggleVideo(videoName: string) {
    this.activeVideo = videoName;
  }

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "isa-box":
        data = {
          name: "Unpacking Your Isagenix System",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FUnpacking-Your-Isagenix-System.mp4?alt=media&token=eb1be1d8-3b29-4632-ae92-29676c655423"
        };
        break;

      case "shake-day":
        data = {
          name: "How to Do a Shake Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FHow-to-Do-a-Shake-Day.mp4?alt=media&token=8e219566-1d91-4689-aae3-2a5c4bade945"
        };
        break;

      case "cleanse-day":
        data = {
          name: "How to Do a Cleanse Day",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FHow-to-Do-a-Cleanse-Day.mp4?alt=media&token=3a06ca1d-84a7-4270-826c-6de65aaf9d1a"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }
}
