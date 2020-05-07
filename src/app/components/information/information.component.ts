import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faPhone, faEnvelope, faMapMarkerAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';


export interface Social {
    icon: string 
    link: string 
}

@Component({
    selector: 'app-information',
    templateUrl: './information.component.html',
    styleUrls: ['./information.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InformationComponent implements OnInit {
    faPhone = faPhone;
    faEnvelope = faEnvelope;
    faMapMarkerAlt = faMapMarkerAlt;
    faUniversity = faUniversity;
    socials: Social[] = [
        { icon: 'fa fa-linkedin', link: 'https://www.linkedin.com/in/jack-tr%E1%BA%A7n-7549a0192/'},
        { icon: 'fa fa-facebook', link: 'https://www.facebook.com/tranhuuthu991990'},
        { icon: 'fa fa-google-plus', link: ''}

    ]
    constructor() { }

    ngOnInit(): void {
    }

}
