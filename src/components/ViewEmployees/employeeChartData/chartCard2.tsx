import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import clsx from 'clsx';

Chart.register(...registerables);

type Props = {};

export const ChartCard2 = (props: Props) => {
  const dataset = [
    {
      id: 1,
      data: 24,
      labels: 'Singaporean',
      backgroundColor: '#36A2EB',
      hoverBackgroundColor: '#FF6384',
    },
    {
      id: 2,
      data: 24,
      labels: 'PR',
      backgroundColor: '#FF6384',
      hoverBackgroundColor: '#36A2EB',
    },
    {
      id: 3,
      data: 44,
      labels: 'Foreigner',
      backgroundColor: '#FFCE56',
      hoverBackgroundColor: '#FFCE56',
    },
    {
      id: 4,
      data: 2,
      labels: 'Others',
      backgroundColor: '#4CAF50',
      hoverBackgroundColor: '#4CAF50',
    },
  ];

  let total = 0;
  let Width = [];

  useEffect(() => {
    for (const item of dataset) {
      total += item.data;
      Width.push((item.data / total) * 100);
    }
  });

  for (const item of dataset) {
    total += item.data;
    Width.push((item.data / total) * 100);
  }

  return (
    <div className="flex w-6/12 flex-col justify-between rounded-2xl bg-white p-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <p className="text-xs font-medium leading-4 text-gray-400">
            Employment Type
          </p>
          <p className="text-4xl font-bold leading-[38px] text-gray-700">13</p>
          <p className="font-semibold text-gray-700">Full Timers</p>
        </div>

        <div className="flex w-full gap-2">
          {dataset.map((item) => (
            <div
              className={clsx(`h-2 bg-[${item.backgroundColor}] rounded-lg`)}
              style={{ width: `${(item.data / total) * 100}%` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex  gap-2">
        {dataset.map((item) => (
          <div className="flex items-center gap-2">
            <div
              className={`h-4 w-1 rounded-lg bg-[${item.backgroundColor}]`}
            ></div>
            <p className="text-sm font-semibold leading-4 text-gray-700">
              {item.data}
            </p>
            <p className="text-sm font-normal">{item.labels}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
