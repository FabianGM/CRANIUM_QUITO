import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  salirModal(){
this.modalCtrl.dismiss()
  }


  data={
    descripcion:'',
    palabraclave:'',
    respuesta:''
  }
  salirModalAr(){
    
      
   
    console.log(this.data )
    this.modalCtrl.dismiss()
   
      }
}
