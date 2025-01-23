import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Button } from '../../button';
import { FaChevronDown } from 'react-icons/fa6';
import { roleTypes, statusTypes } from '../../../constants/EmployeeList';

type EmployeeFilterProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const EmployeeFilter: React.FC<EmployeeFilterProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const [status, setStatus] = useState(statusTypes[0]);
  const [role, setRole] = useState(roleTypes[0]);

  const handleStatusQuery = (status: string) => {
    if (status === 'All Status') {
      setSearchQuery('');
    } else {
      setSearchQuery(status);
    }
    setStatus(status);
  };

  const handleRoleQuery = (role: string) => {
    if (role === 'All Role') {
      setSearchQuery('');
    } else {
      setSearchQuery(role);
    }
    setRole(role);
  };

  return (
    <div className="flex w-full justify-between">
      <div className="text-xl font-bold leading-9 tracking-tight">
        All Employees
      </div>
      <div className="flex items-center gap-4">
        <div className="flex min-h-9 items-center gap-1 rounded-xl border-[1px] border-gray-200 bg-surface-2 pl-3 pr-2.5 duration-200 ease-in">
          <FiSearch className="text-lg font-bold text-gray-700" />
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="search"
            name="search"
            id="search"
            placeholder="Search employee"
            className="rounded-xl border-none bg-surface-2 px-2 outline-none placeholder:text-sm placeholder:font-medium placeholder:leading-5 placeholder:text-dark-secondary focus:ring-0"
          />
        </div>
        <div className="group relative w-36 rounded-xl">
          <Button
            text={status}
            rightIcon={<FaChevronDown />}
            className="min-h-9 rounded-xl border-[1px] border-gray-200 bg-surface-2 !px-3 !text-sm !font-semibold leading-5 !text-dark-primary duration-200 ease-in"
          />
          <div className="absolute left-0 top-[30%] flex flex-col opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100">
            {statusTypes.map((status) => (
              <Button
                text={status}
                className="absolute min-h-9 w-full border-[1px] bg-[#F2F5F5] !px-3 !text-sm !font-semibold leading-5 !text-dark-primary duration-200 ease-in"
                onClick={() => handleStatusQuery(status)}
              />
            ))}
          </div>
        </div>

        <div className="group relative w-44 rounded-xl">
          <Button
            text={role}
            rightIcon={<FaChevronDown />}
            className="min-h-9 rounded-xl border-[1px] border-gray-200 bg-surface-2 !px-3 !text-sm !font-semibold leading-5 !text-dark-primary duration-200 ease-in"
          />
          <div className="absolute left-0 top-[30%] flex flex-col opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100">
            {roleTypes.map((role) => (
              <Button
                text={role}
                className="absolute min-h-9 w-full border-[1px] bg-[#F2F5F5] !px-3 !text-sm !font-semibold leading-5 !text-dark-primary duration-200 ease-in"
                onClick={() => handleRoleQuery(role)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
