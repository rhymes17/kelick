import React from 'react';
import { ChartCard1 } from './chartCard1';
import { ChartCard2 } from './chartCard2';
import { ChartCard3 } from './chartCard3';

type EmployeeChartDataProps = {};

export const EmployeeChartData: React.FC<EmployeeChartDataProps> = () => {
  return (
    <div className="flex w-full gap-4 p-4 font-quicksand">
      {/* first chart */}
      <ChartCard1 />

      {/* second line chart */}
      <ChartCard2 />

      <ChartCard3 />
    </div>
  );
};
