import { Component, OnInit, OnChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { EnvioDadosService } from '../services/envio-dados.service';
import { minJson } from '../entrada-dados/entrada-dados.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {

  public lineChartData: ChartDataSets[] = [{data: [0.1, 0.2], label: 'LinuxChromeMin',  fill: false},{data:[1.3, 0.9], label: 'LinuxChromeMax', fill: false}];
  public lineChartLabels: Label[] = ['00:00','00:01'];

  public json: minJson = {data:[{type: '', timestamp: 0, select: [''], group: [''], os: '', browser: '', min_time_response: 0, max_time_response: 0, begin: 0, end: 0}]};
  public data: any[] = [];

  private count: number = 0;

  public lineChartOptions: (ChartOptions) = {
    responsive: true,
    maintainAspectRatio: false,
    legend:{
      position: "right",
    }
  }
  
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,0,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = "line";
  constructor(private envioService: EnvioDadosService) { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.json = this.envioService.getJson();
    for(var i = 0; i < this.json.data.length; i++){
      if(this.json.data[i].os == 'mac'){
        if(this.json.data[i].browser == 'chrome'){

        }
      }
      if(this.json.data[i].type == 'data'){
        this.data.push(this.json.data[i].min_time_response);
        this.data.push(this.json.data[i].max_time_response);
        this.lineChartData[this.count].data = this.data;
        this.count += 1;
      }else if(this.json.data[i].type == 'start'){

      }else if(this.json.data[i].type == 'span'){

      }else{

      }
    }
    this.lineChartData[0].data = 
  }

}
