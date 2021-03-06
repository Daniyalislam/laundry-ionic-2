import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CareInstructions } from '../care-instructions/care-instructions';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html'
})
export class ServicesPage {
  buttons:any = [
    [
      {title:'COLD WASH', selected:true },
      {title:'HOT WASH' , selected:false}
    ],
    [
      {title:'LOW DRY' , selected:true},
      {title:'REGULAR DRY' , selected:false}
    ],
    [
      {title:'SCENTED' , selected:true},
      {title:'NO SCENT' , selected:false}
    ],
    [
      {title:'SOFTNER' , selected:true},
      {title:'NO SOFTNER' , selected:false}
    ]
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

  imageClicked(item ,firstrow?, firstcol?, lastrow?,lastcol?,indexOfSelectedRow?){
    item.selected = !item.selected;
    if(firstrow){
      let itemArray = this.buttons[0];
        if(firstcol){
           item = itemArray[1];
        }else{
          item = itemArray[0];
        }
      item.selected = !item.selected;
    }else if(lastrow){
      let itemArray = this.buttons[this.buttons.length - 1];
        if(lastcol){
           item = itemArray[0];
        }else{
          item = itemArray[1];
        }
      item.selected = !item.selected;
    } else {
      let itemArray = this.buttons[indexOfSelectedRow] ;
        if(lastcol){
           item = itemArray[0];
        }else{
          item = itemArray[1];
        }
      item.selected = !item.selected;
    }
     console.log( item );
  }

  setClass(index){
    return index ? "services-page-unselected" : "services-page-selected";
  }

  setFontColor(index){
    return index ? "#59bd84": "#000";
  }

  startNextScreen(){
    this.navCtrl.push(CareInstructions);
    console.log("Next clicked!");
  }
}
