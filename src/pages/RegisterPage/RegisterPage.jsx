import { useSelector } from 'react-redux';
import { selectStatusPending } from 'redux/auth/selectors'; 
import { RegisterForm, Loader } from 'components';
import { Section, Container } from './RegisterPage.styled';

export default function RegisterPage() {
  const isPending = useSelector(selectStatusPending);

  return (
    <Section>
      <Container>
      {isPending ? <Loader/> : <RegisterForm/>}
      </Container>
    </Section>
  );
}