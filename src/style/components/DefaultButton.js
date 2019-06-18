import styled from 'styled-components';

const DefaultButton = styled.button.attrs({
  className: 'button'
})`
  color: inherit;
  cursor: pointer;
  margin: 0;
  border: 0;
  display: inline-flex;
  padding: 0;
  outline: none;
  position: relative;
  user-select: none;
  vertical-align: middle;
  font-family: Arial;
  align-items: center;
  justify-content: center;
  -moz-appearance: none;
  text-decoration: none;
  background-color: transparent;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
`;
export default DefaultButton;
