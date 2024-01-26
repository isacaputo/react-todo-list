import styled from "styled-components";
import { breakpoint } from "./utils";

export const Root = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;

  ${breakpoint.mobile(`
    padding-left: 16px;
    padding-right: 16px;
  `)}

  ${breakpoint.tablet(`
    padding-left: 24px;
    padding-right: 24px;
  `)}

  ${breakpoint.desktop(`
    padding-left: 0;
    padding-right: 0;
    max-width: 960px;
  `)}
`;

export const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: rgba(33, 36, 41, 0.14) 0px 2px 24px;
`;
