import React, { Component } from 'react';
import cn from 'classnames';
import {
  TabWrapper,
  TabList,
  TabButton,
  Content,
  TabContent
} from './TabCommonStyle';
import IconFavStar from '../../../common/IconFavStar';
import IconSettings from '../../../common/IconSettings';
import IconInfo from '../../../common/IconInfo';

class OneChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: this.props.defaultIndex || 0
    };
  }
  selectTab = (tabIndex, label, name) => {
    this.setState({ selectIndex: tabIndex }, () => {
      if (this.props.onChange) {
        this.props.onChange(tabIndex, label, name);
      }
    });
  };
  render() {
    const { selectIndex } = this.state;
    const {
      fixedWidth,
      tabsPosition,
      labelList = [],
      children,
      fzClass
    } = this.props;
    return (
      <TabWrapper>
        <TabList role="tablist" tabsPosition={tabsPosition}>
          {labelList.map((item, index) => {
            return (
              <TabButton
                key={index}
                className={cn(`tab-btn-${index}`, fzClass, {
                  selected: selectIndex === index
                })}
                fz
                role="tab"
                tabIndex="0"
                selected={selectIndex === index}
                aria-selected={selectIndex === index ? 'true' : 'false'}
                onClick={() => this.selectTab(index, item.label, item.name)}
                fixedWidth={fixedWidth}
              >
                {item.icon && (
                  <IconFavStar
                    className="nohover"
                    iconNm="ic-favorite-active-light-a"
                    isAdd={item.iconStatus}
                  />
                )}
                {item.label}
              </TabButton>
            );
          })}
        </TabList>
        <Content>
          <TabContent role="tabpanel">{children}</TabContent>
        </Content>
      </TabWrapper>
    );
  }
}

export const TabPanel = ({ children, ...rest }) => {
  return (
    <TabContent role="tabpanel" {...rest}>
      {children}
    </TabContent>
  );
};

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectIndex: this.props.defaultIndex || 0
    };
  }
  static Pannel = TabPanel;
  static OneChild = OneChild;
  selectTab = (tabIndex, label, name) => {
    // let callback = () => {
    //   this.setState({ selectIndex: tabIndex }, () => {
    //     if (this.props.onChange) {
    //       this.props.onChange(tabIndex, label, name);
    //     }
    //   });
    // };
    this.setState({ selectIndex: tabIndex }, () => {
      if (this.props.onChange) {
        this.props.onChange(tabIndex, label, name);
      }
    });
    // if (this.props.refresh === true) {
    //   //같은 탭누를때 리플래시
    //   this.setState(
    //     {
    //       selectIndex: -1
    //     },
    //     () => {
    //       callback();
    //     }
    //   );
    // } else {
    //   callback();
    // }
  };

  render() {
    const {
      className,
      children,
      fixedWidth,
      fzClass,
      usePage,
      refresh = false,
      mode = 'state'
    } = this.props;
    // const { selectIndex } = this.state;
    const selectIndex =
      mode === 'state' ? this.state.selectIndex : this.props.selectIndex;
    return (
      <TabWrapper className={className}>
        <TabList role="tablist">
          {React.Children.map(
            children,
            (
              { props: { label, name, isIcon, onClickIcon = () => {} } },
              index
            ) => {
              return (
                <TabButton
                  className={cn(`tab-btn-${index}`, fzClass, {
                    selected: selectIndex === index,
                    'tab-btn-refresh': refresh
                  })}
                  role="tab"
                  tabIndex="0"
                  usePage={usePage}
                  selected={selectIndex === index}
                  aria-selected={selectIndex === index ? 'true' : 'false'}
                  onClick={() => this.selectTab(index, label, name)}
                  fixedWidth={fixedWidth}
                >
                  {label}
                  {isIcon === true && (
                    <IconInfo
                      className="basic"
                      onClick={onClickIcon}
                      isShowPointer={true}
                    />
                  )}
                  {refresh && <IconSettings iconNm="ic-refresh" />}
                </TabButton>
              );
            }
          )}
        </TabList>

        <Content>
          <TabContent role="tabpanel">
            {React.Children.map(
              children,
              (component, index) =>
                selectIndex === index ? component : undefined
            )}
          </TabContent>
        </Content>
      </TabWrapper>
    );
  }
}

export default Tabs;
