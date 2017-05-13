// 3d party imports
import { Component } from '@angular/core';
import { AuthStateService } from '../auth/store/auth-state.service';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',

})
export class HomeComponent {


    constructor(private authStateService: AuthStateService) {}

    logout() {
        this.authStateService.logout();
    }
}
