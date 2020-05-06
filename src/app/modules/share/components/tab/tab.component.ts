import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';

@Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabComponent implements OnChanges, OnInit {
    @Input() active: boolean;
    @Input() tabTitle: string;
    @Input() tabHeight: number = 20;
    constructor(
        tabs: TabsComponent,
        private _cdRef: ChangeDetectorRef
    ) { 
        tabs.adTab(this);
    }

    ngOnChanges() {
        this._cdRef.detectChanges();
    }

    ngOnInit() {
    }

}
