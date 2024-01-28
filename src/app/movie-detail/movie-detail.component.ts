import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReviewService } from '../review/review.service';
import { ReviewModule } from '../review/review.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [ReactiveFormsModule, ReviewModule, CommonModule],
  template: `
    <article>
      <img
        class="movie-poster"
        [src]="movie?.poster"
        i18n-title
        title="Poster"
      />
      <section>
        <h2>{{ movie?.title }}</h2>
        <h3>{{ movie?.director }}</h3>
        <p>{{ movie?.plot }}</p>
      </section>
      <section class="data">
        <h3 i18n>About this movie</h3>
        <ul>
          <li i18n>Year: {{ movie?.year }}</li>
          <li><ng-container i18n>Genre:</ng-container> {{ movie?.genre }}</li>
          <li i18n>Release date: {{ movie?.releaseDate | date }}</li>
          <li i18n="Duration of the movie in minutes">
            Duration: {{ movie?.runtimeMinutes }} min
          </li>
          <li i18n>IMDB rating: {{ movie?.imdbRating | number }} / 10</li>
          <li i18n>
            Production budget:
            {{ movie?.productionBudget | currency: movie?.budgetCurrency }}
          </li>
        </ul>
      </section>

      <section class="movie-insert-review">
        <h2 i18n>Add your review</h2>

        <app-review-form></app-review-form>
      </section>
    </article>
  `,
  styleUrl: './movie-detail.component.css',
})
export class MovieDetailComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly movieService = inject(MovieService);
  movie: Movie | null = null;

  constructor() {
    const movieId = parseInt(this.route.snapshot.params['id']);
    this.movieService.getMovieById(movieId).then((movie) => {
      this.movie = movie;
    });
  }
}
