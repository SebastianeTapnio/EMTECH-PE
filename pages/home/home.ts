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
  bmr: number;
  bmrMessage: string;
  constructor(public navCtrl: NavController) {
  
  calculateBMR() {
    this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + 5;
    
  }

}
