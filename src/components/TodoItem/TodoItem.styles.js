import styled, { css } from "styled-components";

export const Root = styled.li`
  list-style: none;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.misc.w4};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 44px;
  padding: 4px 8px;

  button {
    visibility: hidden;
  }

  .custom-control {
    margin: 0;

    label {
      width: 100%;
      display: block;
      margin-right: 30px;
      color: black;
    }
  }

  &:hover {
    button {
      visibility: visible;
    }
  }

  &:focus-within {
    background-color: ${(props) => props.theme.colors.misc.w5};
    outline: none;
  }

  &:first-of-type {
    border-radius: 2px 2px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 2px 2px;
    border-bottom-width: 0;
  }

  ${({ $done }) =>
    $done &&
    css`
      label {
        color: ${(props) => props.theme.colors.misc.w6};
        text-decoration: line-through;
      }
    `}
`;

export const CheckBoxContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  flex: 1;
`;

export const LabelStyled = styled.label`
  color: ${(props) => props.theme.colors.misc.w7};
`;

export const CheckboxStyled = styled.input.attrs({
  type: "checkbox",
})`
  width: 20px;
  height: 20px;
  border-color: ${(props) => props.theme.colors.misc.w1};
  border-style: solid;
  border-width: 0.0625rem;
  border-radius: 0.25rem;
  box-shadow: none;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 4px 6px;
  accent-color: ${(props) => props.theme.colors.primary.main};
`;

export const InputStyled = styled.input`
  width: calc(100% - 58px);
  height: 25px;
  border-color: ${(props) => props.theme.colors.misc.w1};
  color: ${(props) => props.theme.colors.misc.w2};
  border-style: solid;
  border-width: 0.0625rem;
  border-radius: 0.25rem;
  box-shadow: none;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  padding: 4px 6px;
  margin-right: 10px;
  outline: 1px solid ${(props) => props.theme.colors.primary.main};
`;
