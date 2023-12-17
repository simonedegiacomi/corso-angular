import { Component } from '@angular/core';
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
  movie: Movie =  {
    "id": 0,
    "title": "Interstellar",
    "year": "2014",
    "releaseDate": "07 Nov 2014",
    "runtimeMinutes": 169,
    "genre": "Adventure, Drama, Sci-Fi",
    "director": "Christopher Nolan",
    "plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "poster":
    "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    "imdbRating": 8.7
  };

}
