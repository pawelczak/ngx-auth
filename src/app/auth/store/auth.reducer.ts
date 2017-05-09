import { AuthState } from './auth-state';
import * as authActions from './actions';

const defaultState = new AuthState();

export function authReducer(state: AuthState = defaultState, action: authActions.Actions): AuthState {

    switch (action.type) {

        case authActions.ActionTypes.INIT_STATE:
            return Object.assign(new AuthState(), action.payload);

        case authActions.ActionTypes.LOGIN:
            return Object.assign(new AuthState(), {}, {fetching: true});

        case authActions.ActionTypes.LOGIN_SUCCESS:
            return Object.assign(new AuthState(), {}, {fetching: false});

        default:
            return state;
    }
}
