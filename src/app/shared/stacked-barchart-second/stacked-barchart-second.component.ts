import { Component, OnInit,Input } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Axis from 'd3-axis';
import * as d3Array from 'd3-array';
export interface Margin {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

@Component({
  selector: 'app-stacked-barchart-second',
  templateUrl: './stacked-barchart-second.component.html',
  styleUrls: ['./stacked-barchart-second.component.css']
})
export class StackedBarchartSecondComponent implements OnInit {
  @Input('source') chartData: any;
  private margin!: Margin;
  private width!: number;
  private height!: number;
  private svg: any;    
  
  private x: any;
  private y: any;
  private z: any;
  private g: any;
  constructor() { }

  ngOnInit(): void {
    this.initMargins();
    this.initSvg();
    this.drawChart(this.chartData);
  }

  private initMargins() {
    this.margin = {top: 20, right: 20, bottom: 30, left: 40};
}

private initSvg() {
    this.svg = d3.select('#chartStacked').append('svg').attr('width',400).attr('height',300);

    this.width = 300;
    this.height = 200;
    this.g = this.svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    this.x = d3Scale.scaleLinear().rangeRound([0, this.height]);
    this.y = d3Scale.scaleBand().rangeRound([0, 200]).paddingInner(0.05).align(0.1);
    this.z = d3Scale.scaleOrdinal().range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);
        
}

private drawChart(data: any[]) {

    let keys = Object.getOwnPropertyNames(data[0]).slice(1);
    data = data.map(v => {
        v.total = keys.map(key => v[key]).reduce((a, b) => a + b, 0);
        return v;
    });
    data.sort((a: any, b: any) => b.total - a.total);

    this.y.domain(data.map((d: any) => d.category));
    this.x.domain([0, d3Array.max(data, (d: any) => d.total)]).nice();
    this.z.domain(keys);
    
    this.g.append('g')
        .selectAll('g')
        .data(d3Shape.stack().keys(keys)(data))
        .enter().append('g')
        .attr('fill', (d:any) => this.z(d.key))
        .selectAll('rect')
        .data((d:any) => d)
        .enter().append('rect')
        .attr('y', (d:any) => this.y(d.data.category))
        .attr('x', (d:any) => this.x(d[0]) )
        .attr('height', this.y.bandwidth() )
        .attr('width',(d:any) => this.x(d[1]) - this.x(d[0]) )

        this.g.append('g')
        .attr('class', 'axis')
        .attr('transform', 'translate(0,' + null + ')')
        .call(d3Axis.axisLeft(this.y).tickSizeOuter(0));

    // this.g.append('g')
    //     .attr('class', 'axis')
    //     .call(d3Axis.axisTop(this.x).ticks(null, 's'))
    //     .append('text')
    //     .attr('y', 2)
    //     .attr('x', this.x(this.x.ticks().pop()) + 0.5)
    //     .attr('dy', '0.32em')
    //     .attr('fill', '#000')
    //     .attr('font-weight', 'bold')
    //     .attr('text-anchor', 'start')
    //     .text('Population');
    

    let legend = this.g.append('g')
        .attr('font-family', 'sans-serif')
        .attr('font-size', 10)
        .attr('text-anchor', 'end')
        .selectAll('g')
        .data(keys.slice().reverse())
        .enter().append('g')
        .attr('transform', (d =0, i:any) => 'translate(0,' + i * 20 + ')');

    legend.append('rect')
        .attr('x', 300 - 19)
        .attr('width', 19)
        .attr('height', 19)
        .attr('fill', this.z);

    legend.append('text')
        .attr('x', 300 - 24)
        .attr('y', 9.5)
        .attr('dy', '0.32em')
        .text((d:any) => d);
}

}
