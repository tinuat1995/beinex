import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { StackedBarchartComponent } from './stacked-barchart/stacked-barchart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { StackedBarchartSecondComponent } from './stacked-barchart-second/stacked-barchart-second.component';



@NgModule({
  declarations: [
    CardComponent,
    StackedBarchartComponent,
    DonutChartComponent,
    StackedBarchartSecondComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CardComponent,
    StackedBarchartComponent,
    DonutChartComponent,
    StackedBarchartSecondComponent
  ]
})
export class SharedModule { }
