import styled from 'styled-components';

export const Text = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-style: italic;
  opacity: ${p => p.theme.opacities.normal};
`;
