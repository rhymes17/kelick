import { StartBuildingTeam } from '../../components/ViewEmployees/startBuildingTeam';
import ViewEmployees from '../../components/ViewEmployees';
import React, { useState } from 'react';
import { Loading } from '../../components/loading';
import Navbar from '../../components/navbar';
import { SuccessModal } from '../../components/ViewEmployees/successModal';
import { UploadProgressBar } from '../../components/upload/uploadProgressBar';
import { Employee } from '../../components/sortEmployees';
type Props = {};

export const Employees: React.FC<Props> = () => {
  const [employeeCount, setEmployeeCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);
  const [employees, setEmployees] = useState<Employee[]>([]);

  console.log(employees);

  return (
    <div className="flex flex-col items-center justify-center bg-surface-2">
      <Navbar
        employeeCount={employeeCount}
        setOpenSuccessModal={setOpenSuccessModal}
      />
      <div className="h-[calc(100vh-96px)] w-full p-6">
        {employees.length == 0 ? (
          <StartBuildingTeam setEmployees={setEmployees} />
        ) : isLoading ? (
          <UploadProgressBar />
        ) : (
          <ViewEmployees employees={employees} />
        )}
      </div>
      {openSuccessModal && (
        <SuccessModal setOpenSuccessModal={setOpenSuccessModal} />
      )}
    </div>
  );
};
