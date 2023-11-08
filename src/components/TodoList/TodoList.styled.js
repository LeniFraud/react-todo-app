import styled from 'styled-components';

// export const Wrapper = styled.div`
//   padding: ${p => p.theme.space[4]}px;
//   background-color: ${p => p.theme.colors.backgroundBook};
//   border-radius: ${p => p.theme.radii.medium};
//   box-shadow: ${p => p.theme.shadows.accent};
// `;

export const List = styled.ul`
  padding: ${p =>
    p.$isEmpty ? `${p.theme.space[4]}px` : `${p.theme.space[0]}px`};
  background-color: ${p =>
    p.$isDraggingOver
      ? p.theme.colors.backgroundBookDark
      : p.theme.colors.backgroundBookLight};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: ${p => p.theme.shadows.accent};
  transition: background-color ${p => p.theme.transition.normal};
`;
