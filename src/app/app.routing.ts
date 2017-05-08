// 3d party imports
import { RouterModule, Routes } from '@angular/router';

// app imports
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './auth/login/login.component/login.component';


const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
