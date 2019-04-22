import React, { Component } from 'react';

import Row from '../rows/Row';
import ButtonCircle from '../../zhn-atoms/ButtonCircle';

const S = {
  ROW : {
    paddingTop: '4px',
    paddingBottom: '8px'
  },
  BUTTON_CIRCLE : {
    marginLeft: '20px'
  }
};


class ToolbarButtonCircle extends Component {

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps.buttons === this.props.buttons){
      return false;
    }
    return true;
  }

  _renderButtons = (buttons=[]) => {
    return buttons.map((button, index) => {
      const { caption, title, onClick } = button;
      return (
        <ButtonCircle
          key={caption + index}
          caption={caption}
          title={title}
          style={S.BUTTON_CIRCLE}
          onClick={onClick}
        />
      );
    })
  }

  render(){
    const { buttons } = this.props;
    return (
      <Row.Plain style={S.ROW}>
        {this._renderButtons(buttons)}
      </Row.Plain>
    );
  }

}

export default ToolbarButtonCircle
