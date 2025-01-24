import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Button } from '../../button';
import { FaChevronDown } from 'react-icons/fa6';
import { roleTypes, statusTypes } from '../../../constants/EmployeeList';
import { Employee } from '../../../pages/employees';
import { filterEmployees } from '../../filterEmployees';

type EmployeeFilterProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  employees: Employee[];
  employeeListInUI: Employee[];
  setEmployeeListInUI: React.Dispatch<React.SetStateAction<Employee[]>>;
};

export const EmployeeFilter: React.FC<EmployeeFilterProps> = ({
  searchQuery,
  setSearchQuery,
  employees,
  employeeListInUI,
  setEmployeeListInUI,
}) => {
  const [statusButton, setStatusButton] = useState(statusTypes[0]);
  const [roleButton, setRoleButton] = useState(roleTypes[0]);
  const [originalList, setOriginalList] =
    useState<Employee[]>(employeeListInUI);

  // const [filterQuery, setFilterQuery] = useState<string>('')

  const [tempRoleList, setTempRoleList] = useState<Employee[]>([
    {
      id: '1',
      profile: 'string',
      email: 'string',
      role: 'Lead Designer',
      status: 'Payroll Only',
      nationality: 'Singaporean',
      employmentType: 'Intern',
    },
  ]);

  const [tempStatusList, setTempStatusList] = useState<Employee[]>([
    {
      id: '1',
      profile: 'string',
      email: 'string',
      role: 'Lead Designer',
      status: 'Payroll Only',
      nationality: 'Singaporean',
      employmentType: 'Intern',
    },
  ]);

  const filterList = (employees: Employee[], filterQueryLower: string) =>
    employees.filter(
      (employee) =>
        employee.role.toLocaleLowerCase().includes(filterQueryLower) ||
        employee.status.toLocaleLowerCase().includes(filterQueryLower),
    );

  const handleStatusFilter = (status: string) => {
    if (status === 'All Status') {
      setEmployeeListInUI(originalList);
    } else {
      setEmployeeListInUI(tempRoleList);
      console.log('Temp role List', tempRoleList);
      const filteredValues = filterList(
        tempRoleList.length < 2 ? employeeListInUI : tempRoleList,
        status.toLocaleLowerCase(),
      );
      setTempStatusList(filteredValues);
      setEmployeeListInUI(filteredValues);
      // setFilterQuery(status);
    }
    setStatusButton(status);
  };

  const handleRoleFilter = (role: string) => {
    if (role === 'All Role') {
      setEmployeeListInUI(originalList);
    } else {
      setEmployeeListInUI(tempStatusList);
      console.log('Temp status List', tempStatusList);
      const filteredValues = filterList(
        tempStatusList.length < 2 ? employeeListInUI : tempStatusList,
        role.toLocaleLowerCase(),
      );
      setTempRoleList(filteredValues);
      setEmployeeListInUI(filteredValues);
      // setFilterQuery(role);
    }
    setRoleButton(role);
  };

  // useEffect(() => {
  //   const filterQueryLower = searchQuery.toLocaleLowerCase();

  //   if (filterQuery === '') {
  //     setEmployeeListInUI(employees);
  //   } else {
  //     console.log("employeeListInUI",employeeListInUI)
  //     const filteredValues = filterList(employeeListInUI, filterQueryLower);
  //     console.log("Filtered Values", filteredValues);
  //     setEmployeeListInUI(filteredValues);
  //   }
  // }, [filterQuery, employees]);

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
        <div className="relative w-36 rounded-xl">
          <Button
            text={statusButton}
            rightIcon={<FaChevronDown />}
            className="peer min-h-9 rounded-xl border-[1px] border-gray-200 bg-surface-2 !px-3 !text-sm !font-semibold leading-5 !text-dark-primary duration-200 ease-in"
          />
          <div className="absolute left-0 top-[50%] flex flex-col opacity-0 transition-all duration-150 peer-focus:visible peer-focus:translate-y-[1.65em] peer-focus:opacity-100">
            {statusTypes.map((status, index) => (
              <Button
                text={status}
                className="absolute min-h-9 w-full border-[1px] bg-[#F2F5F5] !px-3 !text-sm !font-semibold leading-5 !text-dark-primary duration-200 ease-in"
                onClick={() => handleStatusFilter(status)}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="group relative w-44 rounded-xl">
          <Button
            text={roleButton}
            rightIcon={<FaChevronDown />}
            className="peer min-h-9 rounded-xl border-[1px] border-gray-200 bg-surface-2 !px-3 !text-sm !font-semibold leading-5 !text-dark-primary duration-200 ease-in"
          />
          <div className="invisible absolute left-0 top-[30%] flex flex-col opacity-0 transition-all duration-150 group-focus:invisible peer-focus:visible peer-focus:translate-y-[1.65em] peer-focus:opacity-100">
            {roleTypes.map((role, index) => (
              <Button
                text={role}
                className="absolute min-h-9 w-full border-[1px] bg-[#F2F5F5] !px-3 !text-sm !font-semibold leading-5 !text-dark-primary duration-200 ease-in"
                onClick={() => handleRoleFilter(role)}
                key={index}
              />
            ))}
          </div>
        </div>

        <Button
          text="Clear All"
          className="min-h-9 rounded-xl border-[1px] border-gray-200 bg-surface-2 !px-3 !text-sm !font-semibold leading-5 !text-dark-primary duration-200 ease-in"
          onClick={() => {
            setEmployeeListInUI(employees);
            setSearchQuery('');
            setStatusButton('All Status');
            setRoleButton('All Role');
          }}
        />
      </div>
    </div>
  );
};
