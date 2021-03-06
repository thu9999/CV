import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

export interface Experience {
    time: string 
    title: string 
    subtitle: string 
    descriptions: string[]
}

@Component({
    selector: 'app-experiences',
    templateUrl: './experiences.component.html',
    styleUrls: ['./experiences.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent implements OnInit {
    experiences: Experience[] = [
        {
            time: '2017-now', title: 'Yedda', subtitle: 'Web frontend developer', 
            descriptions: [
                'Build new CRM system',
                'Build new dashboard system',
                'Build chart list by D3',
                'Build new SSO login system',
                'Build new utility system (fullstack) for add/read/delete/copy data',
                'Build new ACL interface',
                'Build new user management interface',
                'Build website for uploading images/videos',
                'Build new company introduction website',
                'Maintain and support dashboard website', 
                'Fix bugs and add new features to dashboard'
            ]
        },
        {
            time: '2014-2016', title: 'Tek-Experts', subtitle: 'Customer supporting engineer', descriptions: ['Support HP Records manager software for European\'s customers'],
        },
        {
            time: '2013-2014', title: 'Viettel', subtitle: 'Telecommunication Engineer', descriptions: ['Fiber optic', 'Supervise and evaluate station'],
        }

    ];
    constructor() { }

    ngOnInit(): void {
    }

}
