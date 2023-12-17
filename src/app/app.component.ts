import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Welcome to {{title}}!</h1>

    
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movies';
}
