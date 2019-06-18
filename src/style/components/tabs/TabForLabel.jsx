import React, { Component } from 'react';
import styled from 'styled-components';
import { TabButton1 } from './TabCommonStyle';
import cn from 'classnames';
const TabWrapper = styled.div.attrs({
  className: 'tabs'
})`
  display: flex;
  .tabs__contents {
    position: relative;
    flex: 1;
  }
  .tabs__buttons {
    padding: 0 30px;
  }
`;

class TabForLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.selectedTab || 0
    };
  }
  // static Pannel = TabPanel;
  selectTab = (tabIndex, label) => {
    this.setState({ selectedTab: tabIndex }, () => {
      if (this.props.onChange) {
        this.props.onChange(tabIndex, label);
      }
    });
  };
  render() {
    const { style, fullwidth, buttonBoxStyle, labelList = [] } = this.props;
    const { selectedTab } = this.state;
    return (
      <TabWrapper style={style} fullwidth={fullwidth}>
        {labelList.map((label, index) => {
          return (
            <div
              className="tabs__buttons"
              style={buttonBoxStyle}
              role="tablist"
              key={index}
            >
              <TabButton1
                className={cn({
                  selected: selectedTab === index,
                  fwb: selectedTab === index
                })}
                role="tab"
                tabIndex="0"
                selected={selectedTab === index}
                aria-selected={selectedTab === index ? 'true' : 'false'}
                onClick={() => this.selectTab(index, label)}
              >
                {label}
              </TabButton1>
            </div>
          );
        })}
      </TabWrapper>
    );
  }
}

export default TabForLabel;
