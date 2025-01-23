import React, { useEffect, useState } from 'react';
import { IoChevronUpSharp } from 'react-icons/io5';
import { IoChevronDownSharp } from 'react-icons/io5';
import { employees } from '../../../constants/EmployeeList';
import Avatar from '../../../assets/images/Avatar.png';
import clsx from 'clsx';
import { EmployeeFilter } from '../employeeFilter';
import { Row } from './row';
import { FilterEmployees } from '../../filterEmployees';

type EmployeeTableProps = {};

export const EmployeeTable: React.FC<EmployeeTableProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [dataLength, setDataLength] = useState<number>(1);

  const [employeeListInUI, setEmployeeListInUI] = useState<
    {
      id: string;
      profile: string;
      email: string;
      role: string;
      status: string;
    }[]
  >(employees);


  useEffect(() => {
    const searchTermLower = searchQuery.toLocaleLowerCase();

    if (searchTermLower === '') {
      setEmployeeListInUI(employees);
    } else {
      const filteredValues = FilterEmployees(employees, searchTermLower);
      setEmployeeListInUI(filteredValues);
    }
  });

  return (
    <div className="flex w-full flex-col gap-3">
      <EmployeeFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Table */}
      <div className="rounded-xl border-[1px] border-gray-200">
        {dataLength > 0 && (
          <table className="w-full divide-y-[1px] divide-solid divide-gray-200">
            <thead>
              <tr className="flex items-center justify-between rounded-xl bg-surface-2 font-medium text-gray-400">
                <td className="px-3 pb-3 pt-4">
                  <input
                    type="checkbox"
                    className={clsx(
                      'flex h-5 w-5 appearance-none items-center justify-center rounded-md border-[2px] border-gray-200',
                      "checked:before:*: checked:border-gray-300 checked:text-gray-700 checked:after:content-['✔'] focus:outline-none",
                    )}
                  />
                </td>
                <td className="flex w-full items-center justify-between px-3">
                  <p>Employee ID</p>
                  <div className="flex flex-col items-center text-base">
                    <IoChevronUpSharp />
                    <IoChevronDownSharp />
                  </div>
                </td>
                <td className="flex w-full items-center justify-between px-3">
                  <p>Employee Profile</p>
                  <div className="flex flex-col items-center text-base">
                    <IoChevronUpSharp />
                    <IoChevronDownSharp />
                  </div>
                </td>
                <td className="flex w-full items-center justify-between px-3">
                  <p>Email</p>
                  <div className="flex flex-col items-center text-base">
                    <IoChevronUpSharp />
                    <IoChevronDownSharp />
                  </div>
                </td>
                <td className="flex w-full items-center justify-between px-3">
                  <p>Role</p>
                  <div className="flex flex-col items-center text-base">
                    <IoChevronUpSharp />
                    <IoChevronDownSharp />
                  </div>
                </td>
                <td className="flex w-full items-center justify-between px-3">
                  <p>Status</p>
                  <div className="flex flex-col items-center text-base">
                    <IoChevronUpSharp />
                    <IoChevronDownSharp />
                  </div>
                </td>
              </tr>
            </thead>
            <tbody className="divide-y-[1px] divide-solid divide-gray-200">
              {employeeListInUI.map((employee, index) => (
                <Row employee={employee} index={index} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
