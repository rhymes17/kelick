import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import { Button } from '../../button';
import { FaChevronDown } from 'react-icons/fa6';

type EmployeeFilterProps = {}

export const EmployeeFilter: React.FC<EmployeeFilterProps> = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
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
              <Button
                text="All Status"
                rightIcon={<FaChevronDown />}
                className="min-h-9 rounded-xl border-[1px] border-gray-200 bg-surface-2 !px-3 !text-sm !font-semibold leading-5 !text-dark-primary duration-200 ease-in"
              />
              <Button
                text="All Role"
                rightIcon={<FaChevronDown />}
                className="min-h-9 rounded-xl border-[1px] border-gray-200 bg-surface-2 !px-3 !text-sm !font-semibold leading-5 !text-dark-primary duration-200 ease-in"
              />
            </div>
          </div>
  )
}
