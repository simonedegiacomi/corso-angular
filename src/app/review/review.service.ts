import { Injectable } from '@angular/core';
import { baseUrl } from '../config';
import { client } from '../http-client';

@Injectable()
export class ReviewService {

  constructor() { }

  async createReview(nickname: string, review: string) {
    await client.post(`${baseUrl}/reviews`, {
      nickname, review
    });
  }
}
