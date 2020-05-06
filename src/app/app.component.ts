import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { faHome, faPowerOff, faBell, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

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
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    open: boolean = false;
    menus: Menu[] = [
        { name: 'Dashboard', link: 'dashboard', icon: faHome, color: '#48CFAD' },
        { name: 'Notifications', link: 'notifications', icon: faBell, color: '#ED5565' },
        { name: 'Account', link: 'accountacc', icon: faUser, color: '#805AD5' },
        { name: 'Settings', link: 'accountacc', icon: faCog, color: '#4FC1E9' },
        { name: 'Logout', link: 'logout', icon: faPowerOff, color: '#A0D468' }
    ];
    constructor(
        private _cdRef: ChangeDetectorRef
    ) {}

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
}
