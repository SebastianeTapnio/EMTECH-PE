import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css']
})
export class HomePage {
  height: number;
  weight: number;
  age: number;
  bmrmale: number;
  bmrfemale: number;
  bmrMessage: string;

  constructor(public navCtrl: NavController) {
  
  

  }

}
