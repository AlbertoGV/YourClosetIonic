import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, ToastController, ModalController, Content, CardContent } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;

 platformAndroid: boolean;
 platformIos: boolean;
 platformDesktop: boolean;

 constructor(public navCtrl: NavController, public iab: InAppBrowser, public toastCtrl:ToastController, public platform: Platform) {
  
   this.platformAndroid = platform.is('android');
   this.platformIos = platform.is('ios');
   this.platformDesktop = platform.is('core');
   
 }
 lanzarToast(){
  const toast = this.toastCtrl.create({
    message: 'App de ios todavia en construcción...',
    showCloseButton: true,
    closeButtonText: 'Ok'
  });
  toast.present();
}
 openLink(url:string){
  
   this.iab.create(url, '_system');
 }

}
