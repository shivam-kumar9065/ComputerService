import { Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
    {path:"Contact-us",component:ContactPageComponent},
    {path:'',component:LandingPageComponent},
    {path:"home",component:LandingPageComponent},
];
