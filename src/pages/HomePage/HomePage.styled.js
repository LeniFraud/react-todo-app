import styled from 'styled-components';
import { NavLink as L } from 'react-router-dom';

export const Section = styled.section`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xxl}px;
`;

export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const Link = styled(L)`
  margin-top: ${p => p.theme.space[4]}px;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 200px;
  transform: scale(1);
  transition: transform ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    transform: scale(1.05);
  }
`;
