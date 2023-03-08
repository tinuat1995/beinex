import * as d3 from 'd3'; 
import { Component, ElementRef, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {
  @Input('source') data: any;

  constructor() { }

  ngOnInit(): void {
    this.drawChart()
  }
  private drawChart() {


    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    const svg :any = d3.select('#chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color :any = d3.scaleOrdinal()
      .domain(this.data.map((d:any) => d.name))
      .range(['#98abc5', '#8a89a6',]);

    const pie = d3.pie()
      .value((d:any) => d.value);

    const dataReady :any = pie(this.data);

    svg.selectAll('arc')
      .data(dataReady)
      .enter()
      .append('path')
      .attr('d', d3.arc()
        .innerRadius(radius * 0.5)
        .outerRadius(radius * 0.8)
      )
      .attr('fill', (d:any) => color(d.data.name))
      .attr('stroke', 'white')
      .style('stroke-width', '2px')
      .style('opacity', 0.7);
      const labelLocation = d3.arc()
      .innerRadius(50)
      .outerRadius(radius);

    svg.selectAll('pieces')
      .data(dataReady)
      .enter()
      .append('text')
      .text((d:any) => d.data.value)
      .attr('transform', (d:any) => "translate(" + labelLocation.centroid(d) + ")")
      .style('text-anchor', 'middle')
      .style('font-size', 20);
  }
}
