import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements OnInit {
    tabs: TabComponent[] = [];
    constructor(
        private _cdRef: ChangeDetectorRef
    ) { }

    ngOnInit() {
    }

    adTab(tab: TabComponent) {
        if(this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    }

    selectTab(tab: TabComponent) {
        console.log('select tab')
        this.tabs.forEach((t) => {
            t.active = false;
        });
        tab.active = true;
    }
}
