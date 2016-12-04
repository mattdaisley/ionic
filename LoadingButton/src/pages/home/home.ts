import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  isLoading: boolean = false;
  showSplash: boolean = false;

  constructor(public navCtrl: NavController) {
    
  }

  startLoad() {
    this.isLoading = true;

    setTimeout(
        () : void => {
          console.log('splash');
            this.showSplash = true;
        },
        2000
    );
  }

}
