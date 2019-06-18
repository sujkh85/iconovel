import styled, { css } from 'styled-components';
import { color, fontFamily } from '../config';
import theme from 'styled-theming';

const Textcolor = theme('mode', {
  light: color.gray10,
  dark: color.graydark
});

// TODO breakpoint 공통

// export const Heading = styled.h1`
//   margin-bottom: 0;
//   font-size: ${fontSize.displayLarge};
//   font-weight: ${fontWeight.bold};
//   /* line-height: ${lineHeight.displayLarge}; */
//   @media (min-width: 480px) {
//     font-size: 48px;
//   }
//   @media (min-width: 768px) {
//     font-size: 72px;
//   }
//   & + h1,
//   & + h2,
//   & + p {
//     margin-top: 21px;
//   }
// `;
// const Texts = styled.h1`
//   font-family: Arial, sans-serif;
//   margin-bottom: 0;
// `;
// const FontFamily = {
//   text: 'Arial, sans-serif',
//   number: 'Roboto, sans-serif'
// };
const FontDefault = css`
  font-family: ${fontFamily.text};
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: normal;
  /* color: ${Textcolor}; */
`;

export const H1 = styled.h1`
  ${FontDefault};
`;
export const H4 = styled.h4`
  ${FontDefault};
`;

export const NumTxt = styled.span`
  font-family: ${fontFamily.number};
  color: ${props => {
    if (props.type === 'up') {
      return color.green;
    } else if (props.type === 'down') {
      return color.red;
    } else {
      return Textcolor;
    }
  }};
`;
