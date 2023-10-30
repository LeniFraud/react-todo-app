import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, Input, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // console.log('login')
    dispatch(
      logIn({
        name: 'User',
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Input type="email" name="email" required />
      </Label>
      <Label>
        Password
        <Input type="password" name="password" minLength={7} required />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};