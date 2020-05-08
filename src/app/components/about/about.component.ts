import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { faCopyright, faClipboardList, faBookmark, faTachometerAlt, faTools, faVideo, faImage, faUser, faSignInAlt, faUniversalAccess, faBuilding, faHotel } from '@fortawesome/free-solid-svg-icons';

export interface Project {
    title: string 
    technologies: string[]
    icon: any
    color: string
}

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

    projects: Project[] = [
        { title: 'Old Dashboard', technologies: ['PHP Zend 1', 'JQuery', 'AJAX', 'Javascript'], icon: faTachometerAlt, color: '#ED5565' },
        { title: 'New Dashboard', technologies: ['Angular 8+', 'Ngxs', 'Angular Materials', 'Ng Ant Design', 'SPA', 'Web SW','SSO', 'D3JS'], icon: faTachometerAlt, color: '#FFCE54'},
        { title: 'Data Utilities', technologies: ['Angular 8+', 'Angular Materials', 'PHP Zend 1', 'Postgres'], icon: faTools,  color: '#48CFAD' },
        { title: 'Media Upload', technologies: ['Angular 8+', 'Ngxs', 'SSO', 'Ng Ant Design'], icon: faVideo, color: '#5D9CEC' },
        { title: 'Image Upload', technologies: ['PHP Zend 1', 'JQuery', 'AJAX', 'Bootstrap 4'], icon: faImage, color: '#EC87C0' },
        { title: 'Single Sign On', technologies: ['Angular 8+', 'Callback', 'Angular Materials'], icon: faSignInAlt, color: '#FC6E51' },
        { title: 'User Management', technologies: ['Angular 8+', 'Ngxs', 'Angular Materials'], icon: faUser, color: '#A0D468' },
        { title: 'ACL Management', technologies: ['Angular 8+', 'Ngxs', 'Angular Materials'], icon: faUniversalAccess, color: '#4FC1E9' },
        { title: 'Company Introduction', technologies: ['Angular 8+', 'Ngxs', 'Tailwind'], icon: faBuilding, color: '#AC92EC' },
        { title: 'Hotels', technologies: ['ReactJS', 'Redux', 'Tailwind'], icon: faHotel, color: '#CCF0C5' },
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
