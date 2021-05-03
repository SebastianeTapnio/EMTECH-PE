import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Option } from 'ionic-angular/es2015';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
height: number;
  weight: number;
  age: number;
  gender: string;
  bmrmale: number;
  bmrfemale: number;

  constructor(public navCtrl: NavController) {
  }
CalculateBMR() {
    this.bmrmale = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
    this.bmrmale = parseFloat(this.bmrmale.toFixed(2));
    this.bmrfemale = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;
    this.bmrfemale = parseFloat(this.bmrfemale.toFixed(2));

    if (this.gender = "m") {
     this.bmrmale = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
    } else {
      this.bmrfemale = 10 * this.weight + 6.25 * this.height - 5 * this.age - 161;


    }
  }

}

