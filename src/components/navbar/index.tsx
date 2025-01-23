import React, { useState } from 'react';
import { Button } from '../button';
import AddEmployeeIcon from '../../assets/icons/AddEmployeeIcon.png';

type NavbarProps = {
  employeeCount: number,
  setOpenSuccessModal: React.Dispatch<React.SetStateAction<boolean>>,
};

const Navbar: React.FC<NavbarProps> = ({
  employeeCount,
  setOpenSuccessModal
}) => {

  return (
    <div className="sticky top-0 z-10 flex h-24 w-full justify-between border-b-[1px] bg-white px-8 py-[26px]">
      <p className="font-quicksand text-3xl font-bold leading-10 tracking-tight text-gray-700">
        Employees
      </p>
      {employeeCount > 0 && (
        <Button
          icon={AddEmployeeIcon}
          text="Add Employee"
          hover={false}
          className="rounded-xl border-[1px] border-[#B3BEBE] bg-brand-active font-normal !text-white"
          onClick={() => setOpenSuccessModal(true)}
        />
      )}
    </div>
  );
};

export default Navbar;
