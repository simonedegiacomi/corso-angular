import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-form',
  template: `
    <form [formGroup]="reviewForm" (ngSubmit)="submitReview()">
      <label for="nickname">Nickname: </label>
      <input id="nickname" type="text" formControlName="nickname" />

      <label for="review">Review: </label>
      <textarea id="review" rows="3" formControlName="review"></textarea>

      <button type="submit" class="primary">Send</button>
    </form>
  `,
  styleUrl: './review-form.component.css',
})
export class ReviewFormComponent {
  reviewForm = new FormGroup({
    nickname: new FormControl(''),
    review: new FormControl(''),
  });

  reviewService = inject(ReviewService);

  submitReview() {
    this.reviewService
      .createReview(
        this.reviewForm.value.nickname ?? '',
        this.reviewForm.value.review ?? '',
      )
      .then(() => {
        this.reviewForm.reset();
        alert('Review submitted!');
      });
  }
}
