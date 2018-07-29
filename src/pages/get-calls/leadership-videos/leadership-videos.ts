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
  selector: "page-leadership-videos",
  templateUrl: "leadership-videos.html"
})
export class LeadershipVideosPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth: AuthProvider,
    public modalCtrl: ModalController
  ) {}

  openVideoModal(video: string) {
    var data: any;

    switch (video) {
      case "2018-03-07":
        data = {
          name: "Jessica Johnston LEADERSHIP KICKOFF - March 7, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2003%2007%20GET%20Next%20Level.mp4?alt=media&token=a2532af7-2ae7-4f3a-b3e3-f85ea30b4c6d"
        };
        break;

      case "2018-03-14":
        data = {
          name: "Susan Miller - March 14, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2003%2014%20GET%20Next%20Level.mp4?alt=media&token=5fbfdd6a-e597-4eaa-8b82-69981fa016b3"
        };
        break;

      case "2018-03-21":
        data = {
          name: "Melissa Henault - March 21, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2003%2021%20GET%20Next%20Level.mp4?alt=media&token=dd6d984f-3723-4a8f-9bbb-f7ae65866a26"
        };
        break;

      case "2018-03-28":
        data = {
          name: "Carol Elizabeth, Susan Miller & Jessica Johnston - March 28, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2FGET%20next%20level%20--%20CE%20call%20-%20March%2028.mp4?alt=media&token=a6c3dec8-69c8-4261-9e6c-20573770f95e"
        };
        break;

      case "2018-04-04":
        data = {
          name: "Chelsea Miller LIVE from Bali - April 4, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2004%2004%20GET%20Next%20Level.mp4?alt=media&token=8b26eac0-f3f6-42f3-8904-2ca2c2251670"
        };
        break;

      case "2018-04-11":
        data = {
          name: "Jessica Johnston & Jennifer Towkaniuk - April 11, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2004%2011%20GET%20Next%20Level.mp4?alt=media&token=70f3bcf0-5a90-452a-b854-7ece57a441fe"
        };
        break;

      case "2018-04-18":
        data = {
          name: "Susan Miller & Adrienne Donovan - April 18, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2004%2018%20GET%20Next%20Level.mp4?alt=media&token=cb3305ff-4f2b-4224-889e-6f1235ac9e10"
        };
        break;

      case "2018-04-25":
        data = {
          name: "Carol Elizabeth & Andrea Labouchere - April 25, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2004%2025%20GET%20Next%20Level.mp4?alt=media&token=18d41c90-c3d4-4ac1-b1e3-4df22faff40a"
        };
        break;

      case "2018-05-09":
        data = {
          name: "Jessica Johnston & Courtney Aldridge - May 9, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2005%2009%20GET%20Next%20Level.mp4?alt=media&token=95726a65-9100-4a95-8f64-1869a0972c75"
        };
        break;

      case "2018-05-16":
        data = {
          name: "Susan Miller, Carol Elizabeth & Murray Miller - May 16, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2005%2016%20GET%20Next%20Level.mp4?alt=media&token=0f0db867-c75d-482f-8fd0-59cd7f143270"
        };
        break;

      case "2018-05-23":
        data = {
          name: "Carol Elizabeth & Staci Friedman - May 23, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2005%2023%20GET%20Next%20Level.mp4?alt=media&token=d879e8c1-75f3-4624-a897-ae76a729aee7"
        };
        break;

      case "2018-05-30":
        data = {
          name: "Jessica Johnston, Carol Elizabeth & Jennifer Oyarzun - May 30, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2005%2030%20GET%20Next%20Level.mp4?alt=media&token=dcec6e6e-de09-48e4-bfd1-476d7479ad60"
        };
        break;

      case "2018-06-06":
        data = {
          name: "Jessica Johnston, Jill Alt & Shelly Balbaugh - June 6, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2006%2006%20GET%20Next%20Level.mp4?alt=media&token=d6f5617f-9444-4b62-810a-89fe9757f630"
        };
        break;

      case "2018-06-13":
        data = {
          name: "Susan Miller & Jennifer Barry - June 13, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2006%2013%20GET%20Next%20Level.mp4?alt=media&token=164e68bf-25e9-4845-a0a5-0c445edf5ef0"
        };
        break;

      case "2018-06-20":
        data = {
          name: "Jessica Johnston & Colin Brown - June 20, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2006%2020%20GET%20Next%20Level.mp4?alt=media&token=0c0c73fa-569d-4952-9ce9-a9aa45d0bdbb"
        };
        break;

      case "2018-06-27":
        data = {
          name: "Susan Miller & MaryEllen Clark - June 27, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2006%2027%20GET%20Next%20Level.mp4?alt=media&token=93866cbe-a144-436b-b0d1-fe28e966e752"
        };
        break;

      case "2018-07-11":
        data = {
          name: "Carol Elizabeth & Tavia Rogerson - July 11, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2007%2011%20GET%20Next%20Level.mp4?alt=media&token=ecbb78a9-dbeb-445b-bda8-2044eb26fdef"
        };
        break;

      case "2018-07-18":
        data = {
          name: "Susan Miller, Liz Lima & Susan Lee - July 18, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2007%2018%20GET%20Next%20Level.mp4?alt=media&token=6b2c807e-52f2-4812-959e-f79deed4b9a0"
        };
        break;

      case "2018-07-25":
        data = {
          name: "Adrienne Donovan & Nancy Baxter - July 25, 2018",
          url: "https://firebasestorage.googleapis.com/v0/b/globalexecteam-17cfa.appspot.com/o/videos%2F2018%2007%2025%20GET%20Next%20Level.mp4?alt=media&token=4b342c64-a524-42c4-a5da-d0a03488e077"
        };
        break;
    }

    const myModal = this.modalCtrl.create("VideoModalPage", data);
    myModal.present();
  }
}
