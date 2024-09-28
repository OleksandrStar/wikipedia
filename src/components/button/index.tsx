import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
}

const Button = ({ children, onClick, disabled }: IProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="p-5 my-5 border text-black hover:bg-black hover:text-white transition-all ease-in rounded"
    >
      {children}
    </button>
  );
};

export default Button;
