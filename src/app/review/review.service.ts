import { Injectable } from '@angular/core';
import { DynamicConfigService } from '../dynamic-config.service';
import { client } from '../http-client';

@Injectable()
export class ReviewService {
  constructor(private readonly dynamicConfigService: DynamicConfigService) {}

  async createReview(nickname: string, review: string) {
    await client.post(`${this.dynamicConfigService.baseUrl}/reviews`, {
      nickname,
      review,
    });
  }
}
