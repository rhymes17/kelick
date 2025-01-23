import React from 'react';
import { ChartCard1 } from './chartCard1';
import { ChartCard2 } from './chartCard2';
import { ChartCard3 } from './chartCard3';

type EmployeeChartDataProps = {};

export const EmployeeChartData: React.FC<EmployeeChartDataProps> = () => {
  const dataset1 = [
    {
      id: 1,
      data: 24,
      label: 'Singaporean',
      backgroundColor: '#36A2EB',
    },
    {
      id: 2,
      data: 34,
      label: 'PR',
      backgroundColor: '#FF6384',
    },
    {
      id: 4,
      data: 4,
      label: 'Foreigner',
      backgroundColor: '#FFCE56',
    },
    {
      id: 4,
      data: 29,
      label: 'Others',
      backgroundColor: '#4CAF50',
    },
  ];

  const dataset2 = [
    {
      id: 1,
      data: 24,
      label: 'Full-Timer',
      backgroundColor: '#36A2EB',
    },
    {
      id: 2,
      data: 34,
      label: 'Part-Timer',
      backgroundColor: '#FF6384',
    },
    {
      id: 4,
      data: 4,
      label: 'Contract',
      backgroundColor: '#FFCE56',
    },
    {
      id: 4,
      data: 29,
      label: 'Intern',
      backgroundColor: '#4CAF50',
    },
  ];

  const dataset3 = [
    {
      id: 1,
      data: 24,
      label: 'Active',
      backgroundColor: '#36A2EB',
    },
    {
      id: 2,
      data: 34,
      label: 'Invite Sent',
      backgroundColor: '#FF6384',
    },
    {
      id: 4,
      data: 4,
      label: 'Payroll Only',
      backgroundColor: '#FFCE56',
    },
  ];

  return (
    <div className="flex w-full gap-5 font-quicksand">
      <ChartCard1 dataset={dataset1} />

      <ChartCard2 dataset={dataset2} />

      <ChartCard3 dataset={dataset3} />
    </div>
  );
};
