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
      { title: "Get Started", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "Step 1", component: "Step_1Page", separatorLevel: 4, icon: null, stepNumber: "1" },
      { title: "Step 2", component: "Step_2Page", separatorLevel: 4, icon: null, stepNumber: "2" },
      { title: "Step 3", component: "Step_3Page", separatorLevel: 4, icon: null, stepNumber: "3" },
      { title: "Step 4", component: "Step_4Page", separatorLevel: 4, icon: null, stepNumber: "4" },
      { title: "Step 5", component: "Step_5Page", separatorLevel: 4, icon: null, stepNumber: "5" },

      // GET Success
      { title: "Get Success", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "Welcome", component: "WelcomePage", separatorLevel: 4, icon: "bullhorn", stepNumber: null },
      { title: "Step 1", component: "GetSuccessStep_1Page", separatorLevel: 4, icon: null, stepNumber: "1" },
      { title: "Step 2", component: "GetSuccessStep_2Page", separatorLevel: 4, icon: null, stepNumber: "2" },
      { title: "Step 3", component: "GetSuccessStep_3Page", separatorLevel: 4, icon: null, stepNumber: "3" },
      { title: "Step 4", component: "GetSuccessStep_4Page", separatorLevel: 4, icon: null, stepNumber: "4" },
      { title: "Recap", component: "RecapPage", separatorLevel: 4, icon: "check-circle", stepNumber: null },

      // GET Calls
      { title: "GET Calls", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "Daily M-F", component: "DailyCallsPage", separatorLevel: 4, icon: "phone", stepNumber: null },
      { title: "Leadership", component: "LeadershipVideosPage", separatorLevel: 4, icon: "film", stepNumber: null },
      { title: "Targeted Subject", component: "TargetedSubjectPage", separatorLevel: 4, icon: "user", stepNumber: null },

      // GET Elevated
      { title: "Get Elevated", component: null, separatorLevel: 2, icon: null, stepNumber: null },
      { title: "Books", component: "BooksPage", separatorLevel: 4, icon: "book", stepNumber: null },
      { title: "Podcasts", component: "PodcastsPage", separatorLevel: 4, icon: "podcast", stepNumber: null },
      { title: "Videos", component: "VideosPage", separatorLevel: 4, icon: "video-camera", stepNumber: null },
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
