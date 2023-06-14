import { ReactNode, FC } from 'react';
import classNames from 'classnames';
import './Button.scss';

interface IButtonProps {
  onClick?: () => void;
  onChange?: () => void;
  color?: 'red' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: ReactNode;
}

export const Button: FC<IButtonProps> = ({
  onClick,
  onChange,
  children,
  className,
  color = 'red',
  size = 'md',
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      onChange={onChange}
      className={classNames(className, 'button', {
        [`button_color ${color}`]: color,
        [`button_size ${size}`]: size,
      })}
    >
      {children}
    </button>
  );
};
