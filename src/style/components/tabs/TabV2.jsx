import React from 'react';
import cn from 'classnames';
import { TabButton } from './TabCommonStyle';
import styled from 'styled-components';
import { color } from '../../config';
const Wrap = styled.div`
  display: flex;
  button {
    flex: 1;
    font-size: 14px;
    color: #4d4d4d;
    height: 50px;
    border-bottom: 1px solid #e6e6e6;
  }

  button.selected {
    color: ${color.purple};
    &:after {
      background: ${color.purple};
    }
  }
`;
export default class TabV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: this.props.selectIndex ? this.props.selectIndex : 0
    };
  }

  onClickButton = (value, index, query) => {
    // console.log('INDEXXXXX', index);
    this.setState(
      {
        selectIndex: index
      },
      () => {
        if (this.props.onChange) {
          this.props.onChange({
            value,
            index,
            query
          });
        }
      }
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.selectIndex !== prevProps.selectIndex) {
      this.setState({ selectIndex: this.props.selectIndex });
    }
  }

  render() {
    const { labelList = [] } = this.props;
    const selectIndex = this.state.selectIndex;
    return (
      <Wrap>
        {labelList.map((label, index) => {
          return (
            <TabButton
              key={index}
              className={cn(`tab-btn-${index}`, {
                selected: selectIndex === index
              })}
              role="tab"
              aria-selected={selectIndex === index ? 'true' : 'false'}
              data-title={label.title}
              onClick={e => {
                this.onClickButton(label.value, index, label.query);
              }}>
              {label.title}
            </TabButton>
          );
        })}
      </Wrap>
    );
  }
}
