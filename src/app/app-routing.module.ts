import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: {
            animation: 'isRight'
        }
    },
    {
        path: 'information',
        component: InformationComponent,
        data: {
            animation: 'isRight'
        }
    },
    {
        path: 'experiences',
        component: ExperiencesComponent,
        data: {
            animation: 'isRight'
        }
    },
    {
        path: 'skills',
        component: SkillsComponent,
        data: {
            animation: 'isLeft'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            animation: 'isLeft'
        }
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
