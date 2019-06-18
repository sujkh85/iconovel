import styled from 'styled-components';
import theme from 'styled-theming';
import { color, gray43_gray64, gray98_gray23 } from '../../config';

const Table = styled.table`
  /* table-layout: fixed; */
  border-collapse: collapse;
  width: 100%;
  table-layout: ${props => props.fixed && 'fixed'};
  font-size: 12px;
  thead {
    tr {
      border-bottom: 1px solid ${gray43_gray64};
    }
    th {
      padding: ${({ padding }) => (padding ? padding : '0 7px')};
    }
  }
  tbody {
    width: 100%;
    overflow: auto;
    tr:nth-child(odd) {
      background-color: ${gray98_gray23};
    }
    td {
      padding: ${({ padding }) => (padding ? padding : '7px 7px')};
    }

    tr.select {
      background-color: ${color.purple};
      td {
        color: #fff;
      }
      & .num-col {
        color: #fff;
        font-weight: bold;
        .decimal {
          color: #fff;
        }
        .suspend {
          background-color: #fff;
          color: ${color.purple};
          font-weight: normal;
        }
      }
    }
  }
  th {
    text-align: center;
    height: 28px;
  }
  th,
  td {
    /* padding: 3px; */
    font-weight: normal;
    color: #808080;
  }
`;

const OrderTable = Table.extend`
  table-layout: fixed;

  th,
  td {
    height: ${({ headerHeight }) => (headerHeight ? headerHeight : '50px')};
  }

  td {
    color: #4d4d4d;
    font-weight: normal;
    height: 50px;
    font-size: 14px;
    padding: 0;
  }
  .canceled td {
    color: #ccc;
    span,
    .decimal,
    .ct {
      color: #ccc;
    }
  }
  .on {
    &.num {
      font-weight: bold;
    }
    color: ${color.purple};
  }
  tr:hover {
    .ic-edit {
      display: inline-flex;
    }
  }
  .cursor {
    cursor: pointer;
  }
`;

const Th = styled.th.attrs({
  className: 'th'
})`
  &.th {
    padding: ${props =>
      props.align ? '0 40px' : props.padding ? props.padding : '0 7px'};
  }
`;

const Column = styled.td.attrs({
  className: 'td'
})`
  /* width: ${props => props.columnWidth}; */
  position:relative;
  text-align: ${props => (props.align ? props.align : 'center')};
  &.td{
    padding: ${props =>
      props.align ? '0 40px' : props.padding ? props.padding : '0 7px'};
  }
  &.purple{
    color: ${color.purple}
  }
  &>span {
    color: ${props => {
      if (props.side === 'Buy' || props.up) {
        return color.green;
      } else if (props.side === 'Sell' || props.down) {
        return color.red;
      }
    }};
  }
  
  span.text-over{
    display: inline-block;
  }
  .updown-span{
    justify-content:center;
  }
  .symbol {
    font-size: 10px;
    color: #b3b3b3;
  }
  .num-col{
    display:flex;
    justify-content:center;
    span{
      flex:1;
    }
    .integer{
      text-align:right;
    }
    .decimal{
      position:relative;
      text-align:left;
      color:#b3b3b3;
    }
  }
  .text-over{
    padding: 0 6px ;
  }
  &.edit{
    .decimal{
      padding-right:14px;
    }
  }
  .ic-edit{
    position:absolute;
    display:none;
    cursor:pointer;
    top:50%;
    margin-top:-7px;
    right:0;
  }
  .tool-tip-area:not(.center){
    top: 50%;
    right: 14px;
    transform: translate(0, -50%);
  }
  .ct-type-col{
    display: flex;
    justify-content: center;
    align-items:center;
    .num-col{
      flex: 0 0 121px;
    }
    .decimal{
      flex: 0 0 69px;
    }
    .ct{
      flex: 0 0 59px;
      font-size:12px;
      text-align:left;
      color:#b3b3b3;
    }
  }
  .suspend{
    flex:none;
    display:inline-block;
    text-align:center;
    /* width: 72px; */
    padding: 0 6px;
    height: 18px;
    line-height:18px;
    border-radius: 10px;
    background-color: #ff2659;
    margin-left:10px;
    color: #fff;
  }
`;

const Empty = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PSpanWrap = styled.span.attrs({
  className: 'difac'
})`
  width: 100%;
  padding: ${({ padding }) => padding};
`;
const PSpanItem = styled.span`
  text-align: ${({ align }) => align};
  flex: ${({ flex }) => flex};
  &.symbol {
    font-size: 12px;
    margin-left: 4px;
  }
`;

Table.PSpanItem = PSpanItem;
Table.PSpanWrap = PSpanWrap;
Table.Column = Column;
Table.Th = Th;
Table.Empty = Empty;
Table.Orders = OrderTable;
export default Table;
