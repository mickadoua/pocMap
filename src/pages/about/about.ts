import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact'
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  openContact(){
    this.navCtrl.push(ContactPage)
  }
}
