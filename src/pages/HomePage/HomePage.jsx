import { BsArrowDownCircleFill } from 'react-icons/bs';
import phonebook from './phonebook.png';
import { routes } from 'utils/routes';
import {
  Section,
  Container,
  Title,
  Text,
  Link,
  Image,
} from './HomePage.styled';

export default function HomePage() {
  return (
    <Section>
      <Container>
        <Title>Todo App</Title>
        <Text>All your tasks are here!</Text>
        <BsArrowDownCircleFill size={32} fill="#f7cd23" />
        <Link to={routes.TODOS}>
          <Image src={phonebook} alt="Phonebook" />
        </Link>
      </Container>
    </Section>
  );
}