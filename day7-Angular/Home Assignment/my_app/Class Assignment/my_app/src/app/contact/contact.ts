import { Component } from '@angular/core';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  imports: [MatInput,MatLabel,MatFormField,MatError],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {}
