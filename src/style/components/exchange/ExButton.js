import styled from 'styled-components';
import DefaultButton from '../DefaultButton';
import {
  graydark_gray10,
  gray60_gray10,
  gray80_gray30,
  gray60_graydark,
  gray85_gray64,
  gray43_gray60,
  gray10_gray20
} from '../../config';

// color - white = 999
// bordercolor - white = d9d9d9

// hover - color - white = 1a1a1a
// hover - background - white = e6e6e6
// hover - border - white = 0

// active - color - white = 1a1a1a
// active - bordercolor - white = d9d9d9

// disabled - color - white = 999
// disabled - backgroundcolor - white = ccc
// disabled - border - white = 0

const ExDefaultButton = styled(DefaultButton)`
  & + & {
    margin-left: 2px;
  }
  min-width: 50px;
  min-height: 20px;
  font-size: 12px;
  color: ${gray60_graydark};
  vertical-align: initial;
  padding: 0 10px;
  border: 1px solid ${gray85_gray64};
  &:disabled {
    border: none;
    color: ${gray60_gray10};
    background-color: ${gray80_gray30};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const ExButton = styled(ExDefaultButton).attrs({
  className: 'ex-button'
})`
  & + .ex-button {
    margin-left: 12px;
  }

  &:hover:not([disabled]) {
    color: ${gray10_gray20};
    background-color: ${gray43_gray60};
    border-color: ${gray43_gray60};
  }
  &:active:not([disabled]) {
    color: ${gray10_gray20};
  }
`;

export const ExDropDownButton = styled(ExDefaultButton).attrs({
  className: 'ex-button ex-dropdown'
})`
  display: inline-block;
  padding: 0;
  position: relative;
  padding: 0 10px;
  &:disabled {
    pointer-events: none;
    color: ${graydark_gray10};
    cursor: not-allowed;
  }
`;
