import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MockApiService } from './mock-api.service';
import { AuthUser } from '../data/users';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'employee';
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private api: MockApiService) {}

  login(email: string, password: string): Observable<User> {
    return new Observable((observer) => {
      this.api.authenticate(email, password).subscribe((user) => {
        if (!user) {
          observer.error(new Error('Invalid login credentials'));
          return;
        }

        if (user.role !== 'admin') {
          observer.error(new Error('Only admin users can log in'));
          return;
        }

        const authUser: User = {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role
        };

        localStorage.setItem('auth_token', 'mock-jwt-token-' + Date.now());
        localStorage.setItem('current_user', JSON.stringify(authUser));
        this.isAuthenticatedSubject.next(true);
        this.currentUserSubject.next(authUser);

        observer.next(authUser);
        observer.complete();
      });
    });
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('current_user');
    this.isAuthenticatedSubject.next(false);
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return this.hasToken();
  }

  getCurrentUser(): User | null {
    return this.getUserFromStorage();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  private getUserFromStorage(): User | null {
    const userJson = localStorage.getItem('current_user');
    return userJson ? JSON.parse(userJson) : null;
  }
}
