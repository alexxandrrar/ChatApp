import { FC, useState } from 'react';
import {
  EyeInvisibleOutlined,
  EyeOutlined,
  MailOutlined,
} from '@ant-design/icons';
import styles from './Input.module.scss';

interface IInputProps {
  type: 'password' | 'email' | 'text';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  error?: string;
  icon?: true;
}

export const Input: FC<IInputProps> = ({
  type,
  placeholder,
  value,
  required,
  className,
  error,
  icon,
  id,
  onChange,
}): JSX.Element => {
  const [inputType, setInputType] = useState(type);
  return (
    <div className={styles.container}>
      {icon &&
        type === 'password' &&
        (inputType === 'password' ? (
          <EyeInvisibleOutlined
            className={styles.icon}
            onClick={() => setInputType('text')}
          />
        ) : (
          <EyeOutlined
            className={styles.icon}
            onClick={() => setInputType('password')}
          />
        ))}
      {icon && type === 'email' && (
        <span className={styles.icon}>
          <MailOutlined />
        </span>
      )}
      <input
        type={type === 'password' ? inputType : type}
        placeholder={placeholder}
        required={required}
        value={value}
        className={styles.input}
        maxLength={type === 'password' ? 30 : 500}
        onChange={onChange}
        id={id}
      />
      <div className={styles.errorContainer}>
        {error && <span className={styles.error}>{error}</span>}
      </div>
    </div>
  );
};
