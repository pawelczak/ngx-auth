import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Effect, Actions } from '@ngrx/effects';

import {
    ActionTypes, LoginSuccessAction, LoginFailureAction, LoginSuccessPageAction,
    LogoutSuccessAction, LogoutFailureAction
} from './actions';
import { AuthService } from '../auth.service';



@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
                private router: Router,
                private authService: AuthService) {
    }

    @Effect()
    login$ = this.actions$
        .ofType(ActionTypes.LOGIN)
        .map(action => action.payload)
        .switchMap((payload) => {

            return this.authService
                        .login(payload.username, payload.password)
                        .map((result) => {
                            if (result) {
                                return new LoginSuccessAction({});
                            }
                            return new LoginFailureAction('Login and password doesn\'t match');
                        });
        });

    @Effect()
    loginSuccess$ = this.actions$
        .ofType(ActionTypes.LOGIN_SUCCESS)
        .map(action => action.payload)
        .switchMap((payload) => {

            setTimeout(() => {
                this.router.navigate(['/home']);
            }, 2000);

            return Observable.of(new LoginSuccessPageAction({}));
        });

    @Effect()
    logout$ = this.actions$
        .ofType(ActionTypes.LOGOUT)
        .switchMap((payload) => {
            return this.authService
                        .logout()
                        .map((result) => {
                            if (result) {
                                this.router.navigate(['/login']);
                                return new LogoutSuccessAction({});
                            }
                            return new LogoutFailureAction({});
                        });
        });

}