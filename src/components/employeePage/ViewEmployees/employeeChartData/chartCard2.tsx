import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(...registerables);

type Props = {};

export const ChartCard2 = (props: Props) => {
  const data = {
    labels: ['Singaporean', 'PR', 'Foreigner', 'Others'],
    datasets: [
      {
        label: 'My Dataset',
        data: [25, 35, 20, 20], // Data for each segment
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'], // Segment colors
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'], // Hover colors
        borderWidth: 4,
        cutout: 58,
        radius: 48,
        borderRadius: 20,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    rotation: -90,
    radius: 2,
    circumference: 1,
    plugins: {
      legend: {
        display: false,
        position: 'bottom' as const,
        labels: {
          boxWidth: 40,
        },
      },
      tooltip: {
        enabled: false, // Enable tooltips on hover
      },
    },
  };

  return (
    <div className="w-full flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <p className="text-xs font-medium leading-4 text-gray-400">
            Employment Type
          </p>
          <p className="text-4xl font-bold leading-[38px] text-gray-700">13</p>
          <p className="font-semibold text-gray-700">Full Timers</p>
        </div>

        <div>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
