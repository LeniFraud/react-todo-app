import { routes } from 'utils/routes';
import { Wrapper, Link } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <Wrapper>
      <Link to={routes.REGISTER}>Register</Link>
      <Link to={routes.LOGIN}>Log In</Link>
    </Wrapper>
  );
};