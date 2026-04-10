import { Component, inject } from '@angular/core';
import { Childcomp } from './childcomp/childcomp';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Service } from '../../services/service';

@Component({
  selector: 'app-first-component',
  imports: [Childcomp,NgClass,NgIf,NgFor],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
  providers: [Service]
})
export class FirstComponent {
  // name: string = "Tanishq";
  // style: string = `color: red`;
  // isHidden: boolean = false;
  // currentIndex: number = 0;
  // names: string[] = ["Tanishq", "Anshul", "Satyarth", "Shivam", "Yash"];
  // ipVal: string = '';
  // click(){
  //   this.isHidden = !this.isHidden; 
  // }
  // prev(){
  //   this.currentIndex = (this.currentIndex - 1 + this.names.length) % this.names.length;
  // }

  // next(){
  //   this.currentIndex = (this.currentIndex + 1) % this.names.length;
  // }

  // get currentName(): string {
  //   return this.names[this.currentIndex];
  // }

  // inputValchange(str: string){
  //   console.log(str);
  //   this.ipVal=str;
  // }

  // name: string = "Tanishq";
  // d:string = '';
  // handleData(data:any) {
  //   this.d = data;
  //   console.log(data);
  // }

  // applyClass:boolean=false
  //    shouldApplyClass(){
  //     this.applyClass = !this.applyClass;
  //   }

  // arr:number[]=[1,2,3,4,5];
  // users = [
  //   { id: 1, name: 'Tanishq' },
  //   { id: 2, name: 'Gaurav' },
  //   { id: 3, name: 'Mohit' }
  // ];


  constructor(protected data: Service) {
    this.data=data;
  }
  service=inject(Service);
}
