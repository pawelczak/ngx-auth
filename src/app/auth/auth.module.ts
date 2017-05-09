import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';

import { LoginComponent } from './login/login.component/login.component';
import { AuthService } from './login/auth.service';
import { LoginStateService } from './login/login-state.service';
import { AuthEffects } from './store/auth.effects';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule.forRoot(),
        EffectsModule.run(AuthEffects),
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthService,
        LoginStateService
    ]
})
export class AuthModule {}