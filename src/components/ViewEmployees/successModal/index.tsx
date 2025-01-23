import clsx from 'clsx';
import React from 'react';
import { Button } from '../../button';
import { SiTicktick } from 'react-icons/si';

type SuccessModalProps = {
  setOpenSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SuccessModal: React.FC<SuccessModalProps> = ({
  setOpenSuccessModal,
}) => {
  const baseStyle = clsx(
    'fixed inset-0 z-[1000] bg-gray-700 bg-opacity-50',
    'flex justify-center items-center',
  );

  return (
    <div className={baseStyle}>
      <div className="flex max-h-fit w-[450px] flex-col items-center justify-between gap-6 rounded-xl border-[1px] border-gray-200 bg-white p-7 font-quicksand">
        {/* success icon */}
        <div>
          <SiTicktick className="h-16 w-40" />
        </div>

        <p className="text-center text-xl font-bold text-gray-700">
          Congrats! You've successfully added all your employees!
        </p>
        <p className="font-medium text-gray-700">
          Would you like to generate payroll?
        </p>

        <div className="flex justify-end gap-3">
          <Button
            text="I'll do it later"
            hover={false}
            className="rounded-xl !border-[#B3BEBE] font-semibold"
            onClick={() => setOpenSuccessModal(false)}
          />
          <Button
            text="Generate Payroll"
            hover={false}
            className="rounded-xl !border-[#B3BEBE] bg-brand-active !px-2 font-normal !text-white"
          />
        </div>
      </div>
    </div>
  );
};
