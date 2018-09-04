import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";

  pages: Array<{
    title: string;
    component: string;
    separatorLevel: number;
    icon: string;
    stepNumber: string
  }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth: AuthProvider
  ) {
    this.initializeApp();

    this.pages = [
      { title: "Home", component: "HomePage", separatorLevel: 4, icon: "home", stepNumber: null },

      // GET Started
      { title: "GET Started", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "Step One", component: "GetStartedStep_1Page", separatorLevel: 4, icon: null, stepNumber: "1" },
      { title: "Step Two", component: "GetStartedStep_2Page", separatorLevel: 4, icon: null, stepNumber: "2" },
      { title: "Step Three", component: "GetStartedStep_3Page", separatorLevel: 4, icon: null, stepNumber: "3" },

      // GET Success
      { title: "GET Success", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "GET Fit", component: "GetFitPage", separatorLevel: 4, icon: null, stepNumber: "1" },
      { title: "GET Focused", component: "GetFocusedPage", separatorLevel: 4, icon: null, stepNumber: "2" },
      { title: "GET Free", component: "GetFreePage", separatorLevel: 4, icon: null, stepNumber: "3" },

      // GET Calls
      { title: "GET Calls", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "Weekday Calls", component: "WeekdayCallsPage", separatorLevel: 4, icon: "phone", stepNumber: null },
      { title: "Targeted Subject", component: "TargetedSubjectPage", separatorLevel: 4, icon: "user", stepNumber: null },

      // GET Elevated
      { title: "GET Elevated", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "Books", component: "BooksPage", separatorLevel: 4, icon: "book", stepNumber: null },
      { title: "Videos", component: "VideosPage", separatorLevel: 4, icon: "video-camera", stepNumber: null },

      // Admin
      { title: "Admin", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "Weekday Calls", component: "AdminWeekdayCallsPage", separatorLevel: 4, icon: "wrench", stepNumber: null },
      { title: "Targeted Subject Calls", component: "AdminTargetedSubjectCallsPage", separatorLevel: 4, icon: "gear", stepNumber: null },
      { title: "Targeted Subject Categories", component: "AdminTargetedSubjectCategoriesPage", separatorLevel: 4, icon: "gears", stepNumber: null },
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(pageName) {
    this.nav.setRoot(pageName);
  }
}
