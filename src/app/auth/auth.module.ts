import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';

import { LoginComponent } from './login/login.component/login.component';
import { AuthService } from './auth.service';
import { AuthEffects } from './store/auth.effects';
import { AuthStateService } from './store/auth-state.service';
import { AuthGuard } from './auth.guard';


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
        AuthStateService,
        AuthGuard
    ]
})
export class AuthModule {}