import commonConstants from 'constants/common.json';
import { Input } from 'components/Input/Input';
import { Button } from 'components/Button/Button';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import styles from './LoginPage.module.scss';

export const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
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
          <h1>{commonConstants.SIGN_IN}</h1>
          <div>
            <Input
              id='email'
              onChange={handleChange}
              value={values.email}
              type='email'
              error={errors.email}
              icon={true}
            />
            <Input
              id='password'
              onChange={handleChange}
              value={values.password}
              type='password'
              error={errors.password}
              icon={true}
            />
          </div>
          <p className={styles.forgotPw}>{commonConstants.FORGOT_PASSWORD}</p>
          <Button color='red' onClick={handleSubmit}>
            SIGN IN
          </Button>
        </div>
      </div>
      <div className={styles.containerRight}>
        <div className={styles.formContainerRight}>
          <h1>{commonConstants.HELLO_FRIEND}</h1>
          <p className={styles.text}>{commonConstants.ENTER_US}</p>
          <Button color='white' onClick={() => navigate('/register')}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};
