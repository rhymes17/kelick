import React from 'react';
import { ChartCard1 } from './chartCard1';
import { ChartCard2 } from './chartCard2';
import { ChartCard3 } from './chartCard3';

type EmployeeChartDataProps = {};

export const EmployeeChartData: React.FC<EmployeeChartDataProps> = () => {
  return (
    <div className="flex w-full gap-5 font-quicksand">
      <ChartCard1 />

      <ChartCard2 />

      <ChartCard3 />
    </div>
  );
};
