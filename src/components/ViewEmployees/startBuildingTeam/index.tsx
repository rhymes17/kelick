import React, { useState } from 'react';
import SearchUser1 from '../../../assets/images/SearchUser1.png';
import BulkUploadIcon from '../../../assets/icons/BulkUploadIcon.png';
import AddEmployeeIcon from '../../../assets/icons/AddEmployeeIcon.png';
import { Button } from '../../button';
import { UploadFileModal } from '../../uploadFileModal';
type StartBuildingTeamProps = {};

export const StartBuildingTeam: React.FC<StartBuildingTeamProps> = () => {
  const [viewFileUploadModal, setViewFileUploadModal] =
    useState<boolean>(false);

  return (
    <div className="flex w-full items-center justify-center rounded-xl border-[1px] border-[#B3BEBE] py-12 font-quicksand">
      <div>
        <div className="flex flex-col items-center">
          <img src={SearchUser1} className="h-[220px] w-[220px]" />
          <div className="flex flex-col gap-2">
            <p className="mx-auto text-3xl font-bold leading-9 tracking-tight text-gray-700">
              Start building your team
            </p>
            <p className="mx-auto text-base font-medium text-gray-400">
              Add your first team member or import your entire team.
            </p>
          </div>
        </div>

        <div className="mx-auto flex justify-center gap-4 pt-8">
          <Button
            icon={BulkUploadIcon}
            text="Bulk Upload"
            hover={false}
            className="rounded-xl !border-[1px] !border-[#B3BEBE] font-semibold"
            onClick={() => setViewFileUploadModal(true)}
          />
          <Button
            icon={AddEmployeeIcon}
            text="Add Employee"
            hover={false}
            className="rounded-xl border-[1px] !border-[#B3BEBE] bg-brand-active font-normal !text-white"
          />
        </div>
      </div>

      {viewFileUploadModal && (
        <UploadFileModal setViewFileUploadModal={setViewFileUploadModal} />
      )}
    </div>
  );
};
