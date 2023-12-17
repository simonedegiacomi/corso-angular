import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

export const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Movies - Home"
    },
    {
        path: 'movie/:id',
        component: MovieDetailComponent,
        title: "Movie"
    }
];

