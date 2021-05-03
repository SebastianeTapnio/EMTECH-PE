import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
height: number;
  weight: number;
  age: number;
  bmrmale: number;
  bmrfemale: number;
  bmrMessage: string;
  
  constructor(public navCtrl: NavController) {

  }

}
