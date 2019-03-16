import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, Content} from 'ionic-angular';
import { findLast } from '@angular/compiler/src/directive_resolver';

/**
 * Generated class for the ModalParametrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-parametros',
  templateUrl: 'modal-parametros.html',
})
export class ModalParametrosPage {

  param1:number;
  param2:string;
  items: Array<string>;
  toastCtrl: any;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, toastCtrl: ToastController) {
    this.param1 = navParams.get('p1');
    this.param2 = navParams.get('p2');
    this.items = [];
    this.actualizarItems();
      
  }

  actualizarItems(){
    this.items = [];
   // for( let i=0; i<20; i++){
     // this.items.push('item'+i);
    //}
    
    this.items.push('1.Introducción');
    this.items.push('2.Descripción');
    this.items.push('3.Público');
    this.items.push('4.Funcionalidades');
    this.items.push('5.Interacciones');
    this.items.push('6.Manual');
    this.items.push('7.Permisos');

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalParametrosPage');
  }

  scrollTop( item:string ){
      this.content.scrollToTop(750);
    
  }
  scrollBottom( item:string ){
        this.content.scrollToBottom(750);
  }

  scrollTo(idElemento){
    let altura = document.getElementById(idElemento).offsetTop;
    this.content.scrollTo(0, altura, 700);
  }
 
 closeModal(id){
  this.viewCtrl.dismiss( {idElemento:id} );
}

 
getItems(ev: any) {
  
  // Actualizamos todos lo ítems cada vez que hay un cambio
  this.actualizarItems();

  // Obtenemos la cadena introducida en el searchBar
  const val = ev.target.value;

  // Si la cadena es vacía no filtramos los ítems
  if (val && val.trim() != '') {
    this.items = this.items.filter((item) => {
      return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
  }
}
}
