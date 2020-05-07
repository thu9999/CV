import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Experience } from '../experiences/experiences.component';
import { faCheck, faBookmark } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/modules/share/services/common.service';
@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    changeDetection :ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent implements OnInit {
    @Input() experience: Experience;
    @Input() left: boolean;
    @Input() active: boolean;
    @Input() last: boolean;
    faCheck = faCheck;
    faBookmark = faBookmark;
    mode$: Observable<boolean>;
    constructor(
        private _commonService: CommonService
    ) { 
        this.mode$ = this._commonService.onSource.asObservable();
    }

    ngOnInit(): void {
    }

}
