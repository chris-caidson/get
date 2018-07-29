import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-videos",
  templateUrl: "videos.html"
})
export class VideosPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    private modalCtrl: ModalController
  ) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "transform-your-life":
        data = {
          name: "Transform Your Life",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Ftransform-your-life.mp4?alt=media&token=201d1740-7474-4a8a-94db-b7fb3c0609cd"
        };
        break;

      case "start-your-life":
        data = {
          name: "Start Your Life",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fstart-your-life.mp4?alt=media&token=adf58275-5158-459c-806b-61cb26e98c6c"
        };
        break;

      case "isa-difference":
        data = {
          name: "The Isagenix Difference",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fthe-isagenix-difference.mp4?alt=media&token=7ae4f307-384c-4906-bf71-1447da8287de"
        };
        break;

      case "why-isa":
        data = {
          name: "Why Isagenix",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FWhy-Isagenix-Promo.mp4?alt=media&token=903beebd-f2d1-4e80-9386-8cb764d56cf8"
        };
        break;

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

      case "you-share":
        data = {
          name: "You Share, They Share, Repeat",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fyou-share-they-share-repeat.mp4?alt=media&token=b7981a94-b577-4d7b-bbe6-db9108cf5e3c"
        };
        break;

      case "launch-calls":
        data = {
          name: "Learn More About Launch Calls",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Flaunch-associate.mp4?alt=media&token=06536119-df70-49b8-a9b4-8d09548631e2"
        };
        break;

      case "facebook":
        data = {
          name: "How to Build with Facebook",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FTeam-Call-9%252F25.mp4?alt=media&token=45d3d81b-79f4-48f5-a387-5dd526d3d676"
        };
        break;

      case "instagram":
        data = {
          name: "How to Build with Instagram",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FZach-and-Eden-Slobin-Invite-Guest-Trainer-Audrye-McLeod-to-Share-Her-Instagram-Secrets.mp4?alt=media&token=391080aa-f9f1-4606-930c-7e2a2e2488f5"
        };
        break;

      case "comp-plan":
        data = {
          name: "Master the Compensation Plan",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FIsagenix-Compensation-Plan-with-Jim-Coover.mp4?alt=media&token=1825599d-f4ff-4190-9fdd-d91f45fb2be7"
        };
        break;

      case "network-marketing":
        data = {
          name: "Learn About Network Marketing",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FWhat-Is-Network-Marketing-vs-MLM-and-How-Isagenix-Got-It-Right.mp4?alt=media&token=5f81da0f-a444-407b-8126-380e2a7f8a8b"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }
}
