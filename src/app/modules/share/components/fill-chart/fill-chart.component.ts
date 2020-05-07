import { Component, OnInit, ViewChild, ElementRef, OnChanges, Renderer2, Input } from '@angular/core';
import * as d3 from 'd3';
import { Observable } from 'rxjs';
import { CommonService } from '../../services/common.service';

export interface Options {
    title: string
    height: number
    color: string 
}

@Component({
  selector: 'app-fill-chart',
  templateUrl: './fill-chart.component.html',
  styleUrls: ['./fill-chart.component.scss']
})
export class FillChartComponent implements OnChanges, OnInit {
    @ViewChild('container', { static: true }) container: ElementRef;
    mode$: Observable<boolean>;
    @Input() data: number;
    @Input() options: Options;
    constructor(
        private _renderer: Renderer2,
        private _commonService: CommonService
    ) { 
        this.mode$ = this._commonService.onSource.asObservable();
    }

    ngOnChanges() {
        const nativeElement = this.container.nativeElement;
        this._renderer.appendChild(nativeElement, this.drawFulfillBarChart(this.data, this.options))
    }

    ngOnInit(): void {
    }

    drawFulfillBarChart(data: number, options: Options) {
        const xValue = d => d.value;
        const yValue = d => d.name;
        const width = 650;
        const height = 40;

        const div = document.createElement('div');
        const divElemment = d3.select(div);

        const svg = divElemment.append('svg')
            .attr('viewBox', `0 0 ${width} ${height}`);
  
        const scale = d3.scaleLinear()
            .domain([0, 100])
            .range([0, width]);

            
        svg.append('rect')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', scale(100))
        .attr('height', options.height)
        .attr('rx', options.height / 2)
        .attr('ry', options.height / 2)
        .attr('fill', '#121e3b');

        svg.append('rect')
            .attr('x', 0)
            .attr('y', 0)
            .attr('width', 0)
            .attr('height', options.height)
            .attr('rx', options.height / 2)
            .attr('ry', options.height / 2)
            .attr('fill', options.color)
            .transition()
            .duration(2000)
            .attr('width', scale(data));

        return div;
    }

}
