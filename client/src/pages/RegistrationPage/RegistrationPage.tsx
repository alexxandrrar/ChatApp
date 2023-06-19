import { Input } from 'components/Input/Input';
import commonConstants from 'constants/common.json';
import { Button } from 'components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import styles from './RegistrationPage.module.scss';
import { useNavigate } from 'react-router-dom';

export const RegistrationPage = (): JSX.Element => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required!'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  const { handleSubmit, handleChange, values, errors } = formik;

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <div className={styles.formContainerLeft}>
          <h1>{commonConstants.WELCOME_BACK}</h1>
          <p className={styles.text}>{commonConstants.KEEP_CONNECTED}</p>
          <Button color='white' onClick={() => navigate('/login')}>
            SIGN IN
          </Button>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.formContainerRight}>
          <h1>{commonConstants.CREATE_ACCOUNT}</h1>
          <div className={styles.form}>
            <Input
              id='name'
              onChange={handleChange}
              value={values.name}
              type='text'
              error={errors.name}
              placeholder='Enter your name'
            />
            <Input
              id='email'
              onChange={handleChange}
              value={values.email}
              type='email'
              error={errors.email}
              placeholder='Enter your email'
            />
            <Input
              id='password'
              onChange={handleChange}
              value={values.password}
              type='password'
              error={errors.password}
              placeholder='Enter your password'
            />
          </div>
          <Button color='red' onClick={handleSubmit}>
            SIGN UP
          </Button>
        </div>
      </div>
    </div>
  );
};
