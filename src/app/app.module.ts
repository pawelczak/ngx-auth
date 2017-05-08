// 3d party imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';

// app imports
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component/login.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        routing,
        BrowserAnimationsModule,
        MaterialModule.forRoot(),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    entryComponents: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
