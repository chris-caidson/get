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
      case "golden-circle":
        data = {
          name: "Simon Sinek - The Golden Circle",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fsimon-sinek-the-golden-circle.mp4?alt=media&token=27bc7ecb-eba8-47f0-95ce-f20cc2616196"
        };
        break;

      case "hungry":
        data = {
          name: "Les Brown - You Gotta Be Hungry",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fles-brown-you-gotta-be-hungry.mp4?alt=media&token=11db7f16-a1c2-4707-aa16-3c9b37501534"
        };
        break;

      case "eat-last":
        data = {
          name: "Simon Sinek - Why Leaders Eat Last",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fsimon-sinek-why-leaders-eat-last.mp4?alt=media&token=c39b3066-c108-43e5-85d1-82106f5d04d7"
        };
        break;

      case "stanford":
        data = {
          name: "Steve Jobs - Standford Commencement Address",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fsteve-jobs-2005-stanford-commencement-address.mp4?alt=media&token=bd13a330-e82f-427a-9991-329a29ac1826"
        };
        break;

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
          name: "NWM vs MLM by Susan Miller",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FWhat-Is-Network-Marketing-vs-MLM-and-How-Isagenix-Got-It-Right.mp4?alt=media&token=5f81da0f-a444-407b-8126-380e2a7f8a8b"
        };
        break;

      case "biz-future":
        data = {
          name: "The Business of the Future",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fbusiness-of-the-future.mp4?alt=media&token=5b26d8c5-5ed3-4af6-afcb-eee3fe264899"
        };
        break;

      case "transform-life":
        data = {
          name: "Transform Your Life",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Ftransform-your-life.mp4?alt=media&token=201d1740-7474-4a8a-94db-b7fb3c0609cd"
        };
        break;

      case "diets-failing":
        data = {
          name: "Why Diets are Failing Us",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fdiets-failing.mp4?alt=media&token=c8c8a9d8-c25a-4a89-8275-d41897b80f8d"
        };
        break;

      case "unhealthy-truth":
        data = {
          name: "The Unhealthy Truth",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Funhealthy-truth.mp4?alt=media&token=5a149f67-8cd3-4e95-8c16-69291462ee80"
        };
        break;

      case "food-matters":
        data = {
          name: "Food Matters",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Ffood-matters.mp4?alt=media&token=058b40a9-6f6f-465e-b62c-0565a5ffc8a3"
        };
        break;

      case "fed-up":
        data = {
          name: "Fed Up",
          url:
            "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Ffed-up.mp4?alt=media&token=919f6b97-339e-4579-b379-afce8142a6df"
        };
        break;

      case "toxic":
        data = {
          name: "Are You Toxic?",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Ftoxic.mp4?alt=media&token=c3344ebd-62e3-4e85-a312-ce8f0d4018c7"
        };
        break;

      case "why-cleanse":
        data = {
          name: "Why Cleanse?",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fwhy-cleanse.mp4?alt=media&token=fde1b387-22b7-482b-89bc-6bd7ad30df02"
        };
        break;

      case "isa-works":
        data = {
          name: "Why Isagenix Works",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Fwhy-isa-works.mp4?alt=media&token=c83d6a1a-e089-4afe-8c8c-e62f81d38f08"
        };
        break;

        case "erin-adrienne":
        data = {
          name: "Basic Compensation Plan",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2Ferin-adrienne-comp-plan.mp4?alt=media&token=79a6bd74-b245-4a41-a744-f843ee23e25f"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }
}
