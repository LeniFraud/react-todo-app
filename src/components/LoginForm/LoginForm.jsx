import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { routes } from 'utils/routes';
import { Container, Link, FormBox, Label, Input, ErrorText, Button } from './LoginForm.styled';

const schema = Yup.object({
  name: Yup.string().max(15, 'Name cannot exceed more than 15 characters').required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().min(6, 'Password must be 6 characters or more').required('Required'),
});

const FormError = ({name}) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  )
};

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, {resetForm}) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Container>
      <Link to={routes.REGISTER_REDIRECT}>
        Registration
      </Link>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        <FormBox>
          <Label>
            Name
            <Input name="name" type="text" />
          </Label>
          <FormError name="name"/>
          <Label>
            Email
            <Input name="email" type="email" />
          </Label>
          <FormError name="email"/>
          <Label>
            Password
            <Input name="password" type="password" />
          </Label>
          <FormError name="password"/>
          <Button type="submit">Log In</Button>
        </FormBox>
      </Formik>
    </Container>
  );
};