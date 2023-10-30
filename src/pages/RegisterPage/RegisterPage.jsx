import { RegisterForm } from 'components';
import { Section, Container } from './RegisterPage.styled';

export default function RegisterPage() {
  return (
    <Section>
      <Container>
        <RegisterForm />
      </Container>
    </Section>
  );
}