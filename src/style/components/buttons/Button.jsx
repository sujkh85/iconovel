import styled from 'styled-components';
import PropTypes from 'prop-types';
import { truncate } from '../../utils';
import theme from 'styled-theming';
import {
  color,
  gray10_gray20,
  gray43_gray60,
  gray10_gray85,
  gray10_gray43,
  gray43_gray64
} from '../../config';
import DefaultButton from '../DefaultButton';

const DisabledButtonBg = theme('mode', {
  light: color.gray80,
  dark: color.gray30
});
const IaoDisabledButtonBg = theme('mode', {
  light: color.gray80,
  dark: color.gray64
});
const IaoDisabledButtonColor = theme('mode', {
  light: color.gray60,
  dark: color.color2626
});
const DisabledButtonGroupBorderColor = theme('mode', {
  light: color.white,
  dark: color.disabledBorderGrayDark
});
const DisabledButtonColor = theme('mode', {
  light: color.gray60,
  dark: color.gray10
});

const SmallButtonBg = theme('mode', {
  light: color.white,
  dark: color.transparent
});
const SmallButtonBorder = theme('mode', {
  light: color.gray85,
  dark: color.gray22
});

export const ExchangeDefaultButton = styled(DefaultButton)`
  &:disabled,
  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    border: none;
    background-color: ${DisabledButtonBg};
    color: ${DisabledButtonColor};
  }
`;

export const BuyButton = styled(ExchangeDefaultButton).attrs({
  className: 'btn-trade'
})`
  min-width: 250px;
  border-radius: 18px;
  height: 32px;
  background-color: ${color.green};
  &:hover {
    background-color: ${color.greenHover};
  }
`;

export const SellButton = styled(ExchangeDefaultButton).attrs({
  className: 'btn-trade'
})`
  min-width: 250px;
  border-radius: 18px;
  height: 32px;
  background-color: ${color.red};
  &:hover {
    background-color: ${color.redHover};
  }
`;
export const IeoButton = styled(ExchangeDefaultButton).attrs({
  className: 'btn-trade'
})`
  min-width: 250px;
  border-radius: 18px;
  height: 32px;
  background-color: ${color.purple};
  &:hover {
    background-color: ${color.purple01};
  }
  &:disabled {
    pointer-events: none;
    background-color: ${IaoDisabledButtonBg};
    color: ${IaoDisabledButtonColor};
  }
`;

const CopyIEOButtonStyle = IeoButton.withComponent('div');
export const LoginTradeButton = styled(CopyIEOButtonStyle).attrs({
  className: 'btn-login-signup'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${color.purple};
  }
  span {
    color: rgba(255, 255, 255, 0.4);
  }
  &.btn-login-signup a {
    display: inline-block;
    color: rgba(255, 255, 255, 0.9);
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SmallButton = styled(ExchangeDefaultButton)`
  font-size: 12px;
  border: 1px solid ${SmallButtonBorder};
  color: ${color.gray60};
  min-width: 70px;
  min-height: 20px;
  background-color: ${SmallButtonBg};
  /* ${props => props.disabled && 'border-color:#fff'}; */
  &:active {
    color: ${gray10_gray43};
  }
`;

SmallButton.propTypes = {
  size: PropTypes.oneOf(['default', 'small']),
  disabled: PropTypes.bool
};
SmallButton.defaultProps = {
  size: 'default'
};

export const SmallTabButton = styled(SmallButton)`
  font-size: 10px;
  color: ${props => {
    if (props.selected) return gray10_gray43;
  }};
  min-width: 51px;
  min-height: 20px;
  &:disabled:not(:first-child) {
    border-width: 0 0 0 1px;
    border-left-color: ${DisabledButtonGroupBorderColor};
    border-style: solid;
  }
  &:hover:not(:disabled):not(:active) {
    background-color: ${gray43_gray64};
    color: ${gray10_gray43};
  }
  &:active {
    color: ${gray10_gray85};
  }
`;

export const ButtonGroup = styled.div.attrs({
  className: 'btn-group'
})`
  & button + button {
    margin-left: -1px;
  }
  & button:last-child:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  & button:first-child:not(:last-child) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  & button:not(:first-child):not(:last-child) {
    border-radius: 0;
  }
`;

//
// End Style
//
///////////////////////////////
//
// Start component
//

// const typeCheck = {
//   defaultProps: {
//     icxStyle: 'default',
//     onClick: () => {}
//   },
//   propTypes: {
//     label: PropTypes.string.isRequired,
//     icxStyle: PropTypes.oneOf(['default', 'primary', 'secondary', 'disabled'])
//   }
// };
