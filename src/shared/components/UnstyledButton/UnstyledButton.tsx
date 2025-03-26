import { ButtonHTMLAttributes, FC } from 'react';

type UnstyledButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const UnstyledButton: FC<UnstyledButtonProps> = ({
  className,
  children,
  ...attributes
}) => {
  return (
    <button className={className} {...attributes}>
      {children}
    </button>
  );
};
