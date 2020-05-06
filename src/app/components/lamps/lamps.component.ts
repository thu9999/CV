import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonService } from 'src/app/modules/share/services/common.service';
import { Observable } from 'rxjs';

export interface Lamp {
    height: number 
    delay: number
}

@Component({
    selector: 'app-lamps',
    templateUrl: './lamps.component.html',
    styleUrls: ['./lamps.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LampsComponent implements OnInit {
    on$: Observable<boolean>;

    lamps: Lamp[] = [
        { height: 66, delay: 1000}, 
        { height: 46, delay: 2345}, 
        { height: 84, delay: 531}, 
        { height: 26, delay: 1234},
        { height: 72, delay: 4561},
        { height: 61, delay: 4563}, 
        { height: 30, delay: 6321},
        { height: 80, delay: 1234}
    ];
    constructor(
        private _commonService: CommonService
    ) { 
        this.on$ = this._commonService.onSource.asObservable();
    }

    ngOnInit(): void {
    }

}
