import React, { useState } from 'react';
import { EmployeeTable } from './employeeTable';
import { EmployeeChartData } from './employeeChartData';
import { SuccessModal } from './successModal';
import { Employee } from '../../pages/employees';

type ViewEmployeesProps = {
  employees: Employee[];
};

const ViewEmployees: React.FC<ViewEmployeesProps> = ({ employees }) => {
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);

  return (
    <div className="flex w-full flex-col items-end gap-5 font-quicksand">
      <EmployeeChartData employees={employees} />

      <EmployeeTable employees={employees} />

      {openSuccessModal && (
        <SuccessModal setOpenSuccessModal={setOpenSuccessModal} />
      )}
    </div>
  );
};

export default ViewEmployees;
