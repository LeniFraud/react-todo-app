import { Footer as Section, Container, Desc, Text } from './Footer.styled';

export const Footer = () => {
  return (
    <Section>
      <Container>
        <Desc>
          © {new Date().getFullYear()} Todo App.{' '}
          <Text>All rights reserved.</Text>
        </Desc>
      </Container>
    </Section>
  );
};