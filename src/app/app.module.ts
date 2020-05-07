import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './modules/share/share.module';
import { HomeComponent } from './components/home/home.component';
import { InformationComponent } from './components/information/information.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { LampsComponent } from './components/lamps/lamps.component';
import { SocialIconComponent } from './components/social-icon/social-icon.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectComponent } from './components/project/project.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        InformationComponent,
        ExperiencesComponent,
        SkillsComponent,
        AboutComponent,
        LampsComponent,
        SocialIconComponent,
        ExperienceComponent,
        ProjectComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        ShareModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
