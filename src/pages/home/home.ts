import { CalcLoveProvider } from './../../providers/calc-love/calc-love';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public calc: CalcLoveProvider) {

  }

}
