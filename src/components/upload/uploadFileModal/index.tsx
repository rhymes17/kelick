import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import FileIcon from '../../../assets/icons/FileIcon.png';
import DownloadIcon from '../../../assets/icons/DownloadIcon.png';
import MSExcelLogo from '../../../assets/images/MSExcelLogo.png';
import { Button } from '../../button';
import clsx from 'clsx';
import { Employee } from '../../sortEmployees';
import * as XLSX from 'xlsx';
import Papa from 'papaparse';
import { useDropzone } from 'react-dropzone';

interface UploadFileProps {
  setViewFileUploadModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEmployees: React.Dispatch<React.SetStateAction<Employee[]>>;
}

type RowData = { [key: string]: string | number | null };

export const UploadFileModal: React.FC<UploadFileProps> = ({
  setViewFileUploadModal,
  setEmployees,
}) => {
  const [fileData, setFileData] = useState<Employee[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  const handleFileChange = (file: File): void => {
    // const file = e.target.files?.[0];
    if (!file) return;

    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    console.log('File extension', fileExtension);

    if (fileExtension === 'csv') {
      readCSV(file);
    } else if (fileExtension === 'xlsx') {
      readXLSX(file);
    } else {
      alert('Please upload a valid CSV or XLSX file.');
    }
  };

  const readCSV = (file: File): void => {
    Papa.parse<Employee>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const { data, meta } = result;
        setHeaders(meta.fields || []);
        // setFileData(data);
        setEmployees(data);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        alert('Error parsing CSV file.');
      },
    });
    // console.log('Data', data);
  };
  console.log('Data', fileData);
  const readXLSX = (file: File): void => {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      const jsonData: (string | number | null)[][] = XLSX.utils.sheet_to_json(
        sheet,
        { header: 1 },
      );
      const [headers, ...rows] = jsonData;

      setHeaders(headers as string[]);
      setEmployees(
        rows.map((row) => {
          const rowObject: any = {};
          headers.forEach((header, index) => {
            rowObject[header as string] = row[index] ?? null;
          });
          return rowObject;
        }),
      );
      console.log('Headers', headers);
    };

    reader.onerror = (error: any) => {
      console.error('Error reading file:', error);
      alert('An error occurred while reading the file.');
    };

    reader.readAsArrayBuffer(file);
  };

  const onDrop = (acceptedFiles: File[]) => {
    console.log(acceptedFiles);
    const file: File = acceptedFiles[0];
    if (file) {
      handleFileChange(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        '.xlsx',
        '.csv',
      ],
    },
    onDrop,
  });

  const baseStyle = clsx(
    'fixed inset-0 z-[1000] bg-gray-700 bg-opacity-50',
    'flex justify-center items-center',
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
            <div
              className="flex min-h-[200px] flex-col items-center justify-center rounded-xl border-[2px] border-dashed border-gray-200 bg-surface-2 p-4 hover:border-brand-active"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
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
              className="ml-10 min-w-fit rounded-xl !border-gray-200 bg-surface-2 !px-2 !text-sm !font-semibold leading-5 !text-dark-primary"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button
            text="Cancel"
            hover={false}
            className="rounded-xl border-[1px] !border-[#B3BEBE] font-semibold"
            onClick={() => setViewFileUploadModal(false)}
          />
          <Button
            text="Continue"
            hover={false}
            className="rounded-xl border-[#B3BEBE] bg-brand-active !px-2 font-normal !text-white"
          />
        </div>
      </div>
    </div>
  );
};
