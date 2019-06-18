import React from 'react';
import App from './App';
import EtcUtil from './library/utils/EtcUtil';
import NotSupport from './routes/NotSupport';
import MobileWebDownload from './routes/MobileWebDownload';
import UnSupportWebMobile from './routes/UnSupportWebMobile';

export default class AppContainer extends React.Component {
  isSupportBrowser = null;
  isMobile = null;
  os = null;
  constructor(props) {
    super(props);
    this.isSupportBrowser = EtcUtil.isSupportBrowser();
    this.isMobile = EtcUtil.isMobile();
    this.os = EtcUtil.getOS();
  }

  render() {
    if (this.isMobile === true) {
      if (this.os === 'AndroidOS' || this.os === 'iOS') {
        return <MobileWebDownload os={this.os} />;
      } else {
        //etc mobile
        return <UnSupportWebMobile />;
      }
    }
    //check browser
    if (this.isSupportBrowser === false) {
      return <NotSupport />;
    }
    return <App {...this.props} />;
  }
}
