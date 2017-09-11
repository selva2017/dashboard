import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private translate: TranslateService) {
        translate.addLangs(['en', 'fr', 'ur', 'es', 'fa']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr|ur|es|fa/) ? browserLang : 'en');
    }


  ngOnInit() {
    firebase.initializeApp({
        apiKey: "AIzaSyDwjx69Khz7Yw6URsKPAF4svYDPE_sE7Y0",
        authDomain: "dashboard-f10ff.firebaseapp.com",
        databaseURL: "https://dashboard-f10ff.firebaseio.com",
        projectId: "dashboard-f10ff",
        storageBucket: "dashboard-f10ff.appspot.com"
    });
  }

}
