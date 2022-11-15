import styled, {css} from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.theme.colors.action};
  color: ${props => props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.border};
  margin: 1rem;
  border-radius: 4px;
  padding: 1rem 2rem;
  font-size: 2rem;
`