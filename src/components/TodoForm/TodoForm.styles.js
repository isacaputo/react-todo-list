import styled from "styled-components";

export const LabelStyled = styled.label`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
`;

export const InputStyled = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary.light};
  border-color: ${(props) => props.theme.colors.misc.w0};
  border-style: solid;
  border-width: 0.0625rem;
  border-radius: 0.25rem;
  box-shadow: none;
  color: ${(props) => props.theme.colors.misc.w2};
  display: block;
  font-size: 16px;
  font-weight: 400;
  height: 2.5rem;
  letter-spacing: inherit;
  line-height: 1.5;
  padding: 4px 10px;

  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.primary.main};
  }
`;

export const FormStyled = styled.form`
  display: flex;
`;
