import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const AvatarBox = styled.div`
  border-radius: ${p => p.theme.radii.round};
  overflow: hidden;
`;

export const Avatar = styled.img`
  width: 48px;
`;

export const Text = styled.p``;

export const Name = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textLight};
  font-size: ${p => p.theme.fontSizes.xs}px;
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
