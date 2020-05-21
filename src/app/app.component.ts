import { Component, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { faProjectDiagram, faUser, faMedal, faQuestion, faCogs } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { CommonService } from './modules/share/services/common.service';
import { fader, transformer, slider } from './modules/share/animations/route-animations';
export interface Menu {
    name: string 
    link: string
    icon: any
    color: string
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        fader
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
    open: boolean = false;
    mode$: Observable<boolean>;
    subscription: Subscription;
    menus: Menu[] = [
        { name: 'Information', link: 'information', icon: faUser, color: '#4FC1E9' },
        { name: 'Experiences', link: 'experiences', icon: faMedal, color: '#ED5565' },
        { name: 'Skills', link: 'skills', icon: faCogs, color: '#805AD5' },
        { name: 'Projects', link: 'projects', icon: faProjectDiagram, color: '#48CFAD' },
        { name: 'About', link: 'about', icon: faQuestion, color: '#4FC1E9' }
    ];
    constructor(
        private _cdRef: ChangeDetectorRef,
        private _commonService: CommonService
    ) {
        this.mode$ = this._commonService.onSource.asObservable();
    }

    ngOnDestroy() {
    }

    /**
     * Toggle menu
     */
    onToggleMenu() {
        this.open = !this.open;
        this._cdRef.detectChanges();
    }

    /**
     * Click on menu item
     */
    onClickMenuItem() {
        this.open = false;
        this._cdRef.detectChanges();
    }

    /**
     * Change mode
     */
    changeMode(e) {
        const currentValue = this._commonService.onSource.value;
        this._commonService.onSource.next(!currentValue);
    }

    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
