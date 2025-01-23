import React from 'react';

type Props = {};

export const UploadProgressBar = (props: Props) => {
  return (
    <div className='h-full mx-auto flex justify-center items-center'>
      <div className="flex flex-col items-center gap-2">
        <div className="bg-fill-1 h-4 w-[183px] rounded-sm">
          <div
            className="h-full rounded bg-brand-active"
            style={{ width: `${(5 / 100) * 100}%` }}
          ></div>
        </div>
        <p className="text-center text-xs leading-4 text-gray-400">
          Please wait while we uplaod your file...
        </p>
      </div>
    </div>
  );
};
