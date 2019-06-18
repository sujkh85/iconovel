import React, { PureComponent } from 'react';
import { ButtonGroup, SmallTabButton } from './Button';

class ButtonGroups extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelect: this.props.defaultSelect ? this.props.defaultSelect : -1
    };
  }
  setSetlectIndex = (e, data) => {
    const { onClick, selectType } = this.props;
    if (onClick) {
      onClick(e, data);
    }
    if (selectType) {
      this.setState({ defaultSelect: data.index });
    }
  };
  render() {
    const { size, disabled, labelList, selectType, textType } = this.props;
    const { defaultSelect } = this.state;
    return (
      <ButtonGroup disabled={disabled} className={textType === 'num' && 'num'}>
        {labelList.map((label, index) => {
          return (
            <SmallTabButton
              index={index}
              size={size}
              key={index}
              disabled={disabled}
              selected={selectType && index === defaultSelect}
              aria-selected={selectType && index === defaultSelect}
              onClick={e => {
                this.setSetlectIndex(e, { index, label, props: this.props });
              }}
              tabIndex="-1"
            >
              {label}
            </SmallTabButton>
          );
        })}
      </ButtonGroup>
    );
  }
}

export default ButtonGroups;
