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
            // .filter(user => user.username === username)
            // .map(user => user.password === password)
            .subscribe((users) => {

                let user = users.find((user: any) => user.username === username);

                isLogged.next(user && user.password === password);
                isLogged.complete();
                subscription.unsubscribe();
            });

        return isLogged.asObservable();
    }

}