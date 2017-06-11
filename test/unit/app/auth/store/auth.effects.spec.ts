import { TestBed } from '@angular/core/testing';
import { EffectsTestingModule, EffectsRunner } from '@ngrx/effects/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';

import { AuthEffects } from '../../../../../src/app/auth/store/auth.effects';
import { AuthService } from '../../../../../src/app/auth/auth.service';
import {
    LoginSuccessAction, LoginAction, LoginFailureAction,
    LogoutAction, LogoutFailureAction, LogoutSuccessAction
} from '../../../../../src/app/auth/store/actions';


describe('AuthEffects', () => {


    beforeEach(() => TestBed.configureTestingModule({
        imports: [
            EffectsTestingModule,
            RouterTestingModule
        ],
        providers: [
            AuthEffects,
            {
                provide: AuthService,
                useValue: jasmine.createSpyObj('authService', ['login', 'logout'])
            }
        ]
    }));


    let effectsRunner: EffectsRunner,
        authEffects: AuthEffects,
        authService: any;


    beforeEach(() => {
        effectsRunner = TestBed.get(EffectsRunner);
        authEffects = TestBed.get(AuthEffects);
        authService = TestBed.get(AuthService);
    });

    describe('login', () => {

        it ('should return LoginSuccessAction, on correct credentials', () => {

            // given
            authService.login.and.returnValue(Observable.of(true));

            // when
            effectsRunner.queue(new LoginAction({username: 'username', password: 'password'}));

            // then
            authEffects
                .login$
                .subscribe((result) => {
                    expect(result).toEqual(new LoginSuccessAction({}));
                })

        });

        it ('should return LoginFailureAction, on incorrect credentials', () => {

            // given
            authService.login.and.returnValue(Observable.throw({}));

            // when
            effectsRunner.queue(new LoginAction({username: 'false', password: 'false'}));

            // then
            authEffects
                .login$
                .subscribe((result) => {
                    expect(result).toEqual(new LoginFailureAction({}));
                });
        });

        xit ('should redirect to home page after successful login', () => {

            // when
            effectsRunner.queue(new LoginSuccessAction({}));

            // then
            authEffects
                .loginRedirec$
                .subscribe((result) => {
                    expect(result).toEqual(new LoginFailureAction({}));
                });
        })
    });

    describe('logout', () => {

        it ('should return LogoutSuccessAction, on successful logout', () => {

            // given
            authService.logout.and.returnValue(Observable.of(true));

            // when
            effectsRunner.queue(new LogoutAction());

            // then
            authEffects
                .logout$
                .subscribe((result) => {
                    expect(result).toEqual(new LogoutSuccessAction({}));
                });
        });

        it ('should return LogoutFailureAction, on failed logout', () => {

            // given
            authService.logout.and.returnValue(Observable.throw({}));

            // when
            effectsRunner.queue(new LogoutAction());

            // then
            authEffects
                .logout$
                .subscribe((result) => {
                    expect(result).toEqual(new LogoutFailureAction({}));
                });
        });

        xit ('should redirect to login page after successful logout', () => {

            // when
            effectsRunner.queue(new LogoutSuccessAction({}));

            // then
            authEffects
                .logoutRedirec$
                .subscribe((result) => {
                    // expect(result).toEqual(new LoginFailureAction({}));
                });
        })
    })

});