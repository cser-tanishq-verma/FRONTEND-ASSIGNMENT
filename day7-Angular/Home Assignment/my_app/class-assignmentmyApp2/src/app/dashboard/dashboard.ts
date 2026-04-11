import { Component, inject, Inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Adduser } from './adduser/adduser';
import { Displayuser } from './displayuser/displayuser';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet,Adduser,Displayuser,RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  route= inject(Router);
  navigatetohome(){
    this.route.navigateByUrl("");
  }
}
