import styled from 'styled-components';

export const Footer = styled.footer`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.textLight};
  background-color: ${p => p.theme.colors.backgroundDark};
  box-shadow: ${p => p.theme.shadows.section};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Desc = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const Text = styled.span`
  opacity: ${p => p.theme.opacities.normal};
`;
