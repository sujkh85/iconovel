import React, { Component } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import IconNovelDescription from './dAppSrc/IconNovelDescription';
import IconNovelRead from './dAppSrc/IconNovelRead';
import IconNovelWrite from './dAppSrc/IconNovelWrite';
import IconNovelReadDetail from './dAppSrc/IconNovelReadDetail';
import IconConnect from './dAppSrc/components/IconConnect';
import IconSDK from './dAppSrc/components/icon-sdk';
import { IconConverter } from 'icon-sdk-js';

const AppWrraper = styled.div`
  font-family: Noto Sans, AppleGothic, sans-serif;
  .gnb-title {
    display: flex;
    background-color: rgb(0, 188, 212);
    height: 64px;
    line-height: 64px;
    box-sizing: border-box;
    color: white;
    padding: 0 24px;
    font-size: 24px;
    font-weight: 500;
    text-align: left;
    justify-content: space-between;
    .login {
      cursor: pointer;
      font-size: 16px;
    }
  }
  .content {
    display: flex;
    .content-left {
      flex: 1;
      width: 250px;
      color: rgba(0, 0, 0, 0.87);
      background-color: rgb(255, 255, 255);
      box-sizing: border-box;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 10px,
        rgba(0, 0, 0, 0.23) 0px 3px 10px;
      height: 100%;
      width: 256px;
      transform: translate(0px, 0px);
      transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
      border-radius: 0px;
      overflow: auto;
      .menu-sell-item:first-child {
        margin-top: 10px;
      }
      .menu-sell-item {
        cursor: pointer;
        font-weight: 300;
        box-sizing: border-box;
        height: 50px;
        padding: 15px;
        margin: 0;
        border: 0;
        vertical-align: baseline;
        -webkit-text-size-adjust: none;
        font-style: normal;
        transition: all 0.7s;
        &:hover {
          background-color: rgb(238, 238, 238);
          font-weight: 600;
        }
        &.on {
          background-color: rgb(238, 238, 238);
          font-weight: 600;
        }
      }
    }
    .content-right {
      width: calc(100vw - 256px);
      padding: 30px 30px;
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);
    let state = this.initState();
    if (this.props.location.query.tab) {
      state.selectMenu = this.props.location.query.tab;
    } else {
      state.selectMenu = 'decription';
    }
    this.state = state;
  }
  initState = () => {
    return {
      selectItem: {},
      textList: [],
      address: '',
      textObj: {},
    };
  };
  menuRegist = [
    {
      key: 'decription',
      label: '설명',
    },
    {
      key: 'read',
      label: '글보기',
    },
    {
      key: 'write',
      label: '글쓰기',
    },
  ];
  onClickSelectMenu = e => {
    let data = e.target.getAttribute('data');
    this.props.history.push(`/?tab=${data}`);
    this.setState({ selectMenu: data });
  };

  readDetailSelectMenu = item => {
    this.props.history.push(`/?tab=readDetail&uuid=${item.uuid}`);
    this.setState({ selectMenu: 'readDetail', selectItem: item });
  };

  menuRenerer = () => {
    const { selectMenu } = this.state;
    return this.menuRegist.map((item, index) => {
      let isOn = false;
      if (
        selectMenu === item.key ||
        (selectMenu === 'readDetail' && item.key === 'read')
      ) {
        isOn = true;
      }
      return (
        <div
          className={cn('menu-sell-item', { on: isOn })}
          data={item.key}
          onClick={this.onClickSelectMenu}
          key={index}
        >
          {item.label}
        </div>
      );
    });
  };

  getTextList = async () => {
    try {
      let result = [];
      const resList = await IconSDK.iconService
        .call(
          IconSDK.callBuild({
            methodName: 'getWriting',
            params: {},
            to: window.CONTRACT_ADDRESS,
          }),
        )
        .execute();
      //split
      resList.forEach(item => {
        let converted = IconConverter.toUtf8(item);
        let split = converted.split(window.SPLITER);
        result.push(split);
      });
      let textObj = {};
      let textList = [];
      console.log('result', result);
      //가공
      result.forEach((item, index) => {
        if (item[3]) {
          let target = {
            title: item[0],
            content: item[1],
            address: item[2],
            uuid: item[3],
            index: index,
          };
          textObj[item[3]] = target;
          textList.push(target);
        }
      });
      this.setState({ textList: textList, textObj });
    } catch (error) {}
  };

  contentRenderer = () => {
    const { selectMenu, selectItem, address, textList, textObj } = this.state;
    switch (selectMenu) {
      case 'decription':
        return <IconNovelDescription {...this.props} address={address} />;
      case 'read':
        return (
          <IconNovelRead
            readDetailSelectMenu={this.readDetailSelectMenu}
            {...this.props}
            address={address}
            getTextList={this.getTextList}
            {...this.state}
          />
        );
      case 'write':
        return (
          <IconNovelWrite
            {...this.props}
            address={address}
            getTextList={this.getTextList}
          />
        );
      case 'readDetail':
        return (
          <IconNovelReadDetail
            selectItem={selectItem}
            {...this.props}
            address={address}
            getTextList={this.getTextList}
            {...this.state}
            connectAddress={this.connectAddress}
          />
        );
      default:
        break;
    }
  };
  connectAddress = async callback => {
    try {
      let address = await IconConnect.getAddress();
      this.setState(
        {
          address: address,
        },
        () => {
          if (callback) {
            callback();
          }
        },
      );
    } catch (error) {}
  };

  onClickLogin = () => {
    const { address } = this.state;
    if (address === '') {
      this.connectAddress();
    }
  };

  componentDidMount() {
    this.getTextList();
  }
  render() {
    const { selectMenu, address } = this.state;
    return (
      <AppWrraper>
        <div className="gnb-title">
          <div>
            <span className="icon">Icon</span>ovel
          </div>
          <div className="login" onClick={this.onClickLogin}>
            {address !== '' ? address : 'login'}
          </div>
        </div>
        <div className="content" style={{ height: 'calc( 100vh - 64px )' }}>
          <div className="content-left">{this.menuRenerer()}</div>
          <div className="content-right">{this.contentRenderer()}</div>
        </div>
      </AppWrraper>
    );
  }
}

export default App;
