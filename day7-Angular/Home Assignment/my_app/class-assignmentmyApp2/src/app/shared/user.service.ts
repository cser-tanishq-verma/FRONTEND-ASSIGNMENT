import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  name: string;
  age: number | null;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = new BehaviorSubject<User[]>([]);
  public users$ = this.users.asObservable();

  addUser(user: User) {
    const currentUsers = this.users.value;
    this.users.next([...currentUsers, user]);
  }

  getUsers() {
    return this.users.value;
  }

  deleteUser(index: number) {
    const currentUsers = this.users.value;
    currentUsers.splice(index, 1);
    this.users.next([...currentUsers]);
  }
}
