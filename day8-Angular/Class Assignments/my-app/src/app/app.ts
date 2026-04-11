import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './shared/nav/nav';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Dash } from './dash/dash';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Home, Contact, About, Dash],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}
