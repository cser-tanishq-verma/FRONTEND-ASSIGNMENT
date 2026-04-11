import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../services/user';


@Component({
  selector: 'app-adduser',
  imports: [FormsModule],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css',
})
export class Adduser {
  name = '';
  role = '';
  image = '';
  userService = inject(User);
  handleSubmit() {

    const user = {
      name: this.name,
      role: this.role,
      image: this.image
    };

    console.log(user);
    this.userService.addUser(user);

    // reset form
    this.name = '';
    this.role = '';
    this.image = '';
  }
}
