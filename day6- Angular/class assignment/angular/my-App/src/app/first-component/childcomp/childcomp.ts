import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childcomp',
  imports: [],
  templateUrl: './childcomp.html',
  styleUrl: './childcomp.css',
})
export class Childcomp {
  @Input() namegiven: string = '';
  @Output() data=new EventEmitter<string>();
  
  sendData(){
    this.data.emit(`Data from parent component`);
  }
}

