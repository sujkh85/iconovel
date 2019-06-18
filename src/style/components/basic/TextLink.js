import styled from 'styled-components';
import { color, gray10_gray85 } from '../../config';
const TextLink = styled.a.attrs({
  className: 'text-link difac'
})`
  user-select: none;
  color: ${props =>
    props.type === 'secondary'
      ? props.arrowDirection
        ? color.gray30
        : color.gray70
      : color.purple};
  font-size: ${props => (props.fontSz ? props.fontSz + 'px' : '14px')};
  position: relative;
  margin-left: ${props => props.arrowDirection === 'left' && '16px'};
  margin-right: ${props => props.arrowDirection === 'right' && '16px'};
  cursor: pointer;

  &:hover:not(.disabled) {
    text-decoration: underline;
    .setting-icon path {
      fill: ${gray10_gray85};
    }
  }
  .link-arrow {
    position: absolute;
    left: ${props => props.arrowDirection === 'left' && '-16px'};
    right: ${props => props.arrowDirection === 'right' && '-16px'};
    transform: ${props => props.arrowDirection === 'left' && 'rotate(180deg)'};
  }
  &.disabled {
    cursor: not-allowed;
    color: ${props =>
      props.type === 'secondary'
        ? props.arrowDirection
          ? color.gray70
          : color.gray86
        : color.gray70};
  }
`;

const TypeA = styled.a.attrs({
  className: 'text-link'
})`
  color: #999;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    color: #333;
  }
  &.disabled {
    color: #ccc;
    pointer-events: none;
  }
`;
const TypeB = styled.a.attrs({
  className: 'text-link'
})`
  cursor: pointer;
  color: ${({ main, invert }) =>
    main ? color.purple : !invert ? '#333' : '#E6E6E6'};
  font-size: 12px;
  text-decoration: underline;
  font-weight:${({ bold }) => bold && 'bold'};
  &:hover {
    /* color: ${({ type, invert }) =>
      type === 'main' ? color.purple : !invert ? '#333' : '#666'}; */
    text-decoration: underline;
  }
  &.disabled {
    color:${({ invert }) => (!invert ? '#ccc' : '#4d4d4d')} ;
    pointer-events: none;
  }
`;
TextLink.TypeA = TypeA;
TextLink.TypeB = TypeB;

export default TextLink;
