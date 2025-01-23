import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(...registerables);

type Props = {};


export const ChartCard3 = (props: Props) => {
  const dataset = [
    {
      id: 1,
      data: 25,
      labels:"Singaporean",
      backgroundColor: '#36A2EB',
      hoverBackgroundColor: '#FF6384',
    },
    {
      id: 2,
      data: 25,
      labels:"PR",
      backgroundColor: '#FF6384',
      hoverBackgroundColor: '#36A2EB',
    },
    {
      id: 3,
      data: 25,
      labels:"Foreigner",
      backgroundColor: '#FFCE56',
      hoverBackgroundColor: '#FFCE56',
    },
    {
      id: 4,
      data: 25,
      labels:"Others",
      backgroundColor: '#4CAF50',
      hoverBackgroundColor: '#4CAF50',
    },
  ];
  
  let SegmentData = [];
  let labels = [];
  let backgroundColor = [];
  let hoverBackgroundColor = [];
  for (const item of dataset) {
    SegmentData.push(item.data);
    labels.push(item.labels);
    backgroundColor.push(item.backgroundColor);
    hoverBackgroundColor.push(item.hoverBackgroundColor);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My Dataset',
        data: SegmentData, // Data for each segment
        backgroundColor: backgroundColor, // Segment colors
        hoverBackgroundColor: hoverBackgroundColor, // Hover colors
        borderWidth: 4,
        cutout: 60,
        radius: 58,
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
    <div className="flex w-3/12 flex-col rounded-2xl bg-white p-4">
      <div className="flex items-start gap-4">
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
        <div className="w-40">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      

      <div className="flex flex-wrap gap-2">
        {dataset.map((item) => (
          <div className="flex items-center gap-2">
            <div className={`h-4 w-1 rounded-lg bg-[${item.backgroundColor}]`}></div>
            <p className="text-sm font-semibold leading-4 text-gray-700">{item.data}</p>
            <p className="text-sm font-normal">{item.labels}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
