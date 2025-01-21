import React from 'react'
import SearchUser1 from '../../../assets/images/SearchUser1.png'
import BulkUploadIcon from '../../../assets/icons/BulkUploadIcon.png'
import AddEmployeeIcon from '../../../assets/icons/AddEmployeeIcon.png'
import { Button } from '../../button'
type Props = {}

export const StartBuildingTeam = (props: Props) => {
  return (
    <div className='w-full py-12 flex justify-center items-center rounded-xl font-quicksand border-[1px] border-[#B3BEBE]'>

      <div>

        <div className='flex flex-col items-center'>
          <img src={SearchUser1} className='h-[220px] w-[220px]' />
          <div className='flex flex-col gap-2'>
            <p className='text-3xl font-bold leading-9 text-gray-700 tracking-tight mx-auto'>Start building your team</p>
            <p className='text-base font-medium text-gray-400 mx-auto'>Add your first team member or import your entire team.</p>
          </div>
        </div>

        <div className='pt-8 flex gap-4 justify-center mx-auto'>
            <Button icon={BulkUploadIcon} text='Bulk Upload' hover={false} className='font-semibold border-[1px] border-[#B3BEBE] rounded-xl' />
            <Button icon={AddEmployeeIcon} text='Add Employee' hover={false} className='!text-white font-semibold border-[1px] border-[#B3BEBE] rounded-xl bg-brand-active' />
        </div>

      </div>

    </div>
  )
}