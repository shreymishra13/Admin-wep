import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockApiService } from '../../services/mock-api.service';
import { DemoEmployee } from '../../data/employees';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class DashboardComponent implements OnInit {
  employees: DemoEmployee[] = [];
  loading: boolean = true;

  constructor(private api: MockApiService) {}

  ngOnInit(): void {
    this.api.getEmployees().subscribe((employees) => {
      this.employees = employees.filter(emp => emp.status === 'active');
      this.loading = false;
    });
  }
}
