import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
 
  val=0
  public ocultar1: boolean = false;
accion1(){
  
this.val=this.val+1

if(this.val===15){
  
  this.ocultar1 = !this.ocultar1;
}


console.log(this.val)
}

}
