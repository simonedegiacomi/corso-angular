import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';

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
  movies: Movie[] = [
    {
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
    },
    {
      "id": 1,
      "title": "Inception",
      "year": "2010",
      "releaseDate": "16 Jul 2010",
      "runtimeMinutes": 148,
      "genre": "Action, Adventure, Sci-Fi",
      "director": "Christopher Nolan",
      "plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      "poster":
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "imdbRating": 8.8
    },
    {
      "id": 2,
      "title": "The Matrix",
      "year": "1999",
      "releaseDate": "31 Mar 1999",
      "runtimeMinutes": 136,
      "genre": "Action, Sci-Fi",
      "director": "Lana Wachowski, Lilly Wachowski",
      "plot": "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
      "poster":
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "imdbRating": 8.7
    },
    {
      "id": 3,
      "title": "Back to the Future",
      "year": "1985",
      "releaseDate": "03 Jul 1985",
      "runtimeMinutes": 116,
      "genre": "Adventure, Comedy, Sci-Fi",
      "director": "Robert Zemeckis",
      "plot": "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
      "poster":
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      "imdbRating": 8.6
    },
    {
      "id": 4,
      "title": "2001: A Space Odyssey",
      "year": "1968",
      "releaseDate": "24 Jun 1970",
      "runtimeMinutes": 149,
      "genre": "Adventure, Sci-Fi",
      "director": "Stanley Kubrick",
      "plot": "The Monoliths push humanity to reach for the stars; after their discovery in Africa generations ago, the mysterious objects lead mankind on an awesome journey to Jupiter, with the help of H.A.L. 9000: the world's greatest supercomput",
      "poster":
      "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
      "imdbRating": 8.3
    },
    {
      "id": 5,
      "title": "V for Vendetta",
      "year": "2005",
      "releaseDate": "17 Mar 2006",
      "runtimeMinutes": 132,
      "genre": "Action, Drama, Sci-Fi",
      "director": "James McTeigue",
      "plot": "In a future British tyranny, a shadowy freedom fighter, known only by the alias of \"V,\" plots to overthrow it with the help of a young woman.",
      "poster":
      "https://m.media-amazon.com/images/M/MV5BOTI5ODc3NzExNV5BMl5BanBnXkFtZTcwNzYxNzQzMw@@._V1_SX300.jpg",
      "imdbRating": 8.2
    },
    {
      "id": 6,
      "title": "Star Wars",
      "year": "1977",
      "releaseDate": "25 May 1977",
      "runtimeMinutes": 121,
      "genre": "Action, Adventure, Fantasy",
      "director": "George Lucas",
      "plot": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vad",
      "poster":
      "https://i.etsystatic.com/14140434/r/il/a66d02/1502637303/il_fullxfull.1502637303_mnu2.jpg",
      "imdbRating": 8.6
    },
    {
      "id": 7,
      "title": "Jurassic Park",
      "year": "1993",
      "releaseDate": "11 Jun 1993",
      "runtimeMinutes": 127,
      "genre": "Action, Adventure, Sci-Fi",
      "director": "Steven Spielberg",
      "plot": "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      "poster":
      "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg",
  
      "imdbRating": 8.1
    },
    {
      "id": 8,
      "title": "Blade Runner",
      "year": "1982",
      "releaseDate": "25 Jun 1982",
      "runtimeMinutes": 117,
      "genre": "Action, Drama, Sci-Fi",
      "director": "Ridley Scott",
      "plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
      "poster":
      "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "imdbRating": 8.1
    }
  ];
}
