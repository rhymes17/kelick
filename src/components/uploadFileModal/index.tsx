import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import FileIcon from '../../assets/icons/FileIcon.png';
import DownloadIcon from '../../assets/icons/DownloadIcon.png';
import MSExcelLogo from '../../assets/images/MSExcelLogo.png';
import { Button } from '../button';
import clsx from 'clsx';

interface UploadFileProps {
  viewFileUploadModal?: boolean;
  setViewFileUploadModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UploadFileModal: React.FC<UploadFileProps> = ({
  viewFileUploadModal,
  setViewFileUploadModal,
}) => {
  const baseStyle = clsx(
    'fixed inset-0 z-[1000] flex justify-center items-center bg-gray-700 bg-opacity-50 backdrop-sepia-0',
  );

  return (
    <div className={baseStyle}>
      <div className="flex max-h-fit w-[600px] flex-col justify-between gap-10 rounded-xl border-[1px] border-gray-200 bg-white p-5 font-quicksand">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold leading-8 tracking-tight">
              Upload File
            </p>
            <button onClick={() => setViewFileUploadModal(false)}>
              <RxCross2 className="text-xl" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            <div className="bg-surface-2 flex min-h-[200px] flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 hover:border-brand-active p-4">
              <img src={FileIcon} />
              <p className="text-center text-sm font-medium leading-5 text-gray-300">
                Drag and drop your files here <br />
                or <span className="font-bold underline">click to upload</span>
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs font-semibold leading-4 text-gray-400">
                Supported formats: XLS, CSV
              </p>
              <p className="text-xs font-semibold leading-4 text-gray-400">
                Maximum file size: 25MB
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-md bg-gray-100 p-4">
            <img src={MSExcelLogo} className="h-full" />
            <div>
              <p className="text-sm font-bold leading-5 text-gray-700">
                Table Example
              </p>
              <p className="text-xs font-medium leading-5 text-gray-400">
                You can download the attached example and use them as a starting
                point for your own file.
              </p>
            </div>
            <Button
              icon={DownloadIcon}
              text="Download XLSX"
              className="min-w-fit bg-surface-2 ml-10 rounded-xl border-[1px] border-gray-200 !px-2 !text-sm !font-semibold leading-5 !text-dark-primary"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button
            text="Cancel"
            hover={false}
            className="rounded-xl border-[1px] border-[#B3BEBE] font-semibold"
            onClick={() => setViewFileUploadModal(false)}
          />
          <Button
            text="Continue"
            hover={false}
            className="rounded-xl border-[1px] border-[#B3BEBE] bg-brand-active !px-2 font-normal !text-white"
          />
        </div>
      </div>
    </div>
  );
};
