import { Component, OnInit, ViewChild, Input, Output, EventEmitter, Renderer2, ElementRef, OnChanges } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-share-lamp-menu',
  templateUrl: './share-lamp-menu.component.html',
  styleUrls: ['./share-lamp-menu.component.scss']
})
export class ShareLampMenuComponent implements OnChanges, OnInit {
    @ViewChild('lamp', { static: true }) lampElementRef: ElementRef;
    @Input() on: boolean = false;
    @Input() height: number;
    @Input() delay: number;
    //@Input() menuTitle: string;
    @Output() lampEvent = new EventEmitter();
    constructor(
        private _renderer: Renderer2
    ) { }

    ngOnChanges(){
        const lamp = this.lampElementRef.nativeElement;
        const childElements = lamp.childNodes;
        // Remove all children before render new ones
        for(let child of childElements) {
            this._renderer.removeChild(lamp, child);
        }

        this._renderer.appendChild(lamp, this.drawLamp(this.on, this.height, this.delay));
    }

    ngOnInit(): void {
    }

    onLampClick() {
        this.lampEvent.emit()
    }

    drawLamp(on: boolean, height: number, delay: number) {
        const self = this;
        const div= document.createElement('div');
        const innerWidth = 120;
        const innerHeight = 180;
        const lampContainer = d3.select(div).append('svg')
            .attr('width', innerWidth)
            .attr('height', innerHeight);

        //Container for the gradients
        var defs = lampContainer.append('defs');

        //Filter for the outside glow
        var filter = defs.append('filter')
            .attr('id','glow');
        filter.append('feGaussianBlur')
            .attr('stdDeviation','3.5')
            .attr('dx', 10)
            .attr('dy', 10)
            .attr('result','coloredBlur');
        var feMerge = filter.append('feMerge');
        feMerge.append('feMergeNode')
            .attr('in','coloredBlur');
        feMerge.append('feMergeNode')
            .attr('in','SourceGraphic');

        const lampGroup = lampContainer.append('g')
            .attr('transform', `translate(${innerWidth / 2}, 0)`);

        // Wire
        const wireWidth = 3;
        const wireHeight = height;
        const wireColor = '#4A5568';
        const wire = lampGroup.append('rect')
            .attr('x', -wireWidth / 2)
            .attr('y', 0)
            .attr('width', wireWidth)
            .attr('height', wireHeight)
            .attr('fill', wireColor)
            .attr('cursor', 'pointer')
            .on('click', function(){
                self.lampEvent.emit();
            });

        // Bulb root
        const bulbRootRadius = 5;
        const bulbRootGroup = lampGroup.append('g')
            .attr('transform', `translate(0, ${height})`);

        const bulbRoot = bulbRootGroup.append('circle')
            .attr('cx', 0)
            .attr('cy', 0)
            .attr('r', bulbRootRadius)
            .attr('fill', wireColor)
            .attr('cursor', 'poniter')
            .on('click', function(){
                self.lampEvent.emit();
            });

        const bulbRadius = 30;

        // light
        const lightRadius = 12;
        const lightOnColor = '#f99f5b';
        const lightOnMiddleColor = '#fbc69d';
        const lightOffColor = '#dddddd';
        const lightColor = on ? lightOnColor : lightOffColor;

        const light = lampGroup.append('g')
            .attr('transform', `translate(0, ${wireHeight + bulbRootRadius + bulbRadius * 1.2})`)
            .append('circle')
            .attr('cx', 0)
            .attr('cy', -lightRadius / 3)
            .attr('r', lightRadius)
            .attr('fill', lightOffColor)
            .transition()
            .delay(1000)
            .duration(1000)
            .attr('fill', lightColor)
            .on('end', function() {
                const currentLight = d3.select(this);
                if(on) {
                    currentLight.style("filter", "url(#glow)");
                }
            })

        // Bulb
        const bulb = lampGroup.append('g')
            .attr('transform', `translate(0, ${wireHeight + bulbRootRadius * 2})`);
        bulb.append('path')
            .attr('d', `M -${bulbRadius} ${bulbRadius} A ${bulbRadius} ${bulbRadius * 1.2} 0 0 1 ${bulbRadius} ${bulbRadius} Z`)
            .attr('fill', '#ffffff')
            .attr('cursor', 'pointer')
            .on('click', function(){
                self.lampEvent.emit();
            });

        if(on) {
            lampGroup.append('rect')
                .attr('x', -wireWidth / 2)
                .attr('y', 0)
                .attr('width', wireWidth)
                .attr('height', 0)
                .attr('fill', lightOnColor)
                .transition()
                .duration(1000)
                .attr('height', wireHeight)
                .on('end', function() {
                    wire.remove();
                    bulbRoot.transition()
                        .duration(200)
                        .attr('fill', lightOnColor);
                })
        }


        
        return div;
    }

}
