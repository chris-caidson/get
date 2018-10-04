import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import * as firebase from "firebase"
import "firebase/firestore";
import { AuthProvider } from "../../../providers/auth/auth";

@IonicPage()
@Component({
  selector: "page-admin-weekday-calls",
  templateUrl: "admin-weekday-calls.html"
})
export class AdminWeekdayCallsPage {
  private collectionName: string = "daily-calls";

  public items: any[] = [];
  public loaded: boolean = false;
  public newRecorded: string = null;
  public newSubject: string = null;
  public newUrl: string = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public auth: AuthProvider
  ) {
    this.loadData();
  }

  public loadData() {
    var self = this;

    self.loaded = false;
    self.items = [];

    firebase
      .firestore()
      .collection(self.collectionName)
      .orderBy("recorded")
      .get()
      .then(calls => {
        calls.forEach(c => {
          let data = c.data();
          self.items.push({
            id: c.id,
            recorded: data.recorded,
            subject: data.subject,
            url: data.url
          });
        });

        self.loaded = true;
      });
  }

  public confirmDelete(index: number) {
    this.items[index].deleting = true;
  }

  public cancelDelete(index: number) {
    this.items[index].deleting = false;
  }

  public updateData(id: string, recorded: string, subject: string, url: string) {
    let self = this;

    if (!recorded || !subject || !url) {
      let toast = this.toastCtrl.create({
        message: "All fields are required.",
        duration: 2000,
        position: "middle"
      });

      toast.present();
      return;
    }

    firebase
      .firestore()
      .collection(self.collectionName)
      .doc(id)
      .set({
        recorded: recorded.trim(),
        subject: subject.trim(),
        url: url
          .trim()
          .replace("http:", "")
          .replace("https:", "")
      })
      .then(() => {
        let toast = this.toastCtrl.create({
          message: "'" + subject + "' weekday call updated successfully.",
          duration: 2000,
          showCloseButton: true,
          position: "middle"
        });

        this.loadData();
        toast.present();
      })
      .catch(err => {
        let toast = this.toastCtrl.create({
          message: "ERROR: " + err,
          showCloseButton: true,
          position: "middle"
        });

        toast.present();
      });
  }

  public addData(
    recorded: string,
    subject: string,
    url: string
  ) {
    let self = this;

    if (!recorded || !subject || !url) {
      let toast = this.toastCtrl.create({
        message: "All fields are required.",
        duration: 2000,
        position: "middle"
      });

      toast.present();
      return;
    }

    firebase
      .firestore()
      .collection(self.collectionName)
      .add({
        recorded: recorded,
        subject: subject.trim(),
        url: url
          .trim()
          .replace("http:", "")
          .replace("https:", "")
      })
      .then(docRef => {
        let toast = this.toastCtrl.create({
          message:
            "'" + subject + "' weekday call added successfully.",
          duration: 2000,
          position: "middle"
        });

        self.newRecorded = null;
        self.newSubject = null;
        self.newUrl = null;

        this.loadData();
        toast.present();
      })
      .catch(err => {
        let toast = this.toastCtrl.create({
          message: "ERROR: " + err,
          showCloseButton: true,
          position: "middle"
        });

        toast.present();
      });
  }

  public deleteData(id: string, subject: string) {
    let self = this;

    firebase
      .firestore()
      .collection(self.collectionName)
      .doc(id)
      .delete()
      .then(() => {
        let toast = this.toastCtrl.create({
          message:
            "'" + subject + "' weekday call deleted successfully.",
          duration: 2000,
          showCloseButton: false,
          position: "middle"
        });

        this.loadData();
        toast.present();
      })
      .catch(err => {
        let toast = this.toastCtrl.create({
          message: "ERROR: " + err,
          showCloseButton: true,
          position: "middle"
        });

        toast.present();
      });
  }
}
