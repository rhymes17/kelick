import { StartBuildingTeam } from '../../components/ViewEmployees/startBuildingTeam';
import ViewEmployees from '../../components/ViewEmployees';
import React, { useState } from 'react';
import { Loading } from '../../components/loading';
import Navbar from '../../components/navbar';
import { SuccessModal } from '../../components/ViewEmployees/successModal';
import { UploadProgressBar } from '../../components/uploadProgressBar';
type Props = {};

export const Employees: React.FC<Props> = () => {
  const [employeeCount, setEmployeeCount] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center bg-surface-2">
      <Navbar employeeCount={employeeCount} setOpenSuccessModal={setOpenSuccessModal}/>
      <div className="w-full h-[calc(100vh-96px)] p-6">
        {employeeCount == 0 ? (
          <StartBuildingTeam />
        ) : isLoading ? (
          <UploadProgressBar />
        ) : (
          <ViewEmployees />
        )}
      </div>
      {openSuccessModal && (
        <SuccessModal setOpenSuccessModal={setOpenSuccessModal} />
      )}
    </div>
  );
};
