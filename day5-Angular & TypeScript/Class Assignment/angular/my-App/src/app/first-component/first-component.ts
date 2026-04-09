import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent {
  name: string = "Tanishq";
  style: string = `color: red`;
  isHidden: boolean = false;
  currentIndex: number = 0;
  names: string[] = ["Tanishq", "Anshul", "Satyarth", "Shivam", "Yash"];
  ipVal: string = '';
  click(){
    this.isHidden = !this.isHidden; 
  }
  prev(){
    this.currentIndex = (this.currentIndex - 1 + this.names.length) % this.names.length;
  }

  next(){
    this.currentIndex = (this.currentIndex + 1) % this.names.length;
  }

  get currentName(): string {
    return this.names[this.currentIndex];
  }

  inputValchange(str: string){
    console.log(str);
    this.ipVal=str;
  }
}
