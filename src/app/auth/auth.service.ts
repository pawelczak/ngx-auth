import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    login(username: string, password: string): Observable<boolean> {

        if (username === 'admin' && password === 'admin') {
            return Observable.of(true);
        } else {
            return Observable.of(false);
        }
    }

}