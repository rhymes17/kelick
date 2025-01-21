import clsx from 'clsx'
import React from 'react'

interface ButtonProps {
    image: string,
    text: string,
    className?: string,
    hover?: boolean,
    rightIcon?: React.ReactNode,
}

export const Button: React.FC<ButtonProps> = ({
    image,
    text,
    className,
    hover=true,
    rightIcon,

}) => {

    const baseStyle = clsx(
        'flex items-center gap-2 px-4 py-2 font-quicksand text-base font-medium text-gray-700 relative',
        (hover && 'hover:text-dark-primary hover:font-semibold hover:border-[1px] hover:border-gray-200 hover:bg-[#F2F5F5] hover:rounded-lg transition-all duration-200'),
        className
    )

    return (
        <button className={baseStyle}>
            <img src={image} width={22}/>
            <p>{text}</p>
            {rightIcon}
        </button>
    )
}
