import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    const config = {
      apiKey: "AIzaSyAz8qlISRLROttTk-lsNN0nhZU49Ev5y9o",
      authDomain: "tpopenclassroom-67d99.firebaseapp.com",
      databaseURL: "https://tpopenclassroom-67d99.firebaseio.com",
      projectId: "tpopenclassroom-67d99",
      storageBucket: "tpopenclassroom-67d99.appspot.com",
      messagingSenderId: "61779841303"
    };
    firebase.initializeApp(config);
  }
}
