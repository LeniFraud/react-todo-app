import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 50;
`;

export const ModalBox = styled.div`
  position: relative;
  min-width: 500px;
  min-height: 300px;
  padding: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.backgroundMain};
  border-radius: ${p => p.theme.radii.medium};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: ${p => p.theme.space[3]}px;
  right: ${p => p.theme.space[3]}px;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.space[5]}px;
  height: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.textDark};
  background-color: transparent;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.round};
  transition: background-color ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.backgroundBookLight};
  }
`;
