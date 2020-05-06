import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareLampMenuComponent } from './components/share-lamp-menu/share-lamp-menu.component';

// Materials
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

// Ant design
import { NzIconModule } from 'ng-zorro-antd/icon';

// Font awsome 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tab/tab.component';
@NgModule({
    declarations: [ShareLampMenuComponent, TabsComponent, TabComponent],
    imports: [
        CommonModule
    ],
    exports: [
        // Material
        MatButtonModule,
        MatTooltipModule,
        // Ant design
        NzIconModule,
        FontAwesomeModule,
        ShareLampMenuComponent,
        TabComponent,
        TabsComponent
    ]
})
export class ShareModule { }
