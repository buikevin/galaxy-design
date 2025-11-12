import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedValue = false;

  constructor(private router: Router) {
    const stored = localStorage.getItem('isAuthenticated');
    this.isAuthenticatedValue = stored === 'true';
  }

  get isAuthenticated(): boolean {
    return this.isAuthenticatedValue;
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'Abc123@') {
      this.isAuthenticatedValue = true;
      localStorage.setItem('isAuthenticated', 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticatedValue = false;
    localStorage.removeItem('isAuthenticated');
    this.router.navigate(['/login']);
  }
}
