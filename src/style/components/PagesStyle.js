import styled from 'styled-components';
import { color } from '../config';

const PagesStyle = styled.div.attrs({
  className: 'wrapper'
})`
  /* &.wrapper {
    background-color: ${color.whitesmoke};
  } */

  .page-container {
    padding: 45px 50px 120px;
    min-width: 1147px;
    max-width: 1600px;
    margin: 0 auto;
    width: 100%;
    min-height: calc(100% - 270px);
    &.sm {
      min-width: 1200px;
      max-width: 1200px;
    }
    &__content {
      &--panel {
        box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
        background-color: ${color.white};
        border-radius: 4px;
        min-height: 100%;
      }
    }
    .page-container__content--panel.blcv-box + .page-container__content--panel.blcv-box {
      margin-top:50px;
    }
  }
  .page-content-title {
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom:17px;
    p {
      color: #b3b3b3;
    }
  }
  .page-content-title__text {
    letter-spacing: -0.5px;
    color: #4d4d4d;
    font-size: 18px;
  }
  .page-content-title__text,
  .page-content-title__more {
    /* margin-bottom: 25px; */
  }
  .page-content-title__more {
    cursor: pointer;
    color: #808080;
  }
  .page-content-title__user-info {
    color: #b3b3b3;
    display: flex;
    align-items: flex-start;
    .dot {
      background-color: #b3b3b3;
    }
    & > span {
      margin-left: 30px;
    }
    & span {
      span:last-child {
        color: #4d4d4d;
      }
    }
  }
`;

export default PagesStyle;
