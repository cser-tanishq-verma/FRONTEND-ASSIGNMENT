import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
