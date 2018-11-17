import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { PdfProvider } from '../providers/pdf/pdf';
import { AuthProvider } from '../providers/auth/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyARQPX3omAdWHmnJaCeV6o0MMYdBKxxvdY",
  authDomain: "globalexecteam-17cfa.firebaseapp.com",
  databaseURL: "https://globalexecteam-17cfa.firebaseio.com",
  projectId: "globalexecteam-17cfa",
  storageBucket: "globalexecteam-17cfa.appspot.com",
  messagingSenderId: "471879347646"
};

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PdfProvider,
    AuthProvider,
   // { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppModule {}
