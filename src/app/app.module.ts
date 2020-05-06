import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './modules/share/share.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AreaComponent } from './components/area/area.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        OverviewComponent,
        AreaComponent,
        ChartsComponent,
        CardsComponent
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
