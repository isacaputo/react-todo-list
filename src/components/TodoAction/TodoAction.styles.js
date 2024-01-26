import styled from "styled-components";
import { breakpoint } from "../../utils";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Display = styled.span`
  display: none;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary.main};

  ${breakpoint.tablet(`
    display: block;
  `)}
`;

export const ActionButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary.light};
  color: ${(props) => props.theme.colors.secondary.main};
  padding: 8px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.secondary.main};
  border-width: 0.0625rem;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.misc.w3};
  }
  &.active {
    background-color: ${(props) => props.theme.colors.secondary.main};
    color: white;
  }

  &.first {
    margin-right: -0.0625rem;
    border-top-left-radius: 0.1875rem;
    border-bottom-left-radius: 0.1875rem;
  }
  &.middle {
    margin-right: -0.0625rem;
  }

  &.last {
    border-top-right-radius: 0.1875rem;
    border-bottom-right-radius: 0.1875rem;
  }

  &.default {
    border-radius: 0.1875rem;
  }
`;
