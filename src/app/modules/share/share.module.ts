import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareLampMenuComponent } from './components/share-lamp-menu/share-lamp-menu.component';

// Materials
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

// Ant design
import { NzIconModule } from 'ng-zorro-antd/icon';

// Font awsome 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [ShareLampMenuComponent],
    imports: [
        CommonModule
    ],
    exports: [
        // Material
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        // Ant design
        NzIconModule,
        FontAwesomeModule,
        ShareLampMenuComponent
    ]
})
export class ShareModule { }
