import { Form, Field } from 'formik';
import styled from 'styled-components';
import { NavLink as L } from 'react-router-dom';

export const Container = styled.div`
  max-width: 320px;
  margin: 0 auto;
`;

export const Link = styled(L)`
  display: flex;
  justify-content: flex-end;
  color: ${p => p.theme.colors.primary};
  transition: color ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const FormBox = styled(Form)`
  width: 320px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: ${p => p.theme.space[4]}px;
  transition: color ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    color: ${p => p.theme.colors.secondary};
  }
`;

export const Input = styled(Field)`
  margin-top: ${p => p.theme.space[3]}px;
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
    border-color: ${p => p.theme.colors.secondary};
  }
`;

export const ErrorText = styled.p`
  display: block;
  margin-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.xs}px;
  color: ${p => p.theme.colors.error};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[0]}px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
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
