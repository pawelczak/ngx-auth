import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Effect, Actions, toPayload } from '@ngrx/effects';
import { ActionTypes, LoginSuccessAction } from './actions';


@Injectable()
export class AuthEffects {

    constructor(private actions$: Actions) {
    }

    @Effect()
    login$ = this.actions$
        .ofType(ActionTypes.LOGIN)
        .switchMap(() => {
            return Observable.of(new LoginSuccessAction({})).delay(2000);
        });

}