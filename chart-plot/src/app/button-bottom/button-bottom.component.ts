import { Component, OnInit } from '@angular/core';
import { EnvioDadosService } from '../services/envio-dados.service';
import { minJson } from '../entrada-dados/entrada-dados.component';

@Component({
  selector: 'app-button-bottom',
  templateUrl: './button-bottom.component.html',
  styleUrls: ['./button-bottom.component.css']
})
export class ButtonBottomComponent implements OnInit {

  textArray: string[] = [];

  json: minJson = {data:[{type: '', timestamp: 0, select: [''], group: [''], os: '', browser: '', min_time_response: 0, max_time_response: 0, begin: 0, end: 0}]};

  constructor(private envioService: EnvioDadosService) { }

  ngOnInit() {
  }

  generate(){
    this.brokeText(this.envioService.getText());
    this.chart();
  }

  brokeText(txt){
    this.textArray = txt.split('\n');

    for(var i = 0; i < this.textArray.length; i++){
      if(i == 0){
        this.json.data[0] = JSON.parse(this.textArray[0]);
      }else{
        this.json.data.push({type: '', timestamp: 0, select: [''], group: [''], os: '', browser: '', min_time_response: 0, max_time_response: 0, begin: 0, end: 0});
        this.json.data[i] = JSON.parse(this.textArray[i]);
      }
    }
  }

  chart(){
    this.envioService.setJson(this.json);
  }

}
