import React, { Component } from 'react';
import styled from 'styled-components';
import QRcode from 'qrcode.react';
import LoadingForComponent from './components/LoadingForComponent';
import IconConnect from './components/IconConnect';
import IconSDK from './components/icon-sdk';
import { IconConverter } from 'icon-sdk-js';

const IconNovelReadDetailWrapper = styled.div`
  .read-title-container {
    display: flex;
    justify-content: space-between;
    .support-list {
      font-size: 14px;
      padding: 5px;

      cursor: pointer;
      transition: 0.5s all;
      position: relative;
      &:hover {
        color: rgb(238, 238, 238);
        font-weight: bold;
      }
    }
    .read-title {
      font-size: 20px;
      font-weight: 800;
    }
  }

  .content-container {
    margin-top: 30px;
    .info-container {
      display: flex;
      justify-content: space-between;
      .info-content {
        display: flex;
      }
      .info {
        margin-left: 10px;
        margin-bottom: 20px;
        &.button {
          width: 100px;
          box-sizing: border-box;
          display: flex;
          text-align: center;
          font-size: 14px;
          padding: 5px;
          background-color: rgb(0, 188, 212);
          color: white;
          border: 1px solid rgb(0, 188, 212);
          border-radius: 4px;
          justify-content: center;
          cursor: pointer;
        }
      }
    }
    .title {
      padding: 10px;
    }
    .content {
      word-break: break-word;
      display: block;
      padding: 10px;
      border: 1px solid rgb(217, 217, 217);
      border-radius: 4px;
      height: calc(100vh - 325px);
      overflow: auto;
    }
  }
`;

class IconNovelReadDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      recommend: 0,
    };
  }
  isFirst = true;
  getRecommand = async () => {
    try {
      const selectItem = this.getSelectItem();
      if (selectItem) {
        this.isFirst = false;
        const recommend = await IconSDK.iconService
          .call(
            IconSDK.callBuild({
              methodName: 'getLikeCntById',
              params: {
                _id: IconConverter.toHex(selectItem.index),
              },
              to: window.CONTRACT_ADDRESS,
            }),
          )
          .execute();
        this.setState({
          recommend: IconConverter.toNumber(recommend),
        });
      }
    } catch (error) {}
  };
  componentDidMount() {
    this.getRecommand();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.textObj !== this.props.textObj) {
      this.getRecommand();
    }
  }
  recommend = async () => {
    try {
      const selectItem = this.getSelectItem();
      let address = this.props.address;
      if (address) {
        const txObj = IconSDK.sendTxBuild({
          methodName: 'addLikeCnt',
          params: {
            _id: IconConverter.toHex(selectItem.index),
          },
          from: address,
          to: window.CONTRACT_ADDRESS,
        });
        // from: address,
        const tx = await IconConnect.sendTransaction(txObj);
        //재조회
        setTimeout(() => {
          this.getRecommand();
        }, 2000);
      } else {
        this.props.connectAddress(this.recommend);
      }
    } catch (error) {}
  };
  loadingRenderer = () => {
    return <div>Loading</div>;
  };
  errorRenderer = () => {
    return <div>Error</div>;
  };
  componentRenderer = () => {
    const { recommend } = this.state;
    let selectItem = this.getSelectItem();
    return (
      <div>
        <div className="info-container">
          <div className="info-content">
            <div className="info">추천수:{recommend}</div>
          </div>

          <div className="info button" onClick={this.recommend}>
            추천하기
          </div>
        </div>
        <div className="title">제목 : {selectItem.title}</div>
        <div className="content">
          {selectItem.content.split('\n').map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
        </div>
      </div>
    );
  };
  getSelectItem = () => {
    let uuid = this.props.location.query.uuid;
    let selectItem = this.props.textObj[uuid];
    return selectItem;
  };
  render() {
    let uuid = this.props.location.query.uuid;
    let selectItem = this.getSelectItem();
    if (!uuid || !selectItem) {
      return null;
    }

    return (
      <IconNovelReadDetailWrapper>
        <div className="read-title-container">
          <div className="read-title">
            <div>Address : {selectItem.address}</div>
            <span className="support-list">
              위주소나 qr코드로 후원하실수있습니다.
            </span>
          </div>
          <div>
            <QRcode value={selectItem.address} size={60} />
          </div>
        </div>
        <div className="content-container">
          <LoadingForComponent
            isLoadedDataList={[!!selectItem.address]}
            component={this.componentRenderer()}
            loadingComponent={this.componentRenderer()}
            errorComponent={this.componentRenderer()}
            errorMode={true}
            timeout={15000}
          />
        </div>
      </IconNovelReadDetailWrapper>
    );
  }
}

export default IconNovelReadDetail;
