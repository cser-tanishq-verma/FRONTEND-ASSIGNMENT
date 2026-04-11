import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-displayuser',
  imports: [CommonModule],
  templateUrl: './displayuser.html',
  styleUrl: './displayuser.css',
})
export class Displayuser {
  userservice = inject(UserService);
  users$ = this.userservice.users$;
}
