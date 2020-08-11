import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { ChallegeNameComponent } from './challege-name/challege-name.component';
import { ButtonBottomComponent } from './button-bottom/button-bottom.component';
import { ChartComponent } from './chart/chart.component';
import { EntradaDadosComponent } from './entrada-dados/entrada-dados.component';
import { ChartContentComponent } from './chart-content/chart-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ChallegeNameComponent,
    ButtonBottomComponent,
    ChartComponent,
    EntradaDadosComponent,
    ChartContentComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
