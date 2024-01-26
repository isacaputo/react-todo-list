import { css } from "styled-components";
const breakpoint = {
  mobile(value) {
    return css`
      @media screen and (max-width: 767px) {
        ${value}
      }
    `;
  },

  tablet(value) {
    return css`
      @media screen and (min-width: 600px) {
        ${value}
      }
    `;
  },

  desktop(value) {
    return css`
      @media screen and (min-width: 1024px) {
        ${value}
      }
    `;
  },
};

export default breakpoint;
