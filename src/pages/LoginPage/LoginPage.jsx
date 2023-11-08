import { useSelector } from 'react-redux';
import { selectStatusPending } from 'redux/global/selectors';
import { LoginForm, Loader } from 'components';
import { Section, Container } from './LoginPage.styled';

export default function LoginPage() {
  const isPending = useSelector(selectStatusPending);

  return (
    <Section>
      <Container>{isPending ? <Loader /> : <LoginForm />}</Container>
    </Section>
  );
}
