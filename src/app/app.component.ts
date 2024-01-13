import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main *ngIf="isLoggedIn(); else notLoggedIn">
      <header class="brand-name">
        <h2><img src="assets/movies-icon.png" class="brand-logo"/> Movies</h2>
        <button>Logout</button>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>

    <ng-template #notLoggedIn>
      <router-outlet></router-outlet>
    </ng-template>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies';

  authService = inject(AuthService);

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
