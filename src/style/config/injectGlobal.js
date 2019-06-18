import { injectGlobal } from 'styled-components';
import { color } from './';
import theme from 'styled-theming';
const MainBG = theme('mode', {
  light: color.white,
  dark: color.mainDark
});

injectGlobal`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html {
    font-family: Arial sans-serif;
    /* -webkit-font-smoothing: antialiased; */
    font-family: 'Arial','-apple-system', 'Roboto', sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0,0,0,0.3);
    
  }
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .dot{
    display:inline-block;
    width:2px;
    height:2px;
    vertical-align:middle;
    margin: 0 4px;
  }



  article, aside, figcaption, figure, footer, header, hgroup, main, nav, section {
    display: block;
  }
  figure{
    margin:0;
  }
  input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  body {
    background-color: ${MainBG};
    font-size: 12px;
    color: ${color.gray10};
    font-weight: normal;
    text-align: left;
    line-height: normal;
  }
  header{
    min-width: 1280px;
  }
  [class^=aria-]{
    display:none;
  }
  .clearfix {
    &:after {
      content: '';
      display: block;
      clear: both;
      overflow: hidden;
    }
  }
  .difac{
    display:inline-flex;
    align-items:center
  }
  .difacdc{
    display:inline-flex;
    align-items:center;
    flex-direction:column;
  }
  .dfacdc{
    display:flex;
    align-items:center;
    flex-direction:column;
  }
  .dfac{
    display:flex;
    align-items:center;
  }
  .dfacjcc{
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .dfacjcsb{
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .tac{
    text-align:center !important;
  }
  .tal{
    text-align:left !important;
  }
  .tar{
    text-align:right !important; 
  }
  .num {
    font-family: 'Roboto';
  }
  .fwb{
    font-weight: bold;
  }
  .fwn{
    font-weight:normal;
  }
  .fw300{
    font-weight:300;
  }
  .fw400{
    font-weight:400;
  }
  .fw500{
    font-weight:500;
  }
  .fz10{
    font-size:10px;
  }
  .fz12{
    font-size:12px;
  }
  .fz14{
    font-size:14px;
  }
  .fz16{
    font-size:16px;
  }
  .fz18{
    font-size:18px;
  }
  .fz20{
    font-size:20px !important;
  }
  .fz22{
    font-size:22px;
  }
  .fz24{
    font-size:24px !important;
  }
  .fz36{
    font-size:36px;
  }
  .fz60{
    font-size:60px;
  }
  .purple{
    color:${color.purple};
  }
  .green-thick{
    color:#00a669;
  }

  .text-indent{
    text-indent:-999em;
  }
  .text-hidden{
    line-height:0;
    font-size:0;
    color:transparent;
  }
  
  .tooltip-wrap{
    display:inline-flex;
    cursor:pointer;
  }
  .tooltip-wrap +.tooltip-wrap{
    margin-left:7px;
  }
  .sm-bullet {
    padding-left: 8px;
    position: relative;
    &:before {
      content: '';
      width: 3px;
      height: 3px;
      background-color: #808080;
      position: absolute;
      top: 8px;
      /* top: 50%; */
      left: 0;
      margin-top: -1.5px;
      border-radius: 50%;
    }
  }
  .text-over {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .tipbox-wrap{
    position: absolute;
    background: #333333;
    max-width:454px;
    border-radius:4px;
    padding: 8px 15px;
    font-family: arial;
    font-size: 12px;
    text-shadow: 0px 1px 1px #000;
    color: #fff;
    z-index:99999;

    &:before{
      content : " ";
      width: 0;
      height: 0;
      border-top: 8px solid #333333;
      border-right: 9px solid transparent;
      border-left: 0px solid transparent;
      position:absolute;
      bottom:-8px;
      left:10px;
    }
    &.left:before{
      border-left: 9px solid transparent;
      border-right: 0px solid transparent;
      right:10px;
      left:auto
    }
  }
  .tip-box{
    visibility:hidden;
  }
  .tool-tip-area{
    position:absolute;
    cursor:pointer;
  }
  .tool-tip-area + .tool-tip-area {
    margin-left:6px;
  }

  .tool-tip-area:hover + .tip-box{
    visibility:visible;
  }
  .tool-tip-area.center:hover .tip-box{
    visibility:visible;
  }
  .warning-info{
    display:flex;
    align-items:center;
    color:#6843bf;
  } 
  
  /* .scrollbox{
    margin-right: -14px !important;
    margin-bottom: -14px !important;
    overflow-y: scroll;
    overflow-x: hidden;
  } */
  .scrollbox::-webkit-scrollbar{
    display: none; 
  }
  .coin-icon-cell {
    display: flex;
    align-items: center;
    span:last-child {
      flex: 1;
      text-align: left;
    }
    .coin-symbols {
      margin: 0 6px 0 23px;
    }
  }
  .thumb {
    background-color: rgba(0,0,0,.1);
  }

  .panel{
    border-radius: 4px;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  }

  .hr-vertical{
    width:1px;
    background: #e6e6e6;
    height: 28px;
    margin: 0 5px;
  }

  #root{
    height: 100%;
    &.main{
      height: auto;
    }
  }

  .Resizer {
    /* opacity: .2; */
    z-index: 1;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -moz-background-clip: padding;
    -webkit-background-clip: padding;
    background-clip: padding-box;
  }



  .Resizer.disabled {
    cursor: not-allowed;
  }
  .Resizer.disabled:hover {
    border-color: transparent;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  p {
    margin:0;
  }
  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 0;
  }
  ul,
  ol {
    padding:0;
    margin: 0;
  }

  li {
    list-style:none;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }



  dt {
    font-weight: 400;
  }

  dd {
    margin-bottom: 0;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  dfn {
    font-style: italic;
  }
  .italic{
    font-style: italic;
  }
  .vam{
    display:inline-block;
    vertical-align:middle;
  }

  b,
  strong {
    font-weight: bold;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub { bottom: -.25em; }
  sup { top: -.5em; }

  a {
    color: #0000FF;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;

    &:hover, &:active, &:visited {
      text-decoration: none;
    }
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }
  table {
    border-collapse: collapse;
  }

  caption {
    color: inherit;
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }
  
  label {
    display: inline-block;
  }


  button {
    border-radius: 0;
  }
  [role="button"]{
    outline:none;
  }

  button:focus {
    /* outline: 1px solid;
    outline: 1px auto -webkit-focus-ring-color; */
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }


  .menu-wrap {
    display: flex;
    &.shortcut {
      padding-left: 15px;
    }
    &.shortcut.open {
      background: #0f0f0f;
    }
    .noti-bullet > span {
      position: relative;
      &:before {
        position: absolute;
        right: 10px;
        top: 12px;
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: ${color.purple};
      }
    }
    .menu-item {
      position: relative;
      cursor: pointer;
      width:48px;
      height:48px;
      display:flex;
      align-items:center;
      justify-content:center;
      &.on {
        background-color: #0f0f0f;
      }
      &-content {
        position: absolute;
        top: 56px;
        right: 0;
        z-index: 999;
        text-align: left;
        box-shadow: 0 20px 30px 0 rgba(0, 0, 0, 0.15);
        border-radius: 4px;
      }
    }
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type="radio"],
  input[type="checkbox"] {
    box-sizing: border-box;
    padding: 0;
  }


  input[type="date"],
  input[type="time"],
  input[type="datetime-local"],
  input[type="month"] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: .5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }


  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  /* TODO react-grid-layout 스타일 바꿔야 할것 */
  /* .react-resizable-handle {
    position: absolute;
    bottom:0;
    right: 0;
    width:10px;
    height: 10px;
    border-bottom: 2px solid black;
    border-right: 2px solid black;
    cursor: se-resize;
  } */

  .handle {
    cursor: move;
  }

  .react-grid-item.react-grid-placeholder {
    background: red;
    opacity: 0.2;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  .react-grid-layout {
    position: relative;
    transition: height 200ms ease;
  }
  .react-grid-item {
    transition: all 200ms ease;
    transition-property: left, top;
  }
  .react-grid-item.cssTransforms {
    transition-property: transform;
  }
  .react-grid-item.resizing {
    z-index: 1;
    will-change: width, height;
  }

  .react-grid-item.react-draggable-dragging {
    transition: none;
    z-index: 3;
    will-change: transform;
  }

  .react-grid-item.react-grid-placeholder {
    background: red;
    opacity: 0.2;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .react-grid-item > .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }

  .react-grid-item > .react-resizable-handle::after {
    content: "";
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid rgba(0, 0, 0, 0.4);
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  }

  

`;
