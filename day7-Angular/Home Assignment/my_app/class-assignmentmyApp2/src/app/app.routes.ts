import { Routes } from '@angular/router';
import { HOME } from './home/home';
import { CONTACT } from './contact/contact';
import { ABOUT } from './about/about';
import { Dashboard } from './dashboard/dashboard';
import { Adduser } from './dashboard/adduser/adduser';
import { Displayuser } from './dashboard/displayuser/displayuser';

export const routes: Routes = [
    {
        path:"",
        component: HOME
    },
    {
        path:"contact",
        component: CONTACT
    },
    {
        path:"about",
        component: ABOUT
    },
    {
        path:"dashboard",
        component: Dashboard,
        children:[
            {
                path:"",
                component: Adduser

            },
            {
                path:"displayuser",
                component: Displayuser
            }
        ]

    }


];
