import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Options } from 'src/app/modules/share/components/fill-chart/fill-chart.component';

export interface Skill {
    data: number
    options: Options
}

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {
    skills: Skill[] = [
        {
            data: 80,
            options: {
                title: 'Angular 2+',
                height: 16,
                color: '#ED5565' 
            }
        },
        {
            data: 50,
            options: {
                title: 'ReactJS',
                height: 16,
                color: '#FFCE54' 
            }
        },
        {
            data: 50,
            options: {
                title: 'PHP Zend 1',
                height: 16,
                color: '#48CFAD' 
            }
        },
        {
            data: 70,
            options: {
                title: 'Javascript ES6',
                height: 16,
                color: '#5D9CEC' 
            }
        },
        {
            data: 85,
            options: {
                title: 'CSS/SCSS',
                height: 16,
                color: '#EC87C0' 
            }
        },
        {
            data: 95,
            options: {
                title: 'HTML',
                height: 16,
                color: '#FC6E51' 
            }
        },
        {
            data: 80,
            options: {
                title: 'D3JS',
                height: 16,
                color: '#A0D468' 
            }
        },
        {
            data: 60,
            options: {
                title: 'MySQL/Postgres',
                height: 16,
                color: '#4FC1E9' 
            }
        },        
        {
            data: 90,
            options: {
                title: 'Angular Material',
                height: 16,
                color: '#AC92EC' 
            }
        },
        {
            data: 90,
            options: {
                title: 'Ng Ant Design',
                height: 16,
                color: '#CCF0C5' 
            }
        },
        {
            data: 90,
            options: {
                title: 'Tailwind',
                height: 16,
                color: '#FED46E' 
            }
        },
        {
            data: 90,
            options: {
                title: 'Bootstrap 4',
                height: 16,
                color: '#B3C648' 
            }
        },
        {
            data: 70,
            options: {
                title: 'Redux (Ngxs)',
                height: 16,
                color: '#FF92A9' 
            }
        },
        {
            data: 90,
            options: {
                title: 'Others',
                height: 16,
                color: '#64ECED' 
            }
        }
    ]
    constructor() { }

    ngOnInit(): void {
    }

}
