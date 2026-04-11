import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-adduser',
  imports: [FormsModule],
  templateUrl: './adduser.html',
  styleUrl: './adduser.css',
})
export class Adduser {
  userdata = {
    name: '',
    age: null,
    image: ''
  };

  userservice = inject(UserService);

  handleSubmit() {
    if (this.userdata.name && this.userdata.age && this.userdata.image) {
      console.log("form submitted", this.userdata);
      this.userservice.addUser(this.userdata);
      this.userdata = {
        name: '',
        age: null,
        image: ''
      };
    } else {
      alert('Please fill in all fields');
    }
  }
}
