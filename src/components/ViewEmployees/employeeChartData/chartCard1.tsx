import React, { useState } from 'react';
import { ActiveElement, Chart, ChartEvent, registerables } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(...registerables);

type ChartCard1Props = {
  dataset: {
    id: number;
    data: number;
    label: string;
    backgroundColor: string;
  }[];
};

export const ChartCard1: React.FC<ChartCard1Props> = ({ dataset }) => {
  const [clickedData, setClickedData] = useState<{
    label: string;
    data: number;
  } | null>({ label: dataset[0].label, data: dataset[0].data });

  let SegmentData = [];
  let labels = [];
  let backgroundColor = [];
  for (const item of dataset) {
    SegmentData.push(item.data);
    labels.push(item.label);
    backgroundColor.push(item.backgroundColor);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'My Dataset',
        data: SegmentData, // Data for each segment
        backgroundColor: backgroundColor, // Segment colors
        // hoverBackgroundColor: hoverBackgroundColor, // Hover colors
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
    layout: {
      padding: 0,
    },
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
    onClick: (event: ChartEvent, elements: ActiveElement[], chart: Chart) => {
      if (elements.length > 0) {
        const element = elements[0]; // Get the first clicked element
        const datasetIndex = element.datasetIndex; // Dataset index
        const index = element.index; // Index within the dataset

        // Extract the label and data using the index
        const label = chart.data.labels ? chart.data.labels[index] : '';
        const value = chart.data.datasets[datasetIndex].data[index];

        // Log or handle the clicked segment's data
        console.log(`Clicked Segment: Label=${label}, Value=${value}`);
        setClickedData({ label: label as string, data: value as number });
      }
    },
  };

  return (
    <div className="flex w-3/12 flex-col rounded-2xl bg-white p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-medium leading-4 text-gray-400">
            Nationality
          </p>
          <div>
            <p className="text-4xl font-bold leading-[38px] text-gray-700">
              {clickedData?.data}
            </p>
            <p className="font-semibold text-gray-700">{clickedData?.label}</p>
          </div>
        </div>
        <div className="h-[150px] w-[150px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {dataset.map((item) => (
          <div className="flex items-center gap-2">
            <div
              className={`h-4 w-1 rounded-lg`}
              style={{ backgroundColor: item.backgroundColor }}
            ></div>
            <p className="text-sm font-semibold leading-4 text-gray-700">
              {item.data}
            </p>
            <p className="text-sm font-normal">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
