import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { APIDashbordComponent } from './api-dashbord/api-dashbord.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PalestineHistoryComponent } from './palestine-history/palestine-history.component'; 
import { OTPComponent } from './otp/otp.component'; 

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'registration',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: "form",
        component: ReactiveFormsComponent
    },
    {
        path: "apidashbord",
        component: APIDashbordComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path:"registration",
        component:RegistrationComponent
    },
    {
        path:"palestine",
        component:PalestineHistoryComponent
    },
    {
        path:"otp",
        component:OTPComponent
    }

];
