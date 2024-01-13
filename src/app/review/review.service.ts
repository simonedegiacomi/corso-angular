import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class ReviewService {
  private readonly client = axios.create();

  constructor() { }

  async createReview(nickname: string, review: string) {
    await this.client.post("http://localhost:3000/reviews", {
      nickname, review
    });
  }
}
