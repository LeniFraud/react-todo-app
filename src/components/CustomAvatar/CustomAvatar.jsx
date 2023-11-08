import { FcAddImage } from 'react-icons/fc';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAvatarSrc } from 'redux/auth/slice';
import { selectUserAvatar } from 'redux/auth/selectors';
import { openModalEditAvatar } from 'redux/global/slice';
import { selectModalAvatarEditor } from 'redux/global/selectors';
import { ModalContainer, AvatarCropper } from 'components';
import {
  Wrapper,
  ImageBox,
  Image,
  ButtonBox,
  Button,
  Input,
} from './CustomAvatar.styled';

export const CustomAvatar = () => {
  const dispatch = useDispatch();
  const isModalAvatarEditorOpen = useSelector(selectModalAvatarEditor);
  const avatar = useSelector(selectUserAvatar);
  const defaultAvatar =
    'https://www.signivis.com/img/custom/avatars/member-avatar-01.png';
  const inputRef = useRef(null);

  const handleInputClick = e => {
    e.preventDefault();
    inputRef.current.click();
  };

  const handleImgChange = e => {
    dispatch(setAvatarSrc(URL.createObjectURL(e.target.files[0])));
    dispatch(openModalEditAvatar());
  };

  return (
    <Wrapper>
      {isModalAvatarEditorOpen && (
        <ModalContainer>
          <AvatarCropper />
        </ModalContainer>
      )}
      <ImageBox>
        <Image src={avatar || defaultAvatar} alt="Avatar" />
      </ImageBox>
      <ButtonBox>
        <Button type="button" onClick={handleInputClick}>
          <FcAddImage size={70} />
        </Button>
        <small>Click to select image</small>
        <Input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImgChange}
        />
      </ButtonBox>
    </Wrapper>
  );
};
