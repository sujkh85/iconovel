import styled from 'styled-components';

const Divider = styled.div`
  margin: 1rem 0;
  line-height: 1;
  height: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(0, 0, 0, 0.85);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  ${props =>
    props.horizontal &&
    `border-top: 1px solid rgba(34,36,38,.15);
    border-bottom: 1px solid rgba(255,255,255,.1);`};
`;

export default Divider;

// Divider.defaultProps = {
//   type: horizontal
// };
//   propTypes: {
//     label: PropTypes.string.isRequired,
//     icxStyle: PropTypes.oneOf(['default', 'primary', 'secondary', 'disabled'])
//   }
