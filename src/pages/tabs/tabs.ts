import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = HomePage;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab2Root: any = AboutPage;

  constructor() {

  }
}
