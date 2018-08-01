import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { firebaseConfig } from "../../app/app.module";

@Injectable()
export class AuthProvider {
  private localStorageKey: string = "globalExecTeamLoggedIn";

  incorrectPassword: boolean = false;
  previousPage: string = "HomePage";
  loggedIn: boolean = localStorage.getItem(this.localStorageKey) != null;
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
}
