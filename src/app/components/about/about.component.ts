import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faCopyright, faClipboardList, faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
    faCopyright = faCopyright;
    faClipboardList = faClipboardList;
    faBookmark = faBookmark;
    constructor() { }

    ngOnInit(): void {
    }

}
