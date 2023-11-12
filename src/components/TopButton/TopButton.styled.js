import styled from 'styled-components';

export const Button = styled.button`
  position: fixed;
  bottom: ${p => p.theme.space[4]}px;
  right: ${p => p.theme.space[5]}px;
  z-index: 20;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  color: ${p => p.theme.colors.backgroundBookLight};
  background-color: transparent;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};
  outline: none;
  opacity: ${p => p.theme.opacities.normal};
  transition: color ${p => p.theme.transition.normal};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accent};
  }
`;
