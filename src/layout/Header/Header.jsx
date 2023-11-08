import { useSelector } from 'react-redux';
import { AuthMenu, NavMenu, UserMenu } from 'layout';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Container, Header as Section } from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Section>
      <Container>
        <NavMenu />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </Container>
    </Section>
  );
};
