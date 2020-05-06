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

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        InformationComponent,
        ExperiencesComponent,
        SkillsComponent,
        AboutComponent,
        LampsComponent
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
