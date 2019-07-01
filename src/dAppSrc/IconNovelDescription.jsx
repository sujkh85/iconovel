import React, { Component } from "react";
import styled from "styled-components";

const IconNovelDescriptionWrapper = styled.div`
  li {
    margin-top: 10px;
  }
`;

class IconNovelDescription extends Component {
  render() {
    return (
      <IconNovelDescriptionWrapper>
        <ul>
          <li>Iconovel은 소설을 연재하고 싶은 작가들의 놀이터입니다.</li>
          <li>글을 쓰면 아이콘 블록체인에 기록되어 올라갑니다.</li>
          <li>블록체인에 기록되면 자신이 쓴글을 증명할수 있습니다.</li>
        </ul>
      </IconNovelDescriptionWrapper>
    );
  }
}

export default IconNovelDescription;
