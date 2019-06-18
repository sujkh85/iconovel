import styled from 'styled-components';

export const List = styled.ul`
  overflow: hidden;
  font-size: 12px;
  & li {
    ${props => props.align === 'horizental' && 'float: left'};
  }
`;
export const ListItem = styled.li``;

List.defaultProps = {
  align: 'horizental'
};
export default List;
