import React from 'react';
import KelickLogo from '../../assets/images/KelickLogo.png';
import DashboardIcon from '../../assets/icons/DashboardIcon.png';
import OrganizationIcon from '../../assets/icons/OrganizationIcon.png';
import WalletIcon from '../../assets/icons/WalletIcon.png';
import BellIcon from '../../assets/icons/BellIcon.png';
import Avatar from '../../assets/images/Avatar.png';
import { FaChevronDown } from 'react-icons/fa6';

import { Button } from '../button';
import { ProgressBar } from '../progressBar';
import { SideBarLinks } from '../../constants/SidebarLinks';
import { Link } from 'react-router-dom';

type Props = {};

export const Sidebar = (props: Props) => {
  return (
    <div className="border-alpha-dark-100 font-quicksand flex h-screen w-2/12 flex-col justify-between border-r-[2px] p-4 overflow-y-scroll">
      {/* uppder block */}
      <div className="flex flex-col gap-3">
        <div className="px-4 py-2">
          <img src={KelickLogo} className="left-0" />
        </div>

        <div className='flex'>
          <Button
            icon={DashboardIcon}
            text="Dashboard"
            className="w-full !text-dark-secondary"
          />
        </div>

        <div className='flex flex-col'>
          <div className="flex items-center justify-between px-4 py-2 text-base font-bold tracking-widest text-gray-300">
            <p>ORGANIZATION</p>
            <FaChevronDown />
          </div>
          <Button icon={OrganizationIcon} text="Kelick" className='w-full'/>
        </div>

        <div className="flex flex-col gap-3">
          <div className="px-4 py-2 text-base font-bold tracking-widest text-gray-300">
            MANAGE
          </div>
          {
            SideBarLinks.map((link) => (
              <Link to={link.path}>
                <Button icon={link.icon} text={link.text} className='w-full'/>
              </Link>
            ))
          }
        </div>
      </div>

      {/* lower block */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex h-[10px] w-full items-center">
            <div className="w-full border-[1px] border-gray-100"></div>
          </div>

          <div className="flex flex-col gap-2.5">
            <Button
              icon={WalletIcon}
              text="Free Plan"
              hover={false}
              className="!py-2.5"
            />
            <div className="flex flex-col gap-2 px-4">
              <p className="text-dark-primary text-xs font-medium">
                1/10 Employees
              </p>
              <ProgressBar />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex h-[10px] w-full items-center">
            <div className="w-full border-[1px] border-gray-100"></div>
          </div>

          <Button
            icon={BellIcon}
            text="Notifications"
            hover={false}
            className="!py-2.5 !pr-0"
            rightIcon={<div className='h-2 w-2 rounded-full bg-red-500 absolute right-0'></div>}
          />

          <div className='pr-2 pl-4 py-2.5 flex gap-2.5'>
            <img src={Avatar} />
            <div className='flex flex-col gap-1'>
                <p className='text-xs font-medium text-dark-primary leading-3'>John Doe</p>
                <p className='text-xs font-medium text-gray-400 leading-3'>johndoe@asure.pro</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
