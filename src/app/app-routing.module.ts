import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [
    {
        path: 'projects',
        component: HomeComponent,
        data: {
            animation: 'homePage'
        }
    },
    {
        path: 'information',
        component: InformationComponent,
        data: {
            animation: 'informationPage'
        }
    },
    {
        path: 'experiences',
        component: ExperiencesComponent,
        data: {
            animation: 'experiencesPage'
        }
    },
    {
        path: 'skills',
        component: SkillsComponent,
        data: {
            animation: 'skillsPage'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        data: {
            animation: 'aboutPage'
        }
    },
    {
        path: '',
        redirectTo: 'information',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
