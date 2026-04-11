import { Component, inject, signal } from '@angular/core';
import { Http as HttpService } from '../services/http';
import { GithubUsers } from '../../types/githubUsers';
import { JsonPipe } from '@angular/common';
import { platziuserstype } from '../../types/platziusers';
@Component({
  selector: 'app-http',
  imports: [JsonPipe],
  templateUrl: './http.html',
  styleUrl: './http.css',
})
export class Http {
  httpData = inject(HttpService);
  userData = signal<GithubUsers[]>([]);
  ngOnInit() {
    this.httpData.getUsers().subscribe({
      next: (data: any) => {
        console.log(data);
        this.userData.set(data);
      },
      error:(errmsg: any) => {
        console.log(errmsg);
      },
      complete:() => {
        console.log("data fetching completed");
      }

    });
  }

  user:platziuserstype={
    name:'Tanishq',
    email:'tanishq@gmail.com',
    password:'123456789',
    avatar:'https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D'
  }

  addUser(){
    this.httpData.addUsers(this.user).subscribe({
      next:(data)=>{
        console.log(data);
      },
      error:(errmsg) => {
        console.log(errmsg);
      },
      complete:() => {
        console.log("data post completed");
      }
    });
  }
  loginUserC = {
    email: 'john@mail.com',
    password: 'changeme'
  }
  login(){
    this.httpData.loginuser(this.loginUserC).subscribe({
      next: (data)=>{
        console.log("Login successful:", data);
      },
      error:(errmsg)=>{
        console.log("Login error:", errmsg);
      },
      complete:()=>{
        console.log("login complete");
      }
    })
  }
}