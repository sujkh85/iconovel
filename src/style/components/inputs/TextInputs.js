import styled from 'styled-components';
import {
  color,
  gray60_gray10,
  gray85_gray64,
  gray10_gray60,
  white_transparent,
  gray95_gray30,
  gray10_white,
  white_gray10,
  gray20_white,
  gray60_gray40
} from '../../config';

const InputWrap = styled.div.attrs({
  className: 'trade-input-wrap dfac'
})`
  font-size: 12px;
  line-height: 24px;
  position: relative;
  background-color: transparent;
  font-family: Arial, sans-serif;
  cursor: auto;
  margin-top: ${props => (props.marginTop ? props.marginTop : '14px')};

  .exchange-cost-tooltip {
    display: none;
    padding: 6px 10px 5px;
    position: absolute;
    top: -33px;
    left: 49px;
    margin-right: -5em;
    color: ${white_gray10};
    background: ${gray10_white};
    border-radius: 4px;
    line-height: normal;

    &:after {
      content: '';
      position: absolute;
      border-top: 10px solid ${gray10_white};
      border-right: 10px solid transparent;
      border-left: 0px solid transparent;
      bottom: -8px;
      left: 10px;
    }
  }
  input:focus ~ .exchange-cost-tooltip {
    display: inline-block;
  }
`;
const Input = styled.input.attrs({ autoComplete: 'off' })`
  padding: 0px;
  position: relative;
  width: 100%;
  height: 28px;
  padding: 0 10px;
  color: ${gray10_white};
  border-radius: 4px;
  border: 1px solid ${gray85_gray64};
  background-color: ${white_transparent};
  font-style: inherit;
  font-variant: inherit;
  font-weight: inherit;
  font-stretch: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline: none;

  ::placeholder {
    color: ${gray60_gray40};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    color: ${gray60_gray40};
  }

  ::-ms-input-placeholder {
    color: ${gray60_gray40};
  }
  &:hover:not(:disabled) {
    border-color: ${props => {
      if (!props.readOnly) {
        return gray10_gray60;
      } else {
        return false;
      }
    }};
  }
  &:hover:not(:disabled) ~ .numberHandler {
    &:after {
      background-color: ${props => {
        if (!props.readOnly) {
          return gray10_gray60;
        } else {
          return false;
        }
      }};
    }
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${gray95_gray30};
    color: ${gray60_gray10};
  }
`;

const Label = styled.label`
  font-size: 12px;
  color: ${color.gray60};
  margin: 0;
  flex-basis: 25%;
`;

const Notice = styled.div`
  position: absolute;
  bottom: -10px;
  font-size: 12px;
  line-height: 12px;
  ${props => props.error && 'color: rgb(244, 67, 54)'};
  ${props => props.warning && 'color: orange'};
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
`;

const TextNumber = styled(Input)`
  /* width: 201px; */
  width: ${props => props.inputWidth};
  padding: 0 69px 0 10px;
  color: ${gray20_white};
`;
const CoinLabel = styled.span`
  /* font-size: 12px; 1026-수정함 다시확인필요 */
  font-size: 10px;
  pointer-events: none;
  color: ${gray20_white};
  position: absolute;
  /* top: 16px; */
  right: ${props => (props.isShowHandleNumber ? '28px' : '12px')};
`;
const NumberHandler = styled.span`
  position: absolute;
  right: 0;
  width: 20px;
  height: 28px;
  display: block;
  &:after {
    content: '';
    width: 1px;
    height: 28px;
    background-color: ${gray85_gray64};
    display: block;
    position: absolute;
    top: 0;
  }

  & .input-button-increser {
    height: 14px;
    user-select: none;
    overflow: hidden;
    cursor: pointer;
    .ic-input {
      height: 14px;
      font-size: 19px;
      display: block;
      color: ${gray10_gray60};
      &:before {
        content: '\\e91b';
        display: inline-block;
        height: 14px;
        position: relative;
      }
      &:hover:before {
        color: ${gray10_gray60};
      }
    }

    .ic-input-down {
      transform: rotate(180deg);
    }
    .ic-input-down:before {
      top: -5px;
    }
    .ic-input-up:before {
      bottom: 5px;
    }
  }
`;

Input.Label = Label;
Input.Wrap = InputWrap;
Input.Notice = Notice;
Input.TextNumber = TextNumber;
Input.CoinLabel = CoinLabel;
Input.CoinLabel = CoinLabel;
Input.NumberHandler = NumberHandler;

export default Input;
