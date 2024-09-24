import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/homepage/home-page/home-page.component';
import { LoginPageComponent } from './pages/loginpage/login-page/login-page.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'login', component: LoginPageComponent}
];
