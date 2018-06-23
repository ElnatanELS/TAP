import { CrushPage } from './../pages/crush/crush';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CalcLoveProvider } from '../providers/calc-love/calc-love';
import { HttpClientModule } from '@angular/common/http';
import { CrushProvider } from '../providers/crush/crush';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CrushPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDX5wt3NNV57zP0GHvSz6VhyG_OA9wTKDU",
        authDomain: "crush-10.firebaseapp.com",
        databaseURL: "https://crush-10.firebaseio.com",
        projectId: "crush-10",
        storageBucket: "crush-10.appspot.com",
        messagingSenderId: "870621776233"
      }
    ),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CrushPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CalcLoveProvider,
    CrushProvider
  ]
})
export class AppModule { }
