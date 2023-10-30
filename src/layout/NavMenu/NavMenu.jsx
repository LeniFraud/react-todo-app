import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { routes } from 'utils/routes';
import { Nav, Link } from './NavMenu.styled';

export const NavMenu = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <Link to={routes.HOME}>Home</Link>
      {isLoggedIn && <Link to={routes.TODOS}>Todos</Link>}
    </Nav>
  );
};