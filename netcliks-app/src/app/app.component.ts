import { Component } from '@angular/core';
import { Film } from './models/film.model';
import { FILMS } from './constants/films.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  public films: Film[] = FILMS;
}
