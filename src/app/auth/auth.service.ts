import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class AuthService {

    private users: FirebaseListObservable<any>;

    constructor(private db: AngularFireDatabase) {
        this.users = this.db.list('/users');
    }

    login(username: string, password: string): Observable<boolean> {

        let isLogged = new Subject();

        let subscription =
            this.users
            .subscribe((users) => {
                let user = users.find((user: any) => user.username === username);

                if (user && user.password === password) {
                    isLogged.next(true);
                    isLogged.complete();
                } else {
                    isLogged.error('Login and password doesn\'t match');
                }
                subscription.unsubscribe();
            });

        return isLogged.asObservable();
    }

    logout(): Observable<boolean> {
        return Observable.of(true);
    }

}