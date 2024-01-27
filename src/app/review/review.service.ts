import { Injectable } from '@angular/core';
import { client } from '../http-client';

@Injectable()
export class ReviewService {
  constructor() {}

  async createReview(nickname: string, review: string) {
    await client.post(`/reviews`, {
      nickname,
      review,
    });
  }
}
