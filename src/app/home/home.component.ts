import { Component, inject } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    <p class="search-text" *ngIf="searched">Results for "{{ filterText }}"</p>
    <section class="results">
     <app-movie-card *ngFor="let movie of filteredMovies" [movie]="movie"></app-movie-card>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly route: ActivatedRoute = inject(ActivatedRoute);
  private readonly router: Router = inject(Router);

  private readonly movieService = inject(MovieService)
  
  movies: Movie[];

  filteredMovies: Movie[];
  filterText: string = "";
  searched: boolean = false;

  

  constructor() {
    this.movies = this.movieService.getAllMovies();
    this.filteredMovies = this.movies;

    const filterFromRoute = this.route.snapshot.queryParamMap.get("filter");
    if (filterFromRoute) {
      this.search(filterFromRoute);
    }
  }

  search(filterTextValue: string) {
    this.filterText = filterTextValue;
    this.filteredMovies = this
      .movies
      .filter(m => {
        return m.title.toLowerCase().includes(filterTextValue.toLocaleLowerCase())
      });
    this.searched = this.filterText.length > 0;
    if (this.searched) {
      this.router.navigate([], {
        queryParams: {
          filter: this.filterText
        }
      });
    }
  }

}
