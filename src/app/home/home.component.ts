import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MovieCardComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by title">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
     <app-movie-card></app-movie-card>
    </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
