import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  background-color: ${p => p.theme.colors.backgroundBookLight};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: ${p => p.theme.shadows.normal};
  transition: color ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Input = styled.input`
  flex-grow: 1;
  margin-left: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  outline: none;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  transition: border-color ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    border-color: ${p => p.theme.colors.primary};
  }
`;
