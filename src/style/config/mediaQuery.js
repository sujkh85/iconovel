import { css } from 'styled-components';
const sizes = {
  mid: 1770,
  sm: 1612
};
// export const media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${sizes.sm / 16}em) and (max-width: ${sizes[label] /
//         16}em) {
//       ${css(...args)};
//     }
//   `;

//   return acc;
// }, {});

export const media = {
  handheld_lg: (...args) => css`
    @media (min-width: ${sizes.mid / 16}em) {
      ${css(...args)};
    }
  `,
  handheld_mid: (...args) => css`
    @media (min-width: ${sizes.sm / 16}em) and (max-width: ${sizes.mid /
        16}em) {
      ${css(...args)};
    }
  `,
  handheld_sm: (...args) => css`
    @media (max-width: ${sizes.sm / 16}em) {
      ${css(...args)};
    }
  `
};
