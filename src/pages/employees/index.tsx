import { StartBuildingTeam } from '../../components/ViewEmployees/startBuildingTeam';
import ViewEmployees from '../../components/ViewEmployees';
import React, { useState } from 'react';
import { Loading } from '../../components/loading';
import { SuccessModal } from '../../components/ViewEmployees/successModal';
type Props = {};

export const Employees: React.FC<Props> = () => {
  const [employeesCount, setEmployeesCount] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center bg-surface-2">
        <StartBuildingTeam />
      ) : isLoading ? (
        <Loading/>
      ) : (
        <ViewEmployees />
      {openSuccessModal && (
        <SuccessModal setOpenSuccessModal={setOpenSuccessModal} />
      )}
    </div>
  );
};
