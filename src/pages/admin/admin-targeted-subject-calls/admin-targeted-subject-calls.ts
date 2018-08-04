import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import * as firebase from "firebase"
import "firebase/firestore";
import { AuthProvider } from '../../../providers/auth/auth';

@IonicPage()
@Component({
  selector: "page-admin-targeted-subject-calls",
  templateUrl: "admin-targeted-subject-calls.html"
})
export class AdminTargetedSubjectCallsPage {
  private collectionName: string = "targeted-subject-calls";

  public items: any[] = [];
  public loaded: boolean = false;
  public newOrder: number = null;
  public newCategory: string = null;
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
      .orderBy("order")
      .get()
      .then(calls => {
        calls.forEach(c => {
          let data = c.data();
          self.items.push({
            id: c.id,
            order: data.order,
            category: data.category,
            subject: data.subject,
            url: data.url
          });
        });

        self.loaded = true;
      });
  }

  public updateData(
    id: string,
    order: number,
    category: string,
    subject: string,
    url: string
  ) {
    let self = this;

    if (!order || !category || !subject || !url) {
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
        order: +order,
        category: category.trim(),
        subject: subject.trim(),
        url: url
          .trim()
          .replace("http:", "")
          .replace("https:", "")
      })
      .then(() => {
        let toast = this.toastCtrl.create({
          message:
            "'" + subject + "' targeted subject call updated successfully.",
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
    order: number,
    category: string,
    subject: string,
    url: string
  ) {
    let self = this;

    if (!order || !category || !subject || !url) {
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
        order: +order,
        category: category.trim(),
        subject: subject.trim(),
        url: url.trim().replace("http:", "").replace("https:", "")
      })
      .then(docRef => {
        let toast = this.toastCtrl.create({
          message:
            "'" + subject + "' targeted subject call added successfully.",
          duration: 2000,
          position: "middle"
        });

        self.newOrder = null;
        self.newCategory = null;
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

  public confirmDelete(index: number) {
    this.items[index].deleting = true;
  }

  public cancelDelete(index: number) {
    this.items[index].deleting = false;
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
            "'" + subject + "' targeted subject call deleted successfully.",
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
