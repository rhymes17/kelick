import React, { useState } from 'react';
import { EmployeeTable } from './employeeTable';
import { EmployeeChartData } from './employeeChartData';
import { SuccessModal } from './successModal';

type ViewEmployeesProps = {};

const ViewEmployees: React.FC<ViewEmployeesProps> = () => {
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);

  return (
    <div className="flex w-full flex-col items-end gap-5 font-quicksand">
      <EmployeeChartData />

      <EmployeeTable />

      {openSuccessModal && (
        <SuccessModal setOpenSuccessModal={setOpenSuccessModal} />
      )}
    </div>
  );
};

export default ViewEmployees;
