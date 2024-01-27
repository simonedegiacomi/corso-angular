import { Injectable } from '@angular/core';
import { DynamicConfigService } from './dynamic-config.service';
import { client } from './http-client';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private readonly dynamicConfigService: DynamicConfigService) {}

  async getAllMovies(): Promise<Movie[]> {
    const response = await client.get(
      `${this.dynamicConfigService.baseUrl}/movies`,
    );
    return response.data;
  }

  async getMovieById(id: number): Promise<Movie | null> {
    const response = await client.get(
      `${this.dynamicConfigService.baseUrl}/movies/${id}`,
    );
    return response.data;
  }
}
