import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DemoEmployee, DEMO_EMPLOYEES } from '../data/employees';
import { AuthUser, MOCK_USERS } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class MockApiService {
  constructor() {}

  getEmployees(): Observable<DemoEmployee[]> {
    return of(DEMO_EMPLOYEES).pipe(delay(300));
  }

  authenticate(email: string, password: string): Observable<AuthUser | null> {
    const user = MOCK_USERS.find(u => u.email === email && u.password === password) ?? null;
    return of(user);
  }
}
