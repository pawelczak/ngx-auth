// 3d party imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

// app imports
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    entryComponents: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
