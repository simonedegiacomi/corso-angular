import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <div class="login-component">
      <form [formGroup]="loginForm" (ngSubmit)="handleLogin()">
        <div>
          <label for="username">Username: </label>
          <input id="username" type="text" formControlName="username" />
          <span *ngIf="loginForm.dirty && loginForm.get('username')!.invalid"
            >Inserisci lo username</span
          >
        </div>

        <div>
          <label for="password">Password: </label>
          <input id="password" type="password" formControlName="password" />
          <span *ngIf="loginForm.dirty && loginForm.get('password')!.invalid"
            >Inserisci la password</span
          >
        </div>

        <button type="submit" class="primary">Login</button>
      </form>
    </div>
  `,
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    },
    {
      updateOn: 'submit',
    },
  );

  authService = inject(AuthService);
  router = inject(Router);

  handleLogin() {
    if (!this.loginForm.valid) {
      return;
    }

    this.loginForm.disable();
    this.authService
      .login(this.loginForm.value.username!, this.loginForm.value.password!)
      .then(() => {
        this.router.navigateByUrl('');
      })
      .catch((err) => {
        alert(err.message);
      })
      .finally(() => {
        this.loginForm.enable();
      });
  }
}
