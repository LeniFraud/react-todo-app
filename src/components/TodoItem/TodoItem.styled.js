import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  background-color: ${p =>
    p.$isDragging
      ? p.theme.colors.backgroundLight
      : p.theme.colors.backgroundMain};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: ${p => p.theme.shadows.accent};
  transition: background-color ${p => p.theme.transition.normal};

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  &::after {
    position: absolute;
    left: 0;
    content: '';
    height: 100%;
    width: ${p => p.theme.space[3]}px;
    border-bottom-left-radius: ${p => p.theme.radii.medium};
    border-top-left-radius: ${p => p.theme.radii.medium};
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const Info = styled.div`
  width: 100%;
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const Name = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Description = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const DateBox = styled.div`
  margin-top: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.xs}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-style: italic;
  opacity: ${p => p.theme.opacities.normal};
`;

export const Created = styled.p``;

export const Updated = styled.p``;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.textLight};
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
