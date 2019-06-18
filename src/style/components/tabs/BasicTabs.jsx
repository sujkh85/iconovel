import React, { Component } from 'react';
import styled from 'styled-components';
import { TabButton1 } from './TabCommonStyle';
import { color } from '../../config';
import cn from 'classnames';

const TabWrapper = styled.div.attrs({
  className: 'tabs'
})`
  display: flex;
  flex-direction: column;
  .tabs__buttons {
    /* background: lightcoral; */
    display: flex;
    border-bottom: 1px solid ${color.gray43};
    &--button-box {
      flex: 1;
      text-align: center;
    }
    &--button {
      width: ${props => props.fullwidth && '100%'};
    }
  }
  .hover {
    .tabs__buttons--button-box:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
  .tabs__buttons--button-box:focus {
    outline: none;
  }

  .tabs__contents {
    /* background: lightcyan; */
    position: relative;
    flex: 1;
    display: flex;
  }
`;

class BasicTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.selectedTab || 0
    };
  }
  // static Pannel = TabPanel;
  selectTab = (tabIndex, label, name) => {
    this.setState({ selectedTab: tabIndex }, () => {
      if (this.props.onChange) {
        this.props.onChange(tabIndex, label, name);
      }
    });
  };

  render() {
    const {
      children,
      style,
      fullwidth,
      tabsButtonWrraperStyle,
      buttonBoxStyle,
      wrapperClass,
      mode
    } = this.props;
    const selectedTab =
      mode === 'props' ? this.props.selectedTab : this.state.selectedTab;
    return (
      <TabWrapper className={wrapperClass} style={style} fullwidth={fullwidth}>
        <div
          className="tabs__buttons"
          role="tablist"
          style={tabsButtonWrraperStyle}
        >
          {React.Children.map(children, ({ props: { label, name } }, index) => {
            return (
              <div
                className="tabs__buttons--button-box"
                style={buttonBoxStyle}
                role="tab"
                tabIndex={selectedTab === index ? '0' : '-1'}
                aria-selected={selectedTab === index ? 'true' : 'false'}
                onClick={() => this.selectTab(index, label, name)}
              >
                <TabButton1
                  className={cn('tabs__buttons--button', {
                    selected: selectedTab === index,
                    fwb: selectedTab === index
                  })}
                  selected={selectedTab === index}
                >
                  {label}
                </TabButton1>
              </div>
            );
          })}
        </div>

        <div className="tabs__contents" role="tabpanel">
          {React.Children.map(
            children,
            (component, index) =>
              selectedTab === index ? component : undefined
          )}
        </div>
      </TabWrapper>
    );
  }
}

export default BasicTabs;
