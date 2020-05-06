import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CardItem } from 'src/app/modules/interfaces/card-item';

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsComponent implements OnInit {
    cards: CardItem[] = [
        { title: 'traffic', value: 3242, icon: 'user', color: '#FC6E51', background: '#feeae6', type: 0 },
        { title: 'sales', value: 421, icon: 'transaction', color: '#4FC1E9', background: '#e8f7fc', type: 0 },
        { title: 'revenue', value: 3000000, icon: 'money-collect', color: '#FFCE54', background: '#fff1cc', type: 1 },
        { title: 'conversion', value: 58, icon: 'percentage', color: '#EC87C0', background: '#fce9f3', type: 2 }
    ]
    constructor() { }

    ngOnInit() {
    }

}
