import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { DynamicConfigService } from './dynamic-config.service';
import { client } from './http-client';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly authClient = axios.create();
  private readonly router = inject(Router);

  user: User | null = null;

  constructor(private readonly dynamicConfigservice: DynamicConfigService) {
    client.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response?.status === 401) {
          this.user = null;
          this.router.navigateByUrl('/login');
        }
        throw error;
      },
    );
  }

  async isLoggedIn() {
    if (this.user !== null) {
      return true;
    }

    try {
      const response = await this.authClient.get(
        `${this.dynamicConfigservice.baseUrl}/status`,
      );
      this.user = response.data;
      return true;
    } catch {
      return false;
    }
  }

  async login(username: string, password: string): Promise<User> {
    try {
      const response = await this.authClient.post(
        `${this.dynamicConfigservice.baseUrl}/login`,
        {
          username,
          password,
        },
      );
      this.user = response.data;
      return this.user!;
    } catch (e: any) {
      if (e.response?.data?.message) {
        throw new Error(e.response?.data?.message);
      } else {
        throw e;
      }
    }
  }
}

interface User {
  username: string;
}
