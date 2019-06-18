import React, { Component } from 'react';
import styled from 'styled-components';
import uuid from 'uuid/v1'
import BasicInput from './components/Input';
import IconConnect from './components/IconConnect';
import IconSDK from './components/icon-sdk';
import {
  IconConverter
} from 'icon-sdk-js'


const IconNovelWriteWrraper = styled.div`
  .write-title-container{

  }
  .write-content-container{
    margin-top:30px;
    margin-bottom:30px;
    textarea::placeholder{
      font-size:13px;
      color:#b3b3b3;
    }
    textarea{
      box-sizing:border-box;
      resize: none;
      display: block;
      width: 100%;
      min-height: 400px;
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(217, 217, 217);
      border-image: initial;
      padding: 20px;
      &:focus {
        border: 2px solid rgb(0,188,212);
        outline: none;
     }
    }
  }
  .write-button{
    display:flex;
    text-align:center;
    font-size:16px;
    background-color:rgb(0,188,212);
    color:white;
    height:40px;
    line-height:40px;
    border: 1px solid rgb(0,188,212);
    border-radius:4px;
    justify-content:center;
    cursor: pointer;
    transition: 0.5s all;
    position: relative;
    &:hover{
      color:rgb(238,238,238);
      font-weight:bold;
      font-size:18px;
    }
    &:focus{
      color:black;
    }
    &:after{
      content: "";
      background: white;
      display: block;
      position: absolute;
      padding-top: 42px;
      padding-left: 100%;
      margin-left: 0px;
      margin-top: 0;
      opacity: 0;
      transition: all 0.4s
    }
    &:active:after {
      padding: 0;
      margin: 0;
      opacity: 1;
      transition: 0s
    }
  }
`

class IconNovelWrite extends Component {
  constructor(props){
    super(props)
    this.state = {
      title:'',
      content:''
    }
  }
  onChangeTitle=(e)=>{
    this.setState({title:e.target.value})
  }
  onKeyDownTitle=(e)=>{}
  onChangeContent=(e)=>{
    this.setState({
      content:e.target.value
    })
  }
  writeValidate=()=>{
    const {address} = this.props;
    const {title, content} = this.state
    if(address ===''){
      alert('로그인이 필요합니다.')
      return false
    } else if(title === ''){
      alert('제목을 입력해주세요')
      return false
    } else if(content === ''){
      alert('내용을 입력해주세요')
      return false
    }
    return true
  }
  onClickWrite=async()=>{
    if(this.writeValidate() === false){
      return
    }
    //write 버튼 클릭
    const { sendTxBuild } = IconSDK;
    const {address} = this.props;
    const {title, content} = this.state;
    
    let msg = `${title}${window.SPLITER}${content}${window.SPLITER}${address}${window.SPLITER}${uuid()}`
    console.log('msg', msg)
    console.log('IconConverter.fromUtf8(msg)', IconConverter.fromUtf8(msg))
    const txObj = sendTxBuild({
      methodName:'addWriting',
      params:{
        msg:IconConverter.fromUtf8(msg) 
      },
      from: address,
      to: window.CONTRACT_ADDRESS,
    })


    console.log('txObj' , txObj)
    // from: address,
    const tx = await IconConnect.sendTransaction(txObj)
    console.log('tx', tx)
    window.open(`https://tracker.icon.foundation/transaction/${tx}`)

    this.setState({
      title:'',
      content:''
    })

  }
  render() {
    const {title, content} = this.state
    return (
      <IconNovelWriteWrraper>
        <div className="write-title-container">
          <BasicInput label={'Title'}
            inputName="write-title"
            onChangeText={this.onChangeTitle}
            onKeyDown={this.onKeyDownTitle}
            innerRef={this.emailInput}
            value={title}
            maxLength="30"
          />
        </div>
        <div className="write-content-container">
          <textarea placeholder="Please write" onChange={this.onChangeContent} value={content} maxLength="500"></textarea>
        </div>
        <div className="write-button-container">
          <div className="write-button" onClick={this.onClickWrite}>
            Write
          </div>
        </div>
        
      </IconNovelWriteWrraper>
    );
  }
}

export default IconNovelWrite;