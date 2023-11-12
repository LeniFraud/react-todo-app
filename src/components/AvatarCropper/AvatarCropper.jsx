import AvatarEditor from 'react-avatar-editor';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAvatar } from 'redux/auth/slice';
import { selectAvatarSrc } from 'redux/auth/selectors';
import { closeModalEditAvatar } from 'redux/global/slice';
import {
  Wrapper,
  Input,
  ButtonBox,
  SaveButton,
  CancelButton,
} from './AvatarCropper.styled';

export const AvatarCropper = () => {
  const dispatch = useDispatch();
  const src = useSelector(selectAvatarSrc);
  const [slideValue, setSlideValue] = useState(10);
  const cropRef = useRef(null);

  const handleSave = async () => {
    if (cropRef) {
      const dataUrl = cropRef.current.getImage().toDataURL();
      const result = await fetch(dataUrl);
      const blob = await result.blob();
      dispatch(addAvatar(URL.createObjectURL(blob)));
      dispatch(closeModalEditAvatar());
    }
  };

  return (
    <Wrapper>
      <AvatarEditor
        ref={cropRef}
        image={src}
        style={{ width: '100%', height: '100%' }}
        border={50}
        borderRadius={150}
        color={[0, 0, 0, 0.6]}
        scale={slideValue / 10}
        rotate={0}
      />
      <Input
        type="range"
        min={5}
        max={50}
        value={slideValue}
        onChange={e => setSlideValue(e.target.value)}
      />
      <ButtonBox>
        <CancelButton
          type="button"
          onClick={() => dispatch(closeModalEditAvatar())}
        >
          Cancel
        </CancelButton>
        <SaveButton type="submit" onClick={handleSave}>
          Save
        </SaveButton>
      </ButtonBox>
    </Wrapper>
  );
};
