import clsx from 'clsx';
import React from 'react';
import Avatar from '../../../assets/images/Avatar.png';

type RowProps = {
  employee: {
    id: string;
    profile: string;
    email: string;
    role: string;
    status: string;
  };
};

export const Row: React.FC<RowProps> = ({ employee }) => {
  return (
    <tr
      className="flex items-center justify-between text-left text-sm font-semibold leading-5 text-gray-900"
    >
      <td className="px-3 py-4">
        <input
          type="checkbox"
          className={clsx(
            'flex h-5 w-5 appearance-none items-center justify-center rounded-md border-[2px] border-gray-200',
            "checked:before:*: checked:border-gray-300 checked:text-gray-700 checked:after:content-['✔'] focus:outline-none",
          )}
        />
      </td>
      <td className="flex w-full items-center px-3 text-brand-active underline">
        {employee.id}
      </td>
      <td className="flex w-full items-center gap-3 px-3">
        <img src={Avatar} width={26} />
        {employee.profile}
      </td>
      <td className="w-full px-3">{employee.email}</td>
      <td className="w-full px-3">{employee.role}</td>
      <td className="w-full px-3">
        <button
          className={`flex items-center gap-2 ${employee.status == 'Active' ? 'bg-primary-50 text-brand-active' : employee.status == 'Payroll Only' ? 'bg-blue-gray-100 text-gray-400' : 'bg-purple-100 text-purple-600'} rounded-xl px-4 py-0.5`}
        >
          <div
            className={`h-2 w-2 rounded-full ${employee.status == 'Active' ? 'bg-brand-active' : employee.status == 'Payroll Only' ? 'bg-gray-400' : 'bg-purple-600'} left-0`}
          ></div>
          {employee.status}
        </button>
      </td>
    </tr>
  );
};
