import Papa from 'papaparse';
import React, { useState } from 'react';
import * as XLSX from 'xlsx';

type RowData = { [key: string]: string | number | null };

const FileUpload: React.FC = () => {
  const [data, setData] = useState<RowData[]>([]);
  const [headers, setHeaders] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileExtension = file.name.split('.').pop()?.toLowerCase();

    if (fileExtension === 'csv') {
      readCSV(file);
    } else if (fileExtension === 'xlsx') {
      readXLSX(file);
    } else {
      alert('Please upload a valid CSV or XLSX file.');
    }
  };

  const readCSV = (file: File): void => {
    Papa.parse<RowData>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const { data, meta } = result;
        setHeaders(meta.fields || []);
        setData(data);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        alert('Error parsing CSV file.');
      },
    });
  };

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
      setData(
        rows.map((row) => {
          const rowObject: RowData = {};
          headers.forEach((header, index) => {
            rowObject[header as string] = row[index] ?? null;
          });
          return rowObject;
        }),
      );
    };

    reader.onerror = (error: any) => {
      console.error('Error reading file:', error);
      alert('An error occurred while reading the file.');
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2 className="text-2xl">
        File Reader <span className="text-lg text-black/70">(CSV or XLSX)</span>
      </h2>
      <input
        type="file"
        accept=".csv , .xlsx"
        onChange={handleFileChange}
        style={{ marginBottom: '20px' }}
      />
      {data.length > 0 && (
        <table
          border={1}
          cellPadding="10"
          style={{ borderCollapse: 'collapse' }}
        >
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers.map((header, cellIndex) => (
                  <td key={cellIndex}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FileUpload;
