import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginStateService } from '../login-state.service';
import { AuthState } from '../../store/auth-state';

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

    constructor(private formBuilder: FormBuilder,
                private loginStateService: LoginStateService) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'username': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        });

        this.loginStateService
            .getState()
            .subscribe((state: AuthState) => {
                this.fetching = state.fetching;
            });
    }

    login() {
        this.loginStateService.login('est', 'aaa');
    }


}