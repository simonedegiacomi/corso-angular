import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Movie } from '../movie';
import { DxButtonModule, DxPopupModule } from 'devextreme-angular';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-movie-popup',
  standalone: true,
  imports: [DxPopupModule, ReactiveFormsModule, DxButtonModule],
  template: `
    <dx-popup
      [visible]="visible"
      (visibleChange)="changeVisible($event)"
      contentTemplate="popup-content"
    >
      <div *dxTemplate="let data of 'popup-content'">
        <form [formGroup]="editForm" (ngSubmit)="editMovie()">
          <label for="title">Title: </label>
          <input id="title" type="text" formControlName="title" />
        </form>

        <dx-button (onClick)="editMovie()">Save</dx-button>
        <dx-button (onClick)="changeVisible(false)">Cancel</dx-button>
      </div>
    </dx-popup>
  `,
  styleUrl: './edit-movie-popup.component.css',
})
export class EditMoviePopupComponent implements OnChanges {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input({ required: true }) movie!: Movie;
  @Output() movieChanged = new EventEmitter<Movie>();

  editForm = new FormGroup({
    title: new FormControl(''),
  });

  changeVisible(visible: boolean): void {
    // this.visible = visible;
    this.visibleChange.emit(visible);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    this.editForm.setValue({
      title: this.movie.title,
    });
  }

  editMovie() {
    const editedMovie = { ...this.movie };
    editedMovie.title = this.editForm.value.title!;
    this.movieChanged.emit(editedMovie);
    this.changeVisible(false);
  }
}
