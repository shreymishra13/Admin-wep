import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  salary: number;
  joinDate: string;
  status: 'active' | 'inactive';
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private mockEmployees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      position: 'Senior Developer',
      department: 'Engineering',
      salary: 95000,
      joinDate: '2020-01-15',
      status: 'active'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      position: 'Product Manager',
      department: 'Product',
      salary: 85000,
      joinDate: '2019-06-20',
      status: 'active'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      email: 'robert.johnson@company.com',
      position: 'UI Designer',
      department: 'Design',
      salary: 75000,
      joinDate: '2021-03-10',
      status: 'active'
    },
    {
      id: 4,
      name: 'Emily Brown',
      email: 'emily.brown@company.com',
      position: 'DevOps Engineer',
      department: 'Engineering',
      salary: 90000,
      joinDate: '2020-11-05',
      status: 'active'
    },
    {
      id: 5,
      name: 'Michael Wilson',
      email: 'michael.wilson@company.com',
      position: 'Junior Developer',
      department: 'Engineering',
      salary: 65000,
      joinDate: '2022-02-01',
      status: 'inactive'
    }
  ];

  constructor() {}

  getEmployees(): Observable<Employee[]> {
    // Replace with actual API call
    return of(this.mockEmployees).pipe(delay(300));
  }

  getEmployeeById(id: number): Observable<Employee | undefined> {
    // Replace with actual API call
    return of(this.mockEmployees.find(emp => emp.id === id)).pipe(delay(200));
  }

  createEmployee(employee: Omit<Employee, 'id'>): Observable<Employee> {
    // Replace with actual API call
    const newEmployee: Employee = {
      ...employee,
      id: Math.max(...this.mockEmployees.map(e => e.id)) + 1
    };
    this.mockEmployees.push(newEmployee);
    return of(newEmployee).pipe(delay(300));
  }

  updateEmployee(id: number, employee: Partial<Employee>): Observable<Employee | undefined> {
    // Replace with actual API call
    const index = this.mockEmployees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.mockEmployees[index] = { ...this.mockEmployees[index], ...employee };
    }
    return of(this.mockEmployees[index]).pipe(delay(300));
  }

  deleteEmployee(id: number): Observable<boolean> {
    // Replace with actual API call
    const index = this.mockEmployees.findIndex(emp => emp.id === id);
    if (index !== -1) {
      this.mockEmployees.splice(index, 1);
      return of(true).pipe(delay(200));
    }
    return of(false).pipe(delay(200));
  }

  getDashboardStats(): Observable<any> {
    // Replace with actual API call
    return of({
      totalEmployees: this.mockEmployees.length,
      activeEmployees: this.mockEmployees.filter(e => e.status === 'active').length,
      departments: [...new Set(this.mockEmployees.map(e => e.department))].length,
      averageSalary: (this.mockEmployees.reduce((sum, e) => sum + e.salary, 0) / this.mockEmployees.length).toFixed(2)
    }).pipe(delay(300));
  }
}
