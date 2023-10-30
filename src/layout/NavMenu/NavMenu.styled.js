import styled from 'styled-components';
import { NavLink as L } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Link = styled(L)`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: color ${p => p.theme.transition.normal};

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;
