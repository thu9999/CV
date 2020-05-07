import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'app-social-icon',
    templateUrl: './social-icon.component.html',
    styleUrls: ['./social-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialIconComponent implements OnInit {
    @Input() icon: string;
    @Input() link: string;
    constructor() { }

    ngOnInit(): void {
    }

}
