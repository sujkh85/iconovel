import { css } from 'styled-components';

export const media = {
  laptopL: (...args) => css`
    @media (max-width: 1440px) {
      ${css(...args)};
    }
  `,
  handheld: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)};
    }
  `
};
