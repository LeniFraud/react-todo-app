import { LoginForm } from 'components';
import { Section, Container } from './LoginPage.styled';

export default function LoginPage() {
  return (
    <Section>
      <Container>
        <LoginForm />
      </Container>
    </Section>
  );
}