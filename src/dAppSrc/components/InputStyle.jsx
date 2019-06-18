import styled from 'styled-components';
import color  from './color';

export const BasicInputWrap = styled.div`
  border: 0;
  display: flex;
  padding: 0;
  position: relative;
  min-width: 0;
  flex-direction: column;
  
  .valiation-text {
    position: absolute;
    bottom: 3px;
    left: 10px;
    font-size: 12px;
  }

  &:hover:not(.disabled):not(.read-only) {
    .basic-label {
      color: ${color.gray30};
    }
    .input-icon > i {
      color: ${color.gray30};
    }
  }
  &.read-only{
    .border{
      background-color:red;
    }
  }

  .input-box {
    color: rgba(0, 0, 0, 0.87);
    position: relative;
    font-size: 14px;
    margin-top: 20px;
    &.focus{
      .border{
        height:2px;
        background-color:rgb(0,188,212)
      }
    }
    &.dirty:not(.focus){
      .border{
        background-color:${color.gray85}
      }
    }
    input:read-only + .border{
      background-color:transparent;
      border-bottom:1px dotted #d9d9d9;
    }
    
    .border{
      position:absolute;
      bottom:20px;
      left:0;
      right:0;
      height:1px;
      background-color:${color.gray30}
    }
    .basic-input {
      position:relative;
      font: inherit;
      color: currentColor;
      width: 100%;
      border: 0;
      margin: 0;
      padding: 10px;
      font-weight:bold;
      margin-bottom: 20px;
      outline: none;
      display: block;
      min-width: 0;
      flex-grow: 1;
      background: none;
      -webkit-tap-highlight-color: transparent;

      
      &[required]:after{ content: ' *'; color: red; }
      &:disabled {
        color: ${color.gray70};
        border-bottom: 1px solid ${color.gray85};
      }

      &:read-only {
        color: ${color.gray70};
        border-bottom: 1px dotted ${color.gray85};
      }
    }

    .input-icon {
      position: absolute;
      right: 10px;
      top: 0;
      bottom: 20px;
      display: flex;
      align-items: center;
    }
    .ic-input-eye {
      font-size: 20px;
      color: ${color.gray70};
    }
  }
  &.has-error .input-box {
    .border {
      background-color:${color.red} !important;
      height:1px;
    }
    .valiation-text {
      color: ${color.red};
    }
  }
  &.has-error .fake-select {
    .border {
      background-color:${color.red} !important;
      height:1px;
    }
    .valiation-text {
      color: ${color.red};
    }
  }
`;

export const BasicLabel = styled.label.attrs({
  className: 'basic-label'
})`
  position: absolute;
  top: 31px;
  left: 10px;
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  z-index: 1;
  transform: ${props =>
    props.isFocused ? 'translate(0px, -26px)' : 'translate(0px, 0px)'};
  font-size: ${props => (props.isFocused ? '12px' : '14px')};
  transform-origin: top left;
  pointer-events: none;
  user-select: none;
  color: ${color.gray70};
`;
