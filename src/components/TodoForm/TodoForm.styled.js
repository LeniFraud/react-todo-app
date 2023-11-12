import { Field } from 'formik';
import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: ${p => p.theme.space[5]}px;
  color: ${p => p.theme.colors.accent};
  text-align: center;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xm}px;
`;

export const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.backgroundBookLight};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes.m}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: color ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Input = styled(Field)`
  min-width: 280px;
  margin-top: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m}px;
  color: ${p => p.theme.colors.textDark};
  outline: none;
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  opacity: ${p => p.theme.opacities.normal};
  transition: border-color ${p => p.theme.transition.normal},
    color ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    border-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.textDark};
  }
`;

export const ErrorText = styled.p`
  font-size: ${p => p.theme.fontSizes.xs}px;
  color: ${p => p.theme.colors.errorDark};
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textLight};
  font-size: ${p => p.theme.fontSizes.s}px;
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

export const CancelButton = styled(SaveButton)`
  margin-right: ${p => p.theme.space[5]}px;
  background-color: ${p => p.theme.colors.errorLight};

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.errorDark};
  }
`;
