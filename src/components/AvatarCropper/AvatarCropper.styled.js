import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin: 0 auto;
  padding-top: ${p => p.theme.space[4]}px;
`;

export const Input = styled.input`
  appearance: none;
  -webkit-appearance: none;
  width: 80%;
  height: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  margin-left: ${p => p.theme.space[0]}px;
  margin-right: ${p => p.theme.space[0]}px;
  background: ${p => p.theme.colors.backgroundDark};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.medium};
  outline: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.round};
    cursor: ew-resize;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.textLight};
  font-size: ${p => p.theme.fontSizes.s}px;
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  transition: background-color ${p => p.theme.transition.normal},
    box-shadow ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadows.accent};
  }
`;

export const CancelButton = styled(SaveButton)`
  margin-right: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.errorLight};

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.errorDark};
  }
`;
