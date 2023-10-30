import styled from 'styled-components';

export const Header = styled.header`
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.s}px;
  background-color: ${p => p.theme.colors.backgroundLight};
  box-shadow: ${p => p.theme.shadows.section};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;
