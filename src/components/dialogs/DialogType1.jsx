import React from 'react';

import ZhDialog from '../zhnMoleculs/ZhDialog';
import ToolBarButton from '../header/ToolBarButton';
import RowInputText from './RowInputText';


const DialogType1 = React.createClass({


  displayName : 'DialogType1',

  getInitialState(){
    this.stock = null;

    return {};
  },

  shouldComponentUpdate(nextProps, nextState){
    if (this.props !== nextProps){
       if (this.props.isShow === nextProps.isShow){
          return false;
       }
    }
    return true;
  },


 _handlerLoad(event){
   const repo = this.inputRepo.getValue()
      ,  { requestType } = this.props;
   this.props.onLoad({ repo, requestType });
 },

  _handlerClose(){
    this.props.onClose()
  },

  render(){
    const {
            caption, isShow, onShow,
            oneTitle, onePlaceholder
          } = this.props
        , _commandButtons = [
       <ToolBarButton
          key="a"
          type="TypeC"
          caption="Load"
          onClick={this._handlerLoad}
       />
    ];

    return (
       <ZhDialog
           caption={caption}
           isShow={isShow}
           commandButtons={_commandButtons}
           onShowChart={onShow}
           onClose={this._handlerClose}
       >
        <RowInputText
           ref={c => this.inputRepo = c}
           caption={oneTitle}
           placeholder={onePlaceholder}
        />
      </ZhDialog>
    );
  }
});

export default DialogType1;
