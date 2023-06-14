import { Input } from 'components/Input/Input';
import commonConstants from 'constants/common.json';
import { Button } from 'components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import './LoginPage.scss';

export const LoginPage = (): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('No password provided.')
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  const { handleSubmit, handleChange, values, errors } = formik;

  return (
    <div className={'container'}>
      <div className={'form-container-left'}>
        <h1 className={'signIn'}>{commonConstants.SIGN_IN}</h1>
        <div className={'form'}>
          <Input
            id='email'
            onChange={handleChange}
            value={values.email}
            type='email'
            error={errors.email}
          />
          <Input
            id='password'
            onChange={handleChange}
            value={values.password}
            type='password'
            error={errors.password}
          />
        </div>
        <p className={'forgotPw'}>{commonConstants.FORGOT_PASSWORD}</p>
        <Button color='red' onClick={handleSubmit}>
          SIGN IN
        </Button>
      </div>
      <div className={'form-container-right'}>
        <div className={'container-right'}>
          <h1>{commonConstants.HELLO_FRIEND}</h1>
          <p className={'text'}>{commonConstants.ENTER_US}</p>
          <Button color='white'>Sign up</Button>
        </div>
      </div>
    </div>
  );
};
