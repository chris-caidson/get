import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class AuthProvider {
  private localStorageKey: string = "globalExecTeamLoggedIn";

  incorrectPassword: boolean = false;
  previousPage: string = "HomePage";
  loggedIn: boolean = localStorage.getItem(this.localStorageKey) != null;
  count: number = 0;

  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyARQPX3omAdWHmnJaCeV6o0MMYdBKxxvdY",
      authDomain: "globalexecteam-17cfa.firebaseapp.com",
      databaseURL: "https://globalexecteam-17cfa.firebaseio.com",
      projectId: "globalexecteam-17cfa",
      storageBucket: "globalexecteam-17cfa.appspot.com",
      messagingSenderId: "471879347646"
    });
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
