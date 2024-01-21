import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReviewService } from '../review/review.service';
import { ReviewModule } from '../review/review.module';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [ReactiveFormsModule, ReviewModule],
  template: `
    <article>
      <img class="movie-poster" [src]="movie?.poster" />
      <section>
        <h2>{{ movie?.title }}</h2>
        <h3>{{ movie?.director }}</h3>
        <p>{{ movie?.plot }}</p>
      </section>
      <section class="data">
        <h3>About this movie</h3>
        <ul>
          <li>Year: {{ movie?.year }}</li>
          <li>Genre: {{ movie?.genre }}</li>
          <li>Release date: {{ movie?.releaseDate }}</li>
          <li>Duration: {{ movie?.runtimeMinutes }} min</li>
          <li>IMDB rating: {{ movie?.imdbRating }} / 10</li>
        </ul>
      </section>

      <section class="movie-insert-review">
        <h2>Add your review</h2>

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
