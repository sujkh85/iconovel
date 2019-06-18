import styled, { css } from 'styled-components';
import color from './color';

export const F2BgBox = styled.div`
  background: #f2f2f2;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: ${({ padding }) => (!padding ? '50px' : padding)};
`;

export const F2BgBoxRow = styled.div`
  display: flex;
  justify-content: space-around;
  strong {
    text-align: center;
    font-size: 22px;
    margin: 20px 0;
  }
  p {
    line-height: 1.57;
    font-size: 14px;
    color: #808080;
    text-align: center;
  }
  .item {
    flex: 0 0 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    strong {
      color: #4d4d4d;
    }
  }
  .priceterm {
    font-size: 28px;
    font-weight: 300;
    display: inline-block;
    margin-bottom: 20px;
    color: #4d4d4d;
    .unit {
      font-size: 16px;
    }
  }
`;

const PanelHeader = styled.div.attrs({ className: 'dfac' })`
  margin-bottom: 13px;
  h1 {
    font-size: 18px;
    color: #4d4d4d;
  }
  .link,
  a {
    display: inline-flex;
    align-items: center;
    color: #808080;
  }

  a {
    margin: 0 5px;
  }
`;

export const PanelHeaderAloneLink = styled(PanelHeader)`
  justify-content: flex-end;
  & > span {
    color: #808080;
  }
`;
export const PanelHeaderWithLink = styled(PanelHeader)`
  justify-content: space-between;
  width: 100%;
`;
export const WhiteDropBg = styled.div`
  background-color: #fff;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const CenterBox = styled.div`
  text-align: center;
  margin: 0 auto;
`;
export const PupleRoundBox = styled.div`
  position: relative;
  border-radius: 20px;
  background-color: #e7e0ff;
  display: flex;
  align-items: center;
  color: ${color.purple};
  padding: 12px 40px 12px 30px;
  font-size: 14px;
  .close {
    position: absolute;
    right: 20px;
    top: 13px;
    width: 14px;
    height: 14px;
    /* text-indent: -999px; */
    span {
      position: relative;
    }
    span:after,
    span:before {
      content: '';
      display: inline-block;
      width: 14px;
      height: 1.5px;
      background-color: rgba(86, 62, 179, 0.5);
      position: absolute;
      top: 6px;
      left: 0;
    }
    span:before {
      transform: rotate(45deg);
    }
    span:after {
      transform: rotate(-45deg);
    }
  }
`;

const DefaultPanel = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 4px;
`;

export const ShadowBox = styled(DefaultPanel)`
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
`;
export const ShadowBox1 = styled(DefaultPanel)`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.04);
  ${({ hover }) =>
    hover &&
    css`
      transition: box-shadow 0.3s ease-in;
      &:hover {
        box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
      }
    `};
  ${({ col }) =>
    col &&
    css`
      & + & {
        margin-left: 10px;
      }
    `};
`;

export const TwoColBox = styled.div`
  display: flex;

  .col {
    background-color: #fff;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    flex: 0 0 550px;
    padding: 32px 40px;
  }
  .col + .col {
    margin-left: 10px;
  }
`;

export const Height50Box = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 30px;
  border-bottom: 1px solid #e6e6e6;
  color: #808080;
`;

export const BoxUnderText = styled.span`
  display: block;
  color: #b3b3b3;
  margin: 20px 20px 0;
  text-align: ${({ align }) => (align ? align : 'right')};
`;
