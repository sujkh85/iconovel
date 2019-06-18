import styled from 'styled-components';
import Input from './TextInputs';
import theme from 'styled-theming';
import { color } from '../../config';

const checkBorderColor = theme('mode', {
  light: color.gray85,
  dark: color.gray30
});
const checkBorderHoverColor = theme('mode', {
  light: color.gray10,
  dark: color.gray85
});
const LabelTextColor = theme('mode', {
  light: color.gray70,
  dark: color.graydark
});
const LabelTextHoverColor = theme('mode', {
  light: color.gray10,
  dark: color.graydark
});
const DisableRadioBg = theme('mode', {
  light: color.gray43,
  dark: color.gray30
});

export const RadioNotice = styled(Input.Notice)`
  position: relative;
  bottom: 0;
`;

export const RadioCheckmark = styled.span.attrs({
  className: 'checkmark'
})`
  position: relative;
  height: 16px;
  width: 16px;
  border: 1px solid
    ${props => (props.disabled ? 'transparent' : checkBorderColor)};
  margin-right: 10px;
  border-radius: 50%;
  background-color: ${props => props.disabled && DisableRadioBg};
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`;

export const LabelContainer = styled.label`
  /* display: ${props => props.align}; */
  display:flex;
  align-items: center;
  position: relative;
  /* padding-left: 26px; */
  /* margin-bottom: 12px; */
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  font-size: 12px;
  user-select: none;
  color: ${LabelTextColor};

  &:first-child {
    margin-left:0;
  }

  &:hover input:not(:disabled) ~ .checkmark {
    border-color: ${checkBorderHoverColor};
  }
  & .radioInput:checked:not(:disabled) ~ .labeltext{
    font-weight:bold;
  }
  &:hover input:not(:disabled) ~ .labeltext,
  & input:checked:not(:disabled) ~ .labeltext{
    /* color: ${LabelTextHoverColor}; */
  }

  & input:checked:not(:disabled) ~ .checkmark {
    border-color: ${checkBorderHoverColor};
  }

  & input:checked ~ .checkmark:after {
    display: block;
  }

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
`;

const Radio = styled(LabelContainer).attrs({
  className: 'input-radio'
})`
  & .checkmark:after {
    top: 3px;
    left: 3px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${checkBorderHoverColor};
  }
`;

Radio.Notice = RadioNotice;
Radio.Checkmark = RadioCheckmark;

export default Radio;
