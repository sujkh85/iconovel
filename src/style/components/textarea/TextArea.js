import styled, { css } from 'styled-components';

const TextArea = styled.textarea`
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  resize: none;
  display: block;
  width: 100%;
  padding: 20px;
  &::placeholder {
    color: #b3b3b3;
    line-height: normal;
  }
  ${({ minHeight }) => css`
    min-height: ${minHeight};
  `};
`;
export default TextArea;
