import styled from 'styled-components';
import { color } from '../../config';
import DefaultButton from '../DefaultButton';
const BasicDefaultButton = styled(DefaultButton)`
  & + & {
    margin-left: 2px;
  }
  &:disabled {
    /* border: none; */
    color: ${color.gray70};
    background-color: ${color.gray94};
    border-color: ${color.gray94};
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const BasicButton = styled(BasicDefaultButton).attrs({
  className: 'basic-button'
})`
  padding: 10px 16px;
  min-width: 80px;
  min-height: 28px;
  background-color: ${props => (props.main ? color.purple : color.gray30)};
  box-sizing: border-box;
  font-weight: bold;
  & + .basic-button {
    margin-left: 12px;
  }

  &:hover:not([disabled]) {
    background-color: ${props => (props.main ? color.purple01 : color.gray40)};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
  &:disabled,
  &.disabled {
    color: ${color.gray70};
    background-color: ${color.gray94};
  }
`;

export const BasicButtonLarge = styled(BasicDefaultButton).attrs({
  className: 'basic-button lg'
})`
  padding: 20px;
  min-width: 80px;
  width: 560px;
  margin: 0 auto;
  min-height: 28px;
  background-color: ${color.purple};
  box-sizing: border-box;
  font-weight: bold;
  border-radius: 27px;

  .or {
    opacity: 0.4;
  }
  a {
    color: #fff;
    &:hover {
      text-decoration: underline;
    }
  }

  &:hover:not([disabled]) {
    background-color: ${color.purple01};
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  }
  &:disabled,
  &.disabled {
    color: #b3b3b3;
    background-color: #e6e6e6;
  }
`;

export const ButtonFull = styled(BasicDefaultButton)`
  width: 100%;
  min-height: 36px;
  background-color: ${color.purple};
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  font-weight: bold;
  &:hover:not([disabled]) {
    background-color: ${color.purple01};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  }
  &:disabled {
    color: ${color.gray70};
    background-color: ${color.gray94};
  }
  &.black {
    color: ${color.white};
    background-color: ${color.gray30};
  }
`;

export const ButtonLine = styled(BasicDefaultButton)`
  min-width: 56px;
  min-height: 20px;
  width:${({ width }) => width};
  font-size: 12px;
  color: ${color.graydark};
  padding: 5px 10px;
  border: solid 1px ${color.gray85};
  &:hover:not([disabled]) {
    color: ${color.gray30};
    background-color:#e6e6e6
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1); */
    /* border-color: ${color.purple}; */
  }
  /* &:disabled{
    border-color:${color.gray94}
  } */
`;

export const BasicLodingButton = styled(BasicButton)`
  width: 100%;
  pointer-events: ${({ isLoading }) => isLoading && 'none'};
  cursor: ${({ isLoading }) => isLoading && 'progress'};
`;
