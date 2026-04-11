import { Component } from '@angular/core';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  imports: [MatFormFieldModule,MatInput,MatError],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class CONTACT {}
