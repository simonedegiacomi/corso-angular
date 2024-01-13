import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReviewService } from './review.service';



@NgModule({
  declarations: [
    ReviewFormComponent,
  ],
  providers: [
    ReviewService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReviewFormComponent
  ]
})
export class ReviewModule { }
