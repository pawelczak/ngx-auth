import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    login(username: string, password: string): boolean {
        return Math.random() > 0.5;
    }

}