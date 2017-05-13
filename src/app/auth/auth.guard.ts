import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthStateService } from './store/auth-state.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authStateService: AuthStateService) {}

    canActivate(): Observable<boolean> {
        return this.authStateService.getState().map(state => state.isLogged);
    }

}