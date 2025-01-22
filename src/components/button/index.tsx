import clsx from 'clsx';
import React from 'react';

interface ButtonProps {
  icon?: string;
  iconWidth?: number;
  text: string;
  className?: string;
  hover?: boolean;
  rightIcon?: React.ReactNode;
  onClick?: any;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  iconWidth,
  text,
  className,
  hover = true,
  rightIcon,
  onClick,
}) => {
  const baseStyle = clsx(
    'flex items-center gap-2 px-4 py-2 font-quicksand text-base font-medium text-gray-700 relative',
    hover &&
      'hover:text-dark-primary hover:font-semibold hover:border-[1px] hover:border-gray-200 hover:bg-[#F2F5F5] hover:rounded-xl transition-all duration-200',
    className,
  );

  return (
    <button className={baseStyle} onClick={onClick}>
      {icon && <img src={icon} width={iconWidth ? iconWidth : 22} />}
      <div>{text}</div>
      {rightIcon}
    </button>
  );
};
