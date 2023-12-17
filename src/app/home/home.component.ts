import { Component, inject } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MovieCardComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by title" name="filter" [(ngModel)]="filterText">
        <button
          class="primary"
          type="button"
          (click)="search()">
          Search
        </button>
      </form>
    </section>
    <p class="search-text" *ngIf="searched">Results for "{{ searchedText }}"</p>
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

  movies: Movie[] = [];

  filteredMovies: Movie[] = [];
  filterText: string = "";
  searched: boolean = false;
  searchedText: string = "";



  constructor() {
    this
      .movieService
      .getAllMovies()
      .then(movies => {
        this.movies = movies;
        this.filteredMovies = this.movies;

        const filterFromRoute = this.route.snapshot.queryParamMap.get("filter");
        if (filterFromRoute) {
          this.filterText = filterFromRoute;
          this.search();
        }
      });
  }

  search() {
    this.filteredMovies = this
      .movies
      .filter(m => {
        return m.title.toLowerCase().includes(this.filterText.toLocaleLowerCase())
      });
    this.searched = this.filterText.length > 0;
    this.searchedText = this.filterText;
    this.router.navigate([], {
      queryParams: {
        filter: this.filterText
      }
    });
  }

}
