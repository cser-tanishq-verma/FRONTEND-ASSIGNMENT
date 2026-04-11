import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Nav } from './shared/nav/nav';
import { About } from './about/about';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Dash } from './dash/dash';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Nav, About,Home,Contact,Dash],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my_app');
}
