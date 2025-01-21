import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-24 w-full border-b-[1px] px-8 py-[26px]">
      <p className="font-quicksand text-3xl font-bold leading-10 text-gray-700 tracking-tight">
        Employees
      </p>
    </div>
  );
};

export default Navbar;
