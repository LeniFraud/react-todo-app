import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';
import defaultAvatar from './default-avatar.png';
import { Wrapper, Avatar, Text, Name, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const avatar = defaultAvatar;

  return (
    <Wrapper>
      <Avatar src={avatar} alt="User Avatar" />
      <Text>
        Welcome, <Name>{name}</Name>
      </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};