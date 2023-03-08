import { Component, OnInit } from '@angular/core';
import { chartData } from 'src/app/shared/jsondata';
export interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  chartData = chartData
  constructor() { }

  ngOnInit(): void {

  }

  

}
