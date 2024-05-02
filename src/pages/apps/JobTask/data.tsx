interface Records {
  id: number;
  name: string;
  email: string;
  date: string;
  role: string;
  salary: number;
  payslip: string;
  action: string;
}

interface ExpandableRecords {
  id: number;
  name: string;
  email: string;
  date: string;
  role: string;
  salary: number;
  payslip: string;
  action: string;
  subRows: Records[];
}

const records: Records[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    date: "2024-05-01",
    role: "Software Developer",
    salary: 60000,
    payslip: "link-to-payslip-1",
    action: "edit",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    date: "2024-05-01",
    role: "Software Tester",
    salary: 80000,
    payslip: "link-to-payslip-2",
    action: "edit",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    date: "2024-05-02",
    role: "Software Developer",
    salary: 55000,
    payslip: "link-to-payslip-3",
    action: "edit",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@example.com",
    date: "2024-05-02",
    role: "UI/UX Designer",
    salary: 65000,
    payslip: "link-to-payslip-4",
    action: "edit",
  },
  {
    id: 5,
    name: "Emily Davis",
    email: "emily.davis@example.com",
    date: "2024-05-03",
    role: "Software Developer",
    salary: 70000,
    payslip: "link-to-payslip-5",
    action: "edit",
  },
  {
    id: 6,
    name: "Michael Wilson",
    email: "michael.wilson@example.com",
    date: "2024-05-03",
    role: "Data Scientist",
    salary: 90000,
    payslip: "link-to-payslip-6",
    action: "edit",
  },
  {
    id: 7,
    name: "Sarah Martinez",
    email: "sarah.martinez@example.com",
    date: "2024-05-04",
    role: "Software Tester",
    salary: 85000,
    payslip: "link-to-payslip-7",
    action: "edit",
  },
  {
    id: 8,
    name: "David Taylor",
    email: "david.taylor@example.com",
    date: "2024-05-04",
    role: "UI/UX Designer",
    salary: 60000,
    payslip: "link-to-payslip-8",
    action: "edit",
  },
  {
    id: 9,
    name: "Olivia Anderson",
    email: "olivia.anderson@example.com",
    date: "2024-05-05",
    role: "Software Developer",
    salary: 55000,
    payslip: "link-to-payslip-9",
    action: "edit",
  },
  {
    id: 10,
    name: "James Wilson",
    email: "james.wilson@example.com",
    date: "2024-05-05",
    role: "Customer Service",
    salary: 50000,
    payslip: "link-to-payslip-10",
    action: "edit",
  },
  {
    id: 11,
    name: "Sophia Brown",
    email: "sophia.brown@example.com",
    date: "2024-05-06",
    role: "Software Developer",
    salary: 60000,
    payslip: "link-to-payslip-11",
    action: "edit",
  },
  {
    id: 12,
    name: "Ethan Lee",
    email: "ethan.lee@example.com",
    date: "2024-05-06",
    role: "IT Support",
    salary: 55000,
    payslip: "link-to-payslip-12",
    action: "edit",
  },
  {
    id: 13,
    name: "Isabella Perez",
    email: "isabella.perez@example.com",
    date: "2024-05-07",
    role: "Software Tester",
    salary: 75000,
    payslip: "link-to-payslip-13",
    action: "edit",
  },
  {
    id: 14,
    name: "Mason Gonzalez",
    email: "mason.gonzalez@example.com",
    date: "2024-05-07",
    role: "UI/UX Designer",
    salary: 65000,
    payslip: "link-to-payslip-14",
    action: "edit",
  },
  {
    id: 15,
    name: "Ava Rodriguez",
    email: "ava.rodriguez@example.com",
    date: "2024-05-08",
    role: "UI/UX Designer",
    salary: 45000,
    payslip: "link-to-payslip-15",
    action: "edit",
  },
  {
    id: 16,
    name: "William Hernandez",
    email: "william.hernandez@example.com",
    date: "2024-05-08",
    role: "Software Developer",
    salary: 60000,
    payslip: "link-to-payslip-16",
    action: "edit",
  },
  {
    id: 17,
    name: "Elizabeth Scott",
    email: "elizabeth.scott@example.com",
    date: "2024-05-09",
    role: "UI/UX Designer",
    salary: 80000,
    payslip: "link-to-payslip-17",
    action: "edit",
  },
  {
    id: 18,
    name: "Alexander Wood",
    email: "alexander.wood@example.com",
    date: "2024-05-09",
    role: "Quality Assurance",
    salary: 65000,
    payslip: "link-to-payslip-18",
    action: "edit",
  },
  {
    id: 19,
    name: "Grace Green",
    email: "grace.green@example.com",
    date: "2024-05-10",
    role: "Technical Writer",
    salary: 55000,
    payslip: "link-to-payslip-19",
    action: "edit",
  },
  {
    id: 20,
    name: "Benjamin Adams",
    email: "benjamin.adams@example.com",
    date: "2024-05-10",
    role: "Training Coordinator",
    salary: 60000,
    payslip: "link-to-payslip-20",
    action: "edit",
  },
];


export { records };
