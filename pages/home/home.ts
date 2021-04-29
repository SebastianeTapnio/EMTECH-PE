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
  
  calculateBMR() {
    this.bmrmale = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
    this.bmrmale = parseFloat(this.bmrmale.toFixed(2));
    this.bmrfemale = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
    this.bmrfemale = parseFloat(this.bmrfemale.toFixed(2));

    if (this.bmrmale) {
     this.bmrmale = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
    } else {
      this.bmrfemale = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
    }
  }

}
