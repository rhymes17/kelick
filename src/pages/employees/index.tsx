import { StartBuildingTeam } from '../../components/employeePage/startBuildingTeam';
import ViewEmployees from '../../components/employeePage/ViewEmployees';
import React, { useState } from 'react'
type Props = {}

const Employees = (props: Props) => {

  const [employeesCount, setEmployeesCount] = useState(0);

  return (
    <div className='p-10 flex justify-center items-center'>
      {
        employeesCount == 0 ? (
          <StartBuildingTeam />
        ): (
          <ViewEmployees />
        )
      }
    </div>
  )
}

export default Employees