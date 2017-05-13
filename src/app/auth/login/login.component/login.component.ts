import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthState } from '../../store/auth-state';
import { AuthStateService } from '../../store/auth-state.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.ngx.scss'
    ]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    fetching: boolean = false;

    loginErrors: string = '';

    constructor(private formBuilder: FormBuilder,
                private authStateService: AuthStateService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'username': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        });

        this.authStateService
            .getState()
            .subscribe((state: AuthState) => {
                this.fetching = state.fetching;
                this.loginErrors = state.loginErrors;
            });
    }

    login(loginForm: any) {
        this.authStateService.login(loginForm.username, loginForm.password);
    }

}
