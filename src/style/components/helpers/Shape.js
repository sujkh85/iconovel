import styled from 'styled-components';
import { color } from '../../config';

export const Triangle = styled.i.attrs({
  className: 'arrow'
})`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 3.5px solid transparent;
  border-right: 3.5px solid transparent;
  margin-right: 4.5px;

  &.up {
    border-bottom: 8px solid ${color.green};
  }
  &.down {
    border-top: 8px solid ${color.red};
  }
`;
