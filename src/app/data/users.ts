export interface AuthUser {
  id: string;
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'employee';
}

export const MOCK_USERS: AuthUser[] = [
  {
    id: 'shrey',
    email: 'shrey@company.com',
    password: 'shrey123',
    name: 'Shrey Mishra',
    role: 'admin'
  },
  {
    id: 'employee-1',
    email: 'employee1@company.com',
    password: 'employee123',
    name: 'Employee One',
    role: 'employee'
  },
  {
    id: 'employee-2',
    email: 'employee2@company.com',
    password: 'employee234',
    name: 'Employee Two',
    role: 'employee'
  }
];
