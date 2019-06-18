import styled, { css } from 'styled-components';
import { color } from '../../config';
const DateCell = styled.div`
  position: relative;
  width: 70px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #808080;
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
  &.pick {
    width: auto;
    height: 50px;
    line-height: normal;
    display: flex;
    align-items: center;
    .select-date {
      padding: 0 7px 0 6px;
    }
    .icon {
      justify-content: center;
      width: 50px;
      height: 50px;
    }
  }
  ${({ selected }) =>
    selected &&
    css`
      color: ${color.purple};
      &:after {
        content: '';
        height: 2px;
        background: ${color.purple};
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
      }
    `};
`;

export default DateCell;
