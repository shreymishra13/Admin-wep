export interface DemoEmployee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  status: 'active' | 'inactive';
}

export const DEMO_EMPLOYEES: DemoEmployee[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@company.com',
    position: 'Senior Developer',
    department: 'Engineering',
    status: 'active'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@company.com',
    position: 'Product Manager',
    department: 'Product',
    status: 'active'
  },
  {
    id: 3,
    name: 'Robert Johnson',
    email: 'robert.johnson@company.com',
    position: 'UI Designer',
    department: 'Design',
    status: 'active'
  },
  {
    id: 4,
    name: 'Emily Brown',
    email: 'emily.brown@company.com',
    position: 'DevOps Engineer',
    department: 'Engineering',
    status: 'active'
  },
  {
    id: 5,
    name: 'Michael Wilson',
    email: 'michael.wilson@company.com',
    position: 'Junior Developer',
    department: 'Engineering',
    status: 'inactive'
  }
];
