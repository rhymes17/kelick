import React, { useEffect, useState } from 'react';
import { IoChevronUpSharp } from 'react-icons/io5';
import { IoChevronDownSharp } from 'react-icons/io5';
import clsx from 'clsx';
import { EmployeeFilter } from '../employeeFilter';
import { Row } from './row';
import { FilterEmployees } from '../../filterEmployees';
import { Employee, sortEmployees } from '../../sortEmployees';

type EmployeeTableProps = {
  employees: Employee[];
};

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  // console.log("Employees in table",employees)
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [employeeListInUI, setEmployeeListInUI] =
    useState<Employee[]>(employees);

  const handleSort = (
    selectedSortProperty: 'id' | 'profile' | 'email' | 'role' | 'status',
    selectedSortDirection: 'aesc' | 'desc',
  ) => {
    const filteredAndSortedEmployees: Employee[] = sortEmployees(
      employeeListInUI,
      selectedSortProperty,
      selectedSortDirection,
    );

    setEmployeeListInUI([...filteredAndSortedEmployees]);
  };

  useEffect(() => {
    console.log('rendered');
    const searchTermLower = searchQuery.toLocaleLowerCase();

    if (searchTermLower === '') {
      setEmployeeListInUI(employeeListInUI);
    } else {
      const filteredValues = FilterEmployees(employeeListInUI, searchTermLower);
      setEmployeeListInUI(filteredValues);
    }
  }, [searchQuery, employees]);

  return (
    <div className="flex w-full flex-col gap-3">
      <EmployeeFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Table */}
      <div className="rounded-xl border-[1px] border-gray-200">
        {employeeListInUI.length > 0 && (
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
                    <IoChevronUpSharp
                      onClick={() => handleSort('id', 'desc')}
                      className="cursor-pointer"
                    />
                    <IoChevronDownSharp
                      onClick={() => handleSort('id', 'aesc')}
                      className="cursor-pointer"
                    />
                  </div>
                </td>
                <td className="flex w-full items-center justify-between px-3">
                  <p>Employee Profile</p>
                  <div className="flex flex-col items-center text-base">
                    <IoChevronUpSharp
                      onClick={() => handleSort('profile', 'desc')}
                      className="cursor-pointer"
                    />
                    <IoChevronDownSharp
                      onClick={() => handleSort('profile', 'aesc')}
                      className="cursor-pointer"
                    />
                  </div>
                </td>
                <td className="flex w-full items-center justify-between px-3">
                  <p>Email</p>
                  <div className="flex flex-col items-center text-base">
                    <IoChevronUpSharp
                      onClick={() => handleSort('email', 'desc')}
                      className="cursor-pointer"
                    />
                    <IoChevronDownSharp
                      onClick={() => handleSort('email', 'aesc')}
                      className="cursor-pointer"
                    />
                  </div>
                </td>
                <td className="flex w-full items-center justify-between px-3">
                  <p>Role</p>
                  <div className="flex flex-col items-center text-base">
                    <IoChevronUpSharp
                      onClick={() => handleSort('role', 'desc')}
                      className="cursor-pointer"
                    />
                    <IoChevronDownSharp
                      onClick={() => handleSort('role', 'aesc')}
                      className="cursor-pointer"
                    />
                  </div>
                </td>
                <td className="flex w-full items-center justify-between px-3">
                  <p>Status</p>
                  <div className="flex flex-col items-center text-base">
                    <IoChevronUpSharp
                      onClick={() => handleSort('status', 'desc')}
                      className="cursor-pointer"
                    />
                    <IoChevronDownSharp
                      onClick={() => handleSort('status', 'aesc')}
                      className="cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            </thead>
            <tbody className="divide-y-[1px] divide-solid divide-gray-200">
              {employeeListInUI.map((employee, index) => (
                <Row key={index} employee={employee} />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
