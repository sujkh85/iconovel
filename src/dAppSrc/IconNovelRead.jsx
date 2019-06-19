import React, { Component } from "react";
import styled from "styled-components";
import IconConnect from "./components/IconConnect";
import IconSDK from "./components/icon-sdk";
import { IconConverter } from "icon-sdk-js";

const IconNovelReadWrapper = styled.div`
  .read-title {
    font-size: 20px;
    font-weight: 800;
  }
  .read-list {
    margin-top: 20px;
    border: 2px solid rgb(0, 188, 212);
    border-radius: 4px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    thead {
      height: 40px;
      text-align: center;
      font-weight: bold;
      background: #f0f2f5;
      th {
        padding: 5px;
      }
    }
  }
  tbody {
    cursor: pointer;
    tr {
      text-align: center;
      &:hover {
        background: rgb(238, 238, 238);
        font-weight: bold;
      }
    }
    td {
      padding: 10px;
      font-size: 12px;
    }
  }
`;

class IconNovelRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  onClickList = item => {
    this.props.readDetailSelectMenu(item);
  };

  componentDidMount() {
    this.props.getTextList();
  }

  render() {
    const { textList } = this.props;
    return (
      <div>
        <IconNovelReadWrapper>
          <div className="read-title">LIST</div>
          <div className="read-list">
            <table>
              <colgroup>
                <col style={{ width: "10%" }} />
                <col style={{ width: "20%" }} />
                <col style={{ width: "30%" }} />
                <col style={{ width: "50%" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>index</th>
                  <th>작성일</th>
                  <th>지은이</th>
                  <th>제목</th>
                </tr>
              </thead>
              <tbody>
                {textList.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      onClick={() => {
                        this.onClickList(item);
                      }}
                    >
                      <td>{item.index}</td>
                      <td>{item.date}</td>
                      <td>{item.address}</td>
                      <td>{item.title}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </IconNovelReadWrapper>
      </div>
    );
  }
}

export default IconNovelRead;
