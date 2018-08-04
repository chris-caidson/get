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
      { title: "Step One", component: "Step_1Page", separatorLevel: 4, icon: null, stepNumber: "1" },
      { title: "Step Two", component: "Step_2Page", separatorLevel: 4, icon: null, stepNumber: "2" },
      { title: "Step Three", component: "Step_3Page", separatorLevel: 4, icon: null, stepNumber: "3" },
      { title: "Step Four", component: "Step_4Page", separatorLevel: 4, icon: null, stepNumber: "4" },
      { title: "Step Five", component: "Step_5Page", separatorLevel: 4, icon: null, stepNumber: "5" },

      // GET Success
      { title: "GET Success", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "Welcome", component: "WelcomePage", separatorLevel: 4, icon: "bullhorn", stepNumber: null },
      { title: "Step One", component: "GetSuccessStep_1Page", separatorLevel: 4, icon: null, stepNumber: "1" },
      { title: "Step Two", component: "GetSuccessStep_2Page", separatorLevel: 4, icon: null, stepNumber: "2" },
      { title: "Step Three", component: "GetSuccessStep_3Page", separatorLevel: 4, icon: null, stepNumber: "3" },
      { title: "Step Four", component: "GetSuccessStep_4Page", separatorLevel: 4, icon: null, stepNumber: "4" },
      { title: "Recap", component: "RecapPage", separatorLevel: 4, icon: "check-circle", stepNumber: null },

      // GET Calls
      { title: "GET Calls", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "Weekday Calls", component: "DailyCallsPage", separatorLevel: 4, icon: "phone", stepNumber: null },
      { title: "Targeted Subject", component: "TargetedSubjectPage", separatorLevel: 4, icon: "user", stepNumber: null },
      // { title: "Leadership Videos", component: "LeadershipVideosPage", separatorLevel: 4, icon: "film", stepNumber: null },

      // GET Elevated
      { title: "GET Elevated", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "Books", component: "BooksPage", separatorLevel: 4, icon: "book", stepNumber: null },
      { title: "Podcasts", component: "PodcastsPage", separatorLevel: 4, icon: "podcast", stepNumber: null },
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
