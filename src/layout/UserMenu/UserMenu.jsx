import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';
import { selectUserAvatar } from 'redux/auth/selectors';
import defaultAvatar from './default-avatar.png';
import {
  Wrapper,
  AvatarBox,
  Avatar,
  Text,
  Name,
  Button,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const avatar = useSelector(selectUserAvatar);
  const userAvatar = defaultAvatar;

  return (
    <Wrapper>
      <AvatarBox>
        <Avatar src={avatar || userAvatar} alt="User Avatar" />
      </AvatarBox>
      <Text>
        Welcome, <Name>{name}</Name>
      </Text>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
