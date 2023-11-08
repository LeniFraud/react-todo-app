import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { routes } from 'utils/routes';
import { CustomAvatar } from 'components';
import {
  Container,
  Link,
  FormBox,
  Label,
  Input,
  ErrorText,
  Button,
} from './RegisterForm.styled';

const getCharacterValidationError = type => {
  return `Your password must have at least 1 ${type} character`;
};

const schema = Yup.object({
  name: Yup.string()
    .max(15, 'Name cannot exceed more than 15 characters')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters or more')
    .matches(/[0-9]/, getCharacterValidationError('digit'))
    .matches(/[a-z]/, getCharacterValidationError('lowercase'))
    .matches(/[A-Z]/, getCharacterValidationError('uppercase'))
    .required('Required'),
  confirmedPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Required'),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmedPassword: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Container>
      <Link to={routes.LOGIN_REDIRECT}>Already have an account</Link>
      <CustomAvatar />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormBox autoComplete="off">
          <Label>
            Username
            <Input name="name" type="text" />
          </Label>
          <FormError name="name" />
          <Label>
            Email
            <Input name="email" type="email" />
          </Label>
          <FormError name="email" />
          <Label>
            Password
            <Input name="password" type="password" />
          </Label>
          <FormError name="password" />
          <Label>
            Confirm password
            <Input name="confirmedPassword" type="password" />
          </Label>
          <FormError name="confirmedPassword" />
          <Button type="submit">Register</Button>
        </FormBox>
      </Formik>
    </Container>
  );
};
