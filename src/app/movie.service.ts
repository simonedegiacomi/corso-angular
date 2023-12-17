import { Injectable } from '@angular/core';
import { Movie } from './movie';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly client = axios.create();

  constructor() { }

  async getAllMovies(): Promise<Movie[]> {
    const response = await this.client.get("http://localhost:3000/movies")
    return response.data;
  }

  async getMovieById(id: number): Promise<Movie | null> {
    const response = await this.client.get(`http://localhost:3000/movies/${id}`)
    return response.data;
  }
}
