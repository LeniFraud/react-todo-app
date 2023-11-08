import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${p => p.theme.space[4]}px;
`;

export const ImageBox = styled.div`
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.round};
`;

export const Image = styled.img`
  display: block;
  width: 150px;
  height: 150px;
  border-radius: ${p => p.theme.radii.round};
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-bottom: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.none};
  background-color: transparent;
  transition: transform ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const Input = styled.input`
  display: none;
`;
