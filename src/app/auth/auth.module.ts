import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';

import { LoginComponent } from './login/login.component/login.component';
import { AuthService } from './login/auth.service';



@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule.forRoot()
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {}