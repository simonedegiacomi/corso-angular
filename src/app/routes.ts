import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { LoginComponent } from './login/login.component';
import { isLoggedInGuard } from './is-logged-in.guard';

export const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Movies - Home',
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent,
    title: 'Movie',
    canActivate: [isLoggedInGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
