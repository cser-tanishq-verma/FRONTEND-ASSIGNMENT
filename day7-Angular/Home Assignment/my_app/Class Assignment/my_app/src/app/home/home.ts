import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-home',
  imports: [MatTableModule,MatButton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  displayedColumns: string[] = ['id', 'name', 'age', 'qualification'];
  data = [{
    id:1,
    name:"Gautam",
    age:22,
    qualification:"UG"
  },
{
    id:2,
    name:"Anant",
    age:22,
    qualification:"UG"
  },
{
    id:3,
    name:"Naivdya",
    age:22,
    qualification:"UG"
  },]
}
