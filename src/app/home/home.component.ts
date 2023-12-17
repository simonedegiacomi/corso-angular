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
        <input type="text" placeholder="Filter by title" #filter>
        <button
          class="primary"
          type="button"
          (click)="search(filter.value)">
          Search
        </button>
      </form>
    </section>
    <section class="results">
     <app-movie-card *ngFor="let movie of filteredMovies" [movie]="movie"></app-movie-card>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly movieService = inject(MovieService)
  
  movies: Movie[];
  filteredMovies: Movie[];

  constructor() {
    this.movies = this.movieService.getAllMovies();
    this.filteredMovies = this.movies;
  }

  search(filterTextValue: string) {
    this.filteredMovies = this
      .movies
      .filter(m => {
        return m.title.toLowerCase().includes(filterTextValue.toLocaleLowerCase())
      });
  }

}
