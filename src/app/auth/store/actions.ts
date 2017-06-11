import { Action } from '@ngrx/store'

const AUTH_PREFIX = '[Authorization]';
export const ActionTypes = {
    INIT_STATE: `${AUTH_PREFIX}INIT_STATE`,
    LOGIN: `${AUTH_PREFIX}LOGIN`,
    LOGIN_SUCCESS: `${AUTH_PREFIX}LOGIN_SUCCESS`,
    LOGIN_FAILURE: `${AUTH_PREFIX}LOGIN_FAILURE`,
    LOGOUT: `${AUTH_PREFIX}LOGOUT`,
    LOGOUT_SUCCESS: `${AUTH_PREFIX}LOGOUT_SUCCESS`,
    LOGOUT_FAILURE: `${AUTH_PREFIX}LOGOUT_FAILURE`
};

export class InitStateAction implements Action {
    type = ActionTypes.INIT_STATE;

    constructor(public payload: any) {}
}

export class LoginAction implements Action {
    type = ActionTypes.LOGIN;

    constructor(public payload: any) {}
}

export class LoginSuccessAction implements Action {
    type = ActionTypes.LOGIN_SUCCESS;

    constructor(public payload: any) {}
}

export class LoginFailureAction implements Action {
    type = ActionTypes.LOGIN_FAILURE;

    constructor(public payload: any) {}
}

export class LogoutAction implements Action {
    type = ActionTypes.LOGOUT;

    constructor(public payload?: any) {}
}

export class LogoutSuccessAction implements Action {
    type = ActionTypes.LOGOUT_SUCCESS;

    constructor(public payload: any) {}
}

export class LogoutFailureAction implements Action {
    type = ActionTypes.LOGOUT_FAILURE;

    constructor(public payload: any) {}
}

export type Actions = InitStateAction
                        | LoginAction
                        | LoginSuccessAction
                        | LoginFailureAction
                        | LogoutAction
                        | LogoutSuccessAction
                        | LogoutFailureAction;
