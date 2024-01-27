import { Injectable } from '@angular/core';
import { client } from './http-client';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor() {}

  async getAllMovies(): Promise<Movie[]> {
    const response = await client.get(`/movies`);
    return response.data;
  }

  async getMovieById(id: number): Promise<Movie | null> {
    const response = await client.get(`/movies/${id}`);
    return response.data;
  }
}
