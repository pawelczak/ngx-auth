// 3d party imports
import { RouterModule, Routes } from '@angular/router';

// app imports
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes=[
    {path: '**', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

export const routing=RouterModule.forRoot(routes);
