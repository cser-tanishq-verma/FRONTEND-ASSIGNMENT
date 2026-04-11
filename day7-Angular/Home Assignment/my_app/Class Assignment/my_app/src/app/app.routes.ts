import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Dash } from './dash/dash';
import { Adduser } from './dash/adduser/adduser';
import { Displayuser } from './dash/displayuser/displayuser';

export const routes: Routes = [
    {
        path:"",
        component: Home
    },{
        path:"contact",
        component:Contact
    },{
        path:"about",
        component:About
    },{
        path:"dash",
        component: Dash,
        children:[
            {
                path:"",
                component:Adduser
            },{
                path:'showuser',
                component:Displayuser
            }
        ]
    }
];
