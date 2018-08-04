import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import * as firebase from "firebase/app";
import "firebase/firestore";

@IonicPage()
@Component({
  selector: "page-admin-targeted-subject-categories",
  templateUrl: "admin-targeted-subject-categories.html"
})
export class AdminTargetedSubjectCategoriesPage {
  public items: any[] = [];
  public loaded: boolean = false;
  public newOrder: number = null;
  public newCategory: string = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController
  ) {
    this.loadData();
  }

  public loadData() {
    var self = this;

    this.items = [];

    firebase
      .firestore()
      .collection("targeted-subject-categories")
      .orderBy("order")
      .get()
      .then(categories => {
        categories.forEach(cat => {
          let data = cat.data();
          self.items.push({
            id: cat.id,
            order: data.order,
            category: data.category
          });
        });

        self.loaded = true;
      });
  }

  public updateData(id: string, order: number, category: string) {
    if (!order || !category) {
      let toast = this.toastCtrl.create({
        message: "Order and Category are both required.",
        duration: 2000,
        position: "middle"
      });

      toast.present();
      return;
    }

    firebase
      .firestore()
      .collection("targeted-subject-categories")
      .doc(id)
      .set({
        order: +order,
        category: category.trim()
      })
      .then(() => {
        let toast = this.toastCtrl.create({
          message:
            "'" +
            category +
            "' targeted subject category updated successfully.",
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

  public addData(order: number, category: string) {
    let self = this;

    if (!order || !category) {
      let toast = this.toastCtrl.create({
        message: "Order and Category are both required.",
        duration: 2000,
        position: "middle"
      });

      toast.present();
      return;
    }

    firebase
      .firestore()
      .collection("targeted-subject-categories")
      .add({
        order: +order,
        category: category.trim()
      })
      .then(docRef => {
        let toast = this.toastCtrl.create({
          message:
            "'" + category + "' targeted subject category added successfully.",
          duration: 2000,
          position: "middle"
        });

        self.newOrder = null;
        self.newCategory = null;

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

  public deleteData(id: string, category: string) {
    firebase
      .firestore()
      .collection("targeted-subject-categories")
      .doc(id)
      .delete()
      .then(() => {
        let toast = this.toastCtrl.create({
          message:
            "'" +
            category +
            "' targeted subject category deleted successfully.",
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
