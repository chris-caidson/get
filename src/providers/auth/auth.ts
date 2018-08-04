import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { firebaseConfig } from "../../app/app.module";

@Injectable()
export class AuthProvider {
  private localStorageKey: string = "globalExecTeamLoggedIn";
  private localAdminStorageKey: string = "globalExecTeamAdminLoggedIn";

  incorrectPassword: boolean = false;
  incorrectAdminPassword: boolean = false;
  previousPage: string = "HomePage";
  loggedIn: boolean = localStorage.getItem(this.localStorageKey) != null;
  loggedInAsAdmin: boolean = localStorage.getItem(this.localAdminStorageKey) != null;
  count: number = 0;

  constructor() {
    firebase.initializeApp(firebaseConfig);
  }

  public login(password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword("default_user@globalexecteam.com", password)
      .then(() => {
        this.loggedIn = true;
        this.incorrectPassword = false;
        localStorage.setItem(this.localStorageKey, "true");
      })
      .catch(() => {
        this.loggedIn = false;
        this.incorrectPassword = true;
      });
  }

  public loginAsAdmin(password: string) {
    firebase
    .auth()
    .signInWithEmailAndPassword("admin_user@globalexecteam.com", password)
    .then(() => {
      this.loggedInAsAdmin = true;
      this.incorrectAdminPassword = false;
      localStorage.setItem(this.localAdminStorageKey, "true");
    })
    .catch(() => {
      this.loggedInAsAdmin = false;
      this.incorrectAdminPassword = true;
    });
  }
}
