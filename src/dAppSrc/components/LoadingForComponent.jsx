import React from 'react';

export default class LoadingForComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      errorFlag: false
    };
    this.errorTimer = null;
  }

  checkLoading = () => {
    const { isLoadedDataList = [] } = this.props;
    let result = false;
    isLoadedDataList.forEach(item => {
      //배열
      if (Array.isArray(item) === true) {
        if (item.length === 0) {
          result = true;
        }
      }
      //객체
      else if (typeof item === 'object') {
        if (Object.keys(item).length === 0) {
          result = true;
        }
      } else if (typeof item === 'string') {
        if (item === '') {
          result = true;
        }
      } else if (typeof item === 'number') {
        if (item === 0) {
          result = true;
        }
      } else if (typeof item === 'boolean') {
        if (item === false) {
          result = true;
        }
      }
    });
    return result;
  };

  runErrorTimer = () => {
    const { timeout = 10000, errorMode } = this.props;
    if (this.errorTimer) {
      this.clearRunErrorTimer();
    }
    this.errorTimer = setTimeout(() => {
      //error관련 코드
      if (errorMode) {
        this.setState({ errorFlag: true });
      }
    }, timeout);
  };

  clearRunErrorTimer = () => {
    clearTimeout(this.errorTimer);
    this.errorTimer = null;
  };

  componentDidUpdate(prevProps) {
    if (
      JSON.stringify(prevProps.isLoadedDataList) !==
      JSON.stringify(this.props.isLoadedDataList)
    ) {
      let isLoading = this.checkLoading();
      if (isLoading === true) {
        this.runErrorTimer();
      } else {
        this.clearRunErrorTimer();
      }
      this.setState({
        errorFlag: false,
        isLoading: isLoading
      });
    }
  }
  componentDidMount() {
    let isLoading = this.checkLoading();
    if (isLoading === true) {
      this.runErrorTimer();
    } else {
      this.clearRunErrorTimer();
    }
    this.setState({
      isLoading: isLoading
    });
  }
  componentWillUnmount() {
    this.clearRunErrorTimer();
  }

  render() {
    const { isLoading, errorFlag } = this.state;
    const {
      component,
      loadingComponent = <div>loading!</div>,
      errorComponent = <div>Error</div>,
      errorMode
    } = this.props;

    if (errorMode && errorFlag) {
      return errorComponent;
    }
    if (isLoading) {
      return loadingComponent;
    } else {
      return component;
    }
  }
}
