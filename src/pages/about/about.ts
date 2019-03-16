import { Component, ViewChild } from '@angular/core';
import { NavController, Platform, ToastController, ModalController, Content } from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})

export class AboutPage {

  @ViewChild(Content) content: Content;
  
  param1:number = 1;
  param2:string = 'param2-in';
 
 platformAndroid: boolean; 
 platformIos: boolean;
 platformDesktop: boolean;
 items: Array<string>;

  constructor( public navCtrl: NavController, public iab: InAppBrowser, public platform: Platform,public toastCtrl:ToastController, public modalCtrl:ModalController) {
    this.items = [];

    this.items.push('1.Introducción');
    this.items.push('2.Descripción');
    this.items.push('3.Público');
    this.items.push('4.Funcionalidades');
    this.items.push('5.Interacciones');
    this.items.push('6.Manual');
    this.items.push('7.Permisos');

  }

  modalParametros() {
    const modal = this.modalCtrl.create('ModalParametrosPage', {p1:this.param1, p2:this.param2} );
    modal.onDidDismiss(data => {
      if(data != null){
         this.scrollTo(data);
      }
    });
    modal.present();
 }

 actualizaParametros( data ){

   
  this.param1 = data.param1;
  this.param2 = data.param2;
  
}
itemPulsado(item:string ){
  const toast =this.toastCtrl.create({
    message: 'Has pulsado' +item,
    duration: 1000,
    position: 'bottom'
  })
  toast.present();
}

lanzarToast(){

  const toast = this.toastCtrl.create({
    message: 'Este es el contenido de la Tostada.',
    showCloseButton: true,
    closeButtonText: 'Ok'
  });
  toast.present();
}
  
scrollTop(){
  this.content.scrollToTop(750);
}
scrollBottom(){
  this.content.scrollToBottom(750);
}
scrollTo(data){
  let altura = document.getElementById(data.idElemento).offsetTop;
  this.content.scrollTo(0, altura, 700);
}
  openLink(url:string){
  
    this.iab.create(url, '_system');
 
  }

}

  

