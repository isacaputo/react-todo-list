import styled from "styled-components";
import { breakpoint } from "../../utils";

export const ListStyled = styled.ul`
  list-style: none;
  margin: 0 0 20px 0;
  border: 1px solid ${(props) => props.theme.colors.misc.w4};
  padding: 0;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: auto;

  ${breakpoint.mobile(`
    max-height: 450px;
  `)}

  ${breakpoint.tablet(`
    max-height: 520px;
  `)}
`;

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`;
