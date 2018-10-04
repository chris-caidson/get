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
  selector: "page-admin-targeted-subject-categories",
  templateUrl: "admin-targeted-subject-categories.html"
})
export class AdminTargetedSubjectCategoriesPage {
  private collectionName: string = "targeted-subject-categories";

  public items: any[] = [];
  public loaded: boolean = false;
  public newOrder: number = null;
  public newCategory: string = null;

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
      .collection(self.collectionName)
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
      .collection(self.collectionName)
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

  public confirmDelete(index: number) {
    this.items[index].deleting = true;
  }

  public cancelDelete(index: number) {
    this.items[index].deleting = false;
  }

  public deleteData(id: string, category: string) {
    let self = this;

    firebase
      .firestore()
      .collection(self.collectionName)
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
