import { Component, ViewChild} from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild(Content) content: Content;
  param1:number = 1;
  param2:string = 'param2-in';

  constructor(public navCtrl: NavController,public iab: InAppBrowser) {

  }
  scrollTop(){
    this.content.scrollToTop(750);
  }
  scrollBottom(){
    this.content.scrollToBottom(750);
  }
  
  scrollTo(idElemento){
    let altura = document.getElementById(idElemento).offsetTop;
    this.content.scrollTo(0, altura, 700);
  }


}
