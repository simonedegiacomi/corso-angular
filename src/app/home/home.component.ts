import { Component, inject } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by title">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
     <app-movie-card *ngFor="let movie of movies" [movie]="movie"></app-movie-card>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly movieService = inject(MovieService)
  movies: Movie[];

  constructor() {
    this.movies = this.movieService.getAllMovies();
  }

}
