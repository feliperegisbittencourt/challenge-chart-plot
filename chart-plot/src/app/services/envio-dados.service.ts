import { Injectable } from '@angular/core';
import { minJson } from '../entrada-dados/entrada-dados.component';

@Injectable({
  providedIn: 'root'
})
export class EnvioDadosService {

  private type: string = '';
  private timestamp: number = 0;
  private text: string = '';
  private jsn: minJson = {data:[{type: '', timestamp: 0, select: [''], group: [''], os: '', browser: '', min_time_response: 0, max_time_response: 0, begin: 0, end: 0}]};

  constructor() { }

  setText(txt){
    this.text = txt;
  }

  getText(){
    return this.text;
  }

  setJson(json){
    this.jsn = json;
  }

  getJson(){
    return this.jsn;
  }
}
