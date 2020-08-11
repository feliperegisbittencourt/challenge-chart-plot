import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { EnvioDadosService } from '../services/envio-dados.service';

export interface minJson{
  data:[{
    type: string,
    timestamp: number
    select: [
      string
    ],
    group: [
      string
    ]
    os: string,
    browser: string,
    min_time_response: number,
    max_time_response: number,
    begin: number,
    end: number
  }
  ]
}

@Component({
  selector: 'app-entrada-dados',
  templateUrl: './entrada-dados.component.html',
  styleUrls: ['./entrada-dados.component.css']
})

export class EntradaDadosComponent implements OnInit {
  text: string = '';
  textArray: string[] = [];
  firstJson: minJson = {data:[{type: '', timestamp: 0, select: [''], group: [''], os: '', browser: '', min_time_response: 0, max_time_response: 0, begin: 0, end: 0}]};

  constructor(private envioService: EnvioDadosService) { }

  ngOnInit() {
  }

  setText(event){
    this.text = event.target.value;
    this.envioService.setText(this.text);
    /*
    this.textArray = this.text.split('\n');

    for(var i = 0; i < this.textArray.length; i++){
      if(i == 0){
        this.firstJson.data[0] = JSON.parse(this.textArray[0]);
      }else{
        this.firstJson.data.push({type: '', timestamp: 0, select: [''], group: [''], os: '', browser: '', min_time_response: 0, max_time_response: 0, begin: 0, end: 0});
        this.firstJson.data[i] = JSON.parse(this.textArray[i]);
      }
    }
    console.log(this.firstJson);
    */
  }

}