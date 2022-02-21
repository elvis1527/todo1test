import { Component } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { BarcodeScanner} = Plugins;

import { Todo1Data } from '../../providers/todo1-data';

@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
})
export class SpeakerListPage {
  speakers: any[] = [];
  
  datocodificado: any;
  datoscaneado: {};
  constructor(public confData: Todo1Data) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }


  async  startScanner() {
    console.log("Entro en startScanner");
    const result = await BarcodeScanner.startScan();
    console.log("🚀 ~ file: speaker-list.ts ~ line 30 ~ SpeakerListPage ~ startScanner ~ result", result)
    
    
  }
  
}
