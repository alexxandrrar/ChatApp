import { FC, useState } from 'react';
import classNames from 'classnames';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  MailOutlined,
} from '@ant-design/icons';
import './Input.scss';

interface IInputProps {
  type: 'password' | 'email' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  error?: string;
}

export const Input: FC<IInputProps> = ({
  type,
  placeholder,
  value,
  required,
  className,
  error,
  id,
  onChange,
}): JSX.Element => {
  const [inputType, setInputType] = useState(type);
  return (
    <div className={'input-container'}>
      {type === 'password' &&
        (inputType === 'password' ? (
          <EyeInvisibleOutlined
            className={'icon'}
            onClick={() => setInputType('text')}
          />
        ) : (
          <EyeOutlined
            className={'icon'}
            onClick={() => setInputType('password')}
          />
        ))}
      {type === 'email' && (
        <span className={'icon'}>
          <MailOutlined />
        </span>
      )}
      <input
        type={type === 'password' ? inputType : type}
        placeholder={placeholder}
        required={required}
        value={value}
        className={classNames(className, 'input')}
        maxLength={type === 'password' ? 30 : 500}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};
