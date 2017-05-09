import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.ngx.scss'
    ]
})
export class LoginComponent implements OnInit {


    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            'username': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        })
    }

    login() {
        console.log(this.loginForm);
    }


}