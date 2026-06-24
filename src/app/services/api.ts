import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiBaseUrl = 'http://localhost:8080/api'; // Replace with actual API URL

  constructor(private http: HttpClient) {}

  // Generic GET request
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.apiBaseUrl}${endpoint}`);
  }

  // Generic POST request
  post<T>(endpoint: string, data: any): Observable<T> {
    return this.http.post<T>(`${this.apiBaseUrl}${endpoint}`, data);
  }

  // Generic PUT request
  put<T>(endpoint: string, data: any): Observable<T> {
    return this.http.put<T>(`${this.apiBaseUrl}${endpoint}`, data);
  }

  // Generic PATCH request
  patch<T>(endpoint: string, data: any): Observable<T> {
    return this.http.patch<T>(`${this.apiBaseUrl}${endpoint}`, data);
  }

  // Generic DELETE request
  delete<T>(endpoint: string): Observable<T> {
    return this.http.delete<T>(`${this.apiBaseUrl}${endpoint}`);
  }

  // Employee specific endpoints (template for future API integration)
  getEmployees(): Observable<any> {
    return this.get('/employees');
  }

  getEmployeeById(id: number): Observable<any> {
    return this.get(`/employees/${id}`);
  }

  createEmployee(data: any): Observable<any> {
    return this.post('/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.put(`/employees/${id}`, data);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.delete(`/employees/${id}`);
  }
}
