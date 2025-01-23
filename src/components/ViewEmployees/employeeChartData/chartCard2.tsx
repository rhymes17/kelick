import React, { useState } from 'react';
import { Chart, registerables } from 'chart.js';
import clsx from 'clsx';

Chart.register(...registerables);

type ChartCard2Props = {
  dataset: {
    id: number;
    data: number;
    label: string;
    backgroundColor: string;
  }[];
};

export const ChartCard2: React.FC<ChartCard2Props> = ({ dataset }) => {
  const [clickedData, setClickedData] = useState<{
    label: string;
    data: number;
  } | null>({ label: dataset[0].label, data: dataset[0].data });

  const handleClick = () => {};
  let total = 0;

  for (const item of dataset) {
    total += item.data;
  }

  return (
    <div className="flex w-6/12 flex-col justify-between rounded-2xl bg-white p-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <p className="text-xs font-medium leading-4 text-gray-400">
            Employment Type
          </p>
          <p className="text-4xl font-bold leading-[48px] text-gray-700">
            {clickedData?.data}
          </p>
          <p className="font-semibold text-gray-700">{clickedData?.label}</p>
        </div>

        <div className="flex w-full gap-2">
          {dataset.map((item,index) => (
            <div
            key={index}
              className={clsx(`h-2 rounded-lg`)}
              style={{
                width: `${(item.data / total) * 100}%`,
                backgroundColor: item.backgroundColor,
              }}
              onClick={() => {
                setClickedData({ label: item.label, data: item.data });
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        {dataset.map((item,index) => (
          <div className="flex items-center gap-2" key={index}>
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
