import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AuthState } from './auth-state';
import { AppState, getAuthState } from '../../app.reducers';
import { LoginAction, LogoutAction } from './actions';


@Injectable()
export class AuthStateService {

    constructor(private store$: Store<AppState>) {}

    getState(): Observable<AuthState> {
        return this.store$.select(getAuthState);
    }

    login(username: string, password: string): void {
        this.store$.dispatch(new LoginAction({username, password}));
    }

    logout() {
        this.store$.dispatch(new LogoutAction({}));
    }

}
