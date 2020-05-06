import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
    cards: number[] = [1,2,3,4];
    constructor(
    ) { }

    ngOnInit(): void {

    }


}
