import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button className={`px-4 py-2 rounded-md ${className}`} {...props}>
      {children}
    </button>
  );
};
