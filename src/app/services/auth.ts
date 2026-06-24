import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  private currentUserSubject = new BehaviorSubject<User | null>(this.getUserFromStorage());

  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {}

  login(email: string, password: string): Observable<any> {
    // Simulate API call - replace with actual API integration
    return new Observable((observer) => {
      setTimeout(() => {
        const mockUser: User = {
          id: '1',
          email,
          name: email.split('@')[0],
          role: 'admin'
        };
        
        // Store in localStorage
        localStorage.setItem('auth_token', 'mock-jwt-token-' + Date.now());
        localStorage.setItem('current_user', JSON.stringify(mockUser));
        
        this.isAuthenticatedSubject.next(true);
        this.currentUserSubject.next(mockUser);
        
        observer.next({ success: true, user: mockUser });
        observer.complete();
      }, 500);
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
