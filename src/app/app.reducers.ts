import { combineReducers, ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import { authReducer as auth }  from './auth/store/auth.reducer';

import { AuthState } from './auth/store/auth-state';

declare var process: any;

export interface AppState {
    auth: AuthState
}

export const reducers = {
    auth: auth
};

const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = compose(combineReducers)(reducers);

export function reducer(state: any, action: any) {
    if (process.env.ENV === 'production') {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export const getAuthState = (state: AppState) => state.auth;
