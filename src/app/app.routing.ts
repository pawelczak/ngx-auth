// 3d party imports
import { RouterModule, Routes } from '@angular/router';

// app imports
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(routes);
