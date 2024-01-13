import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User | null = null;

  isLoggedIn() {
    return this.user !== null;
  }

  login(username: string, password: string): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password === "pass") {
          this.user = { username };
          resolve(this.user);
        } else {
          reject({ message: "Nome utente o password errati "});
        }
      }, 1000)
    });
  }
}

interface User {
  username: string;
}

