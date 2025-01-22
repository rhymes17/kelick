import { StartBuildingTeam } from '../../components/employeePage/startBuildingTeam';
import ViewEmployees from '../../components/employeePage/ViewEmployees';
import React, { useState } from 'react';
import { Loading } from '../../components/loading';
type Props = {};

export const Employees: React.FC<Props> = () => {
  const [employeesCount, setEmployeesCount] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className=" flex items-center justify-center p-6">
      {employeesCount == 0 ? (
        <StartBuildingTeam />
      ) : isLoading ? (
        <Loading/>
      ) : (
        <ViewEmployees />
      )}
    </div>
  );
};
