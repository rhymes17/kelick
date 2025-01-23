import React, { useState } from 'react';
import { Button } from '../../button';
import DownloadIcon from '../../../assets/icons/DownloadIcon.png';
import { FaChevronDown } from 'react-icons/fa6';
import { EmployeeChartData } from './employeeChartData';

type ViewEmployeesProps = {};

const ViewEmployees: React.FC<ViewEmployeesProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="flex w-full flex-col items-end gap-4 font-quicksand">
      <Button
        icon={DownloadIcon}
        iconWidth={16}
        text="Export"
        className="h-9 w-fit rounded-xl border-[1px] border-gray-200 bg-surface-2 !px-0 !text-sm !font-semibold leading-5 !text-dark-primary"
      />
      <EmployeeChartData />

      <div className="flex w-full justify-between">
        <div className="text-xl font-bold leading-9 tracking-tight">
          All Employees
        </div>
        <div className='flex items-center gap-4'>
          <div className="flex min-h-9 items-center gap-1 rounded-xl pl-3 pr-2.5 border-[1px] border-gray-200 bg-surface-2 duration-200 ease-in">
            <FiSearch className="text-lg text-gray-700 font-bold" />
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              type="search"
              name="search"
              id="search"
              placeholder="Search employee"
              className="rounded-xl border-none focus:ring-0 outline-none px-2 bg-surface-2 placeholder:text-sm placeholder:font-medium placeholder:text-dark-secondary placeholder:leading-5"
            />
          </div>
          <Button text='All Status' rightIcon={<FaChevronDown />} className='min-h-9 rounded-xl !px-3 !text-sm !font-semibold leading-5 !text-dark-primary border-[1px] border-gray-200 bg-surface-2 duration-200 ease-in'/>
          <Button text='All Role' rightIcon={<FaChevronDown />} className='min-h-9 rounded-xl !px-3 !text-sm !font-semibold leading-5 !text-dark-primary border-[1px] border-gray-200 bg-surface-2 duration-200 ease-in'/>
        </div>
      </div>

      <EmployeeTable />


    </div>
  );
};

export default ViewEmployees;
