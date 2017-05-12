import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Effect, Actions, toPayload } from '@ngrx/effects';

import { ActionTypes, LoginSuccessAction, LoginFailureAction } from './actions';
import { AuthService } from '../auth.service';


@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions,
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

}