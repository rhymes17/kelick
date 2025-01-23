import React from 'react';
import { ChartCard1 } from './chartCard1';
import { ChartCard2 } from './chartCard2';
import { ChartCard3 } from './chartCard3';
import { Employee } from '../../sortEmployees';

type EmployeeChartDataProps = {
  employees: Employee[];
};

export type Dataset = {
  id: number;
  data: number;
  label: string;
  backgroundColor: string;
}[];

export const EmployeeChartData: React.FC<EmployeeChartDataProps> = ({
  employees,
}) => {
  const dataset1: Dataset = [
    {
      id: 1,
      data: 0,
      label: 'Singaporean',
      backgroundColor: '#36A2EB',
    },
    {
      id: 2,
      data: 0,
      label: 'PR',
      backgroundColor: '#FF6384',
    },
    {
      id: 4,
      data: 0,
      label: 'Foreigner',
      backgroundColor: '#FFCE56',
    },
    {
      id: 4,
      data: 0,
      label: 'Others',
      backgroundColor: '#4CAF50',
    },
  ];

  const dataset2: Dataset = [
    {
      id: 1,
      data: 0,
      label: 'Full-Timer',
      backgroundColor: '#36A2EB',
    },
    {
      id: 2,
      data: 0,
      label: 'Part-Timer',
      backgroundColor: '#FF6384',
    },
    {
      id: 4,
      data: 0,
      label: 'Contract',
      backgroundColor: '#FFCE56',
    },
    {
      id: 4,
      data: 0,
      label: 'Intern',
      backgroundColor: '#4CAF50',
    },
  ];

  const dataset3: Dataset = [
    {
      id: 1,
      data: 0,
      label: 'Active',
      backgroundColor: '#36A2EB',
    },
    {
      id: 2,
      data: 0,
      label: 'Invite Sent',
      backgroundColor: '#FF6384',
    },
    {
      id: 4,
      data: 0,
      label: 'Payroll Only',
      backgroundColor: '#FFCE56',
    },
  ];

  for (const employee of employees) {
    for (const item of dataset1) {
      if (item.label === employee.nationality) item.data = item.data + 1;
    }

    for (const item of dataset2) {
      if (item.label === employee.employmentType) item.data = item.data + 1;
    }

    for (const item of dataset3) {
      if (item.label === employee.status) item.data = item.data + 1;
    }
  }

  return (
    <div className="flex w-full gap-5 font-quicksand">
      <ChartCard1 dataset={dataset1} />

      <ChartCard2 dataset={dataset2} />

      <ChartCard3 dataset={dataset3} />
    </div>
  );
};
