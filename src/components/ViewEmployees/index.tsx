import React, { useState } from 'react';
import { Button } from '../button';
import DownloadIcon from '../../assets/icons/DownloadIcon.png';
import { FaChevronDown } from 'react-icons/fa6';
import { FiSearch } from 'react-icons/fi';
import { EmployeeTable } from './employeeTable';
import { EmployeeChartData } from './employeeChartData';
import { SuccessModal } from './successModal';

type ViewEmployeesProps = {};

const ViewEmployees: React.FC<ViewEmployeesProps> = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);

  return (
    <div className="flex w-full flex-col items-end gap-5 font-quicksand">
      <Button
        icon={DownloadIcon}
        iconWidth={16}
        text="Export"
        className="h-9 w-fit rounded-xl !border-[1px] !border-gray-200 bg-surface-2 !px-0 !text-sm !font-semibold leading-5 !text-dark-primary"
      />

      <EmployeeChartData />

      <EmployeeTable />

      {openSuccessModal && (
        <SuccessModal setOpenSuccessModal={setOpenSuccessModal} />
      )}
    </div>
  );
};

export default ViewEmployees;
