import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(...registerables);

type Props = {};

export const ChartCard3 = (props: Props) => {
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
    circumference: 180,
    plugins: {
      legend: {
        display: false,
        position: 'bottom' as const,
        labels: {
          boxWidth: 40,
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips on hover
      },
    },
  };
  
  return (
    <div className="w-full flex flex-col gap-4 rounded-2xl bg-white p-4">
      <div className="flex items-center gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium leading-4 text-gray-400">
            Nationality
          </p>
          <div>
            <p className="text-4xl font-bold leading-[38px] text-gray-700">
              25
            </p>
            <p className="font-semibold text-gray-700">Singaporeans</p>
          </div>
        </div>
        <div className="w-40 border-[1px] border-gray-700">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      <div></div>
    </div>
  );
};
