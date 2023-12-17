import { Component, Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  template: `
    <section class="movie-card">
      <img class="movie-poster" [src]="movie.poster">
      <h2 class="movie-title">{{ movie.title }}</h2>
      <p class=movie-genre>{{ movie.year }} - {{ movie.genre }}</p>
    </section>
  `,
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input({required:true})
  movie!: Movie;
}
