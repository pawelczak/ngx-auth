import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import {
    ActionTypes, LoginSuccessAction, LoginFailureAction,
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
                        .map(() => {
                            return (new LoginSuccessAction({}));
                        })
                        .catch((err) => Observable.of(new LoginFailureAction(err)))
        });

    @Effect()
    loginRedirec$ = this.actions$
        .ofType(ActionTypes.LOGIN_SUCCESS)
        .delay(2000)
        .switchMap(() => {
            this.router.navigate(['/home']);
            return Observable.empty();
        });


    @Effect()
    logout$ = this.actions$
        .ofType(ActionTypes.LOGOUT)
        .switchMap(() => {
            return this.authService
                        .logout()
                        .map((result) => {
                            return new LogoutSuccessAction({});
                        })
                        .catch((err) => Observable.of(new LogoutFailureAction({})));
        });

    @Effect()
    logoutRedirec$ = this.actions$
        .ofType(ActionTypes.LOGOUT_SUCCESS)
        .switchMap(() => {
            this.router.navigate(['/login']);
            return Observable.empty();
        });

}