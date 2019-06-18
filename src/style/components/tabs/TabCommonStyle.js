import {
  color,
  gray20_graydark,
  gray20_gray43,
  gray20_gray70,
  white_transparent,
  gray98_opacityGray,
  gray43_gray64
} from '../../config';
import styled, { css } from 'styled-components';
import DefaultButton from '../DefaultButton';

export const TabWrapper = styled.div.attrs({
  className: 'tab-wrap'
})`
  & .search {
    padding: 0 20px 14px;
    border-bottom: 1px solid ${gray43_gray64};
  }
`;
export const TabContent = styled.div.attrs({
  className: 'tab-contents'
})`
  height: 100%;
`;
export const TabList = styled.div.attrs({
  className: 'tab-list'
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${gray43_gray64};
  justify-content: ${props =>
    props.tabsPosition === 'end' ? 'flex-end' : 'flex-start'};
`;

export const TabButton = styled(DefaultButton)`
  font-size: 12px;
  width: ${props => props.fixedWidth};
  padding: ${props => !props.fixedWidth && '0 20px'};
  height: 44px;
  display: inline-flex;
  position: relative;
  color: ${props => (props.selected ? gray20_gray43 : gray20_graydark)};
  border-radius: 0;

  &.selected {
    font-weight: bold;
  }
  &.selected:after {
    content: '';
    display: block;
    height: 4px;
    background: ${gray20_gray70};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .ic-refresh {
    display: none;
    margin-left: 6px;
  }
  &:hover {
    background-color: ${gray98_opacityGray};
  }
  &.tab-btn-refresh.selected:hover {
    .ic-refresh {
      display: flex;
    }
  }

  ${({ usePage }) =>
    usePage === 'basic' &&
    css`
      color: ${props => (props.selected ? color.purple : '#4d4d4d')};
      &.selected:after {
        background: ${color.purple};
      }
    `};
`;
export const Content = styled.div.attrs({
  className: 'tab-contents-wrap'
})`
  height: 100%;
`;

export const TabButton1 = styled(DefaultButton)`
  color: ${props => (props.selected ? color.purple : '#4d4d4d')};
  font-size: 14px;
  height: 50px;
  border-radius: 0;
  &.selected:after {
    content: '';
    display: block;
    height: 4px;
    background: ${color.purple};
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;
