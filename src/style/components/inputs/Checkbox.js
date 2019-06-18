import styled from 'styled-components';
import { LabelContainer, RadioNotice } from './Radio';
import theme from 'styled-theming';
import {
  color,
  gray10_gray60,
  white_mainDark,
  gray10_white,
  gray10_graydark,
  gray43_gray30,
  gray85_gray30
} from '../../config';

const Checkbox = styled(LabelContainer)`
  align-items:${({ boxAlign }) => boxAlign};
  justify-content:${({ justifyAlign }) => justifyAlign};
  color: ${color.gray10};
  /* color: ${gray10_graydark}; */
  font-weight: 400;
  &:hover input:not(:disabled) ~ .checkmark {
    border-color: ${({ exception }) => (!exception ? color.gray85 : '#fff')};
    /* border-color: ${({ exception }) =>
      !exception ? gray85_gray30 : '#fff'}; */
  }

  .checkmark {
    &.checkbox-v-active path {
      fill: ${props => props.checkType && color.white};
      /* fill: ${props => props.checkType && white_mainDark}; */
    }
  }

  & input:checked ~ .checkmark.checkbox {
    background-color: ${color.gray10};
    /* background-color: ${gray10_white}; */
  }
  & input:checked ~ .checkmark.radiocheck {
    background-color: ${color.gray10};
    /* background-color: ${gray10_white}; */
    border: 1px solid ${color.gray10};
    /* border: 1px solid ${gray10_white}; */
  }

  &.basic {
    & input:checked ~ .checkmark.checkbox {
      background-color: ${color.purple};
      border:0;
      &.checkbox-v-active path {
        fill: #fff;
      }
    }
    &:hover input:not(:disabled):not(:checked) ~ .checkmark {

      &.checkbox-v path {
        fill: ${({ exception }) => (!exception ? color.purple : '#fff')};
       
        d:${({ exception }) =>
          !exception &&
          `path('M851.822 215.040l103.497 103.424-490.569 490.569-271.214-271.141 103.497-103.497 167.717 167.717z')`};
        d:${({ exception }) =>
          !exception &&
          `M851.822 215.040l103.497 103.424-490.569 490.569-271.214-271.141 103.497-103.497 167.717 167.717z`};
      }
    }
    & .checkmark {
      margin-right: 8px;
    }

    .title {
      display: block;
      color: ${color.gray30};
      font-size: 16px;
      font-style: normal;
      font-weight: bold;
      margin-bottom: 2px;
    }

    .description {
      font-size: 12px;
      line-height: 1.5;
      color: ${color.graydark};
    }
  }
  .labeltext {
    /* top: 1px; */
    position: relative;
    display: block;
    color: #808080;
  }
  &:hover:disabled {
    border-color: transparent;
  }
  .checkmark {
    border-radius: 4px;
    margin-right: 8px;
    border: 1px solid;
    width: 18px;
    height: 18px;
    /* border-color: ${({ exception }) =>
      exception ? 'rgba(255,255,255,.0.5)' : gray85_gray30}; */
    border-color: ${({ exception, disabled }) =>
      disabled
        ? 'transparent'
        : exception
          ? 'rgba(255,255,255,0.5)'
          : color.gray85};
    /* background-color: ${props => props.disabled && color.gray43}; */
    background-color: ${props => props.disabled && 'rgba(86,62,179,0.5)'};
    &.checkbox-v path {
    fill: ${({ exception }) =>
      !exception ? '#d9d9d9' : 'rgba(255,255,255,0.5)'};
    }
  }
`;

// const ExCheckbox = styled()``;
Checkbox.Notice = RadioNotice;

export default Checkbox;
