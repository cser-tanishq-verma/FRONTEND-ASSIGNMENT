import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [NgFor,MatButton,MatTable],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HOME {
  students = [
    { name: 'John', rollNo: 1, age: 20, qualification: 'B.Tech' },
    { name: 'Jane', rollNo: 2, age: 22, qualification: 'M.Tech' },
    { name: 'Bob', rollNo: 3, age: 21, qualification: 'B.A' }
  ];

}
