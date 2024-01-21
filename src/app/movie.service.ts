import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { client } from './http-client';
import { baseUrl } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  async getAllMovies(): Promise<Movie[]> {
    const response = await client.get(`${baseUrl}/movies`)
    return response.data;
  }

  async getMovieById(id: number): Promise<Movie | null> {
    const response = await client.get(`${baseUrl}/movies/${id}`)
    return response.data;
  }
}
