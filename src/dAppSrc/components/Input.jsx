import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import {
  BasicInputWrap,
  BasicLabel
} from './InputStyle';

class BasicInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: this.props.isFocused === true || false,
      isDirty: this.props.isFocused === true || false,
      touched: {}
    };
  }

  handleFocus = e => {
    // if (this.props.onFocusAndBlur) {
    //   this.props.onFocusAndBlur(e);
    // }

    this.setState({ isFocused: true });
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };
  handleBlur = e => {
    if (this.props.onFocusAndBlur) {
      this.props.onFocusAndBlur(e);
    }
    this.setState({
      isFocused: false
    });
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  // handleBlur = field => e => {
  //   this.setState({
  //     isFocused: false,
  //     touched: { ...this.state.touched, [field]: true }
  //   });
  // };

  handleChange = e => {
    let { isDirty } = this.state;

    const { value } = e.target;
    if (this.props.onChangeText) {
      this.props.onChangeText(e);
    }
    // this.setState({})
    // if (this.props.onChange) {
    //   this.props.onChange(e);
    // }

    //상태 : 글자가 있는지 없는지
    if (!isDirty && value.length !== 0) {
      this.setState({ ...this.state, isDirty: true });
      if (this.props.value && this.props.value === '') {
        this.setState({ ...this.state, isDirty: false });
      }
    } else if (isDirty && value.length === 0) {
      this.setState({ ...this.state, isDirty: false });
    }
  };

  onKeyDown = e => {
    if (this.props.type === 'number') {
      if (
        (e.keyCode !== 8 && e.keyCode !== 0 && e.keyCode < 48) ||
        (e.keyCode > 57 && e.keyCode !== 190)
      ) {
        e.preventDefault();
      }
    } else if (this.props.onKeyDown) {
      this.props.onKeyDown(e);
    }
  };

  // componentDidMount() {
  //   const { defaultValue } = this.props;
  //   if (defaultValue) {
  //     this.setState({ isDirty: true });
  //   }
  // }
  componentDidUpdate(prevProps, prevState) {
    const { isDirty } = this.state;
    const { value } = this.props;
    if (value && prevProps.value !== value) {
      if (!isDirty) {
        if (value.length !== 0) {
          this.setState({ ...this.state, isDirty: true });
        } else {
          this.setState({ ...this.state, isDirty: false });
        }
      } else if (isDirty && value.length === 0) {
        this.setState({ ...this.state, isDirty: false });
      }
    } else if (!value && prevProps.value !== value && isDirty) {
      this.setState({ ...this.state, isDirty: false });
    }
  }

  render() {
    const { isFocused, isDirty } = this.state;
    const {
      step,
      label,
      inputName,
      isRequired,
      isReadOnly,
      className,
      message,
      // inputIconComponent,
      type = 'text',
      defaultValue,
      disabled,
      innerRef,
      value,
      maxLength,
      inputStyle
    } = this.props;
    return (
      <BasicInputWrap
        className={cn(className, { 'read-only': isReadOnly, disabled })}>
        <BasicLabel
          data-shrink="false"
          htmlFor={`input-${inputName}`}
          isFocused={isFocused || isDirty}>
          <span className={cn({ reddot: isRequired })}>{label}</span>
        </BasicLabel>
        <div
          className={cn('input-box', {
            focus: isFocused,
            dirty: isDirty
          })}>
          <input
            // aria-invalid="false"
            aria-required={isRequired}
            className="basic-input"
            id={`input-${inputName}`}
            name={inputName}
            type={type}
            readOnly={isReadOnly}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onKeyDown={this.onKeyDown}
            autoComplete="off"
            defaultValue={defaultValue}
            disabled={disabled}
            step={step}
            ref={innerRef}
            value={value}
            maxLength={maxLength}
            style={inputStyle}
            // onCut={e => e.preventDefault()}
            // onCopy={e => e.preventDefault()}
            // onPaste={e => e.preventDefault()}
          />
          <div className="border" />
          <p className="valiation-text">{message}</p>
          {/* {inputIconComponent} */}
        </div>
      </BasicInputWrap>
    );
  }
}

export default BasicInput;

BasicInput.propTypes = {
  // onChangeText: PropTypes.func.isRequired,
  // onFocusAndBlur: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired
};
