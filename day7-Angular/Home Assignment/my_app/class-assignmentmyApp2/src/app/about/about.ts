import { Component } from '@angular/core';
import { CardView } from '../components/card-view/card-view';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CardView,NgFor],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class ABOUT {
  students = [
    { name: 'Tanishq', rollNo: 1, branch: 'Computer Science' },
    { name: 'Gaurav', rollNo: 2, branch: 'Mechanical' },
    { name: 'Tanya', rollNo: 3, branch: 'Electrical' }
  ];
}
