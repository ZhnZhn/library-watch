import React from 'react';

import ZhDialog from '../zhnMoleculs/ZhDialog';
import ToolBarButton from '../header/ToolBarButton';
import RowInputText from './RowInputText';
import RowInputSelect from './RowInputSelect';


const _sortOptions = [
  { caption: "Activity, Recent Day", value: "activity" },
  { caption: "Creation Date", value: "creation"},
  { caption: "Score", value: "votes" },
  { caption: "Hot Tab", value: "hot" },
  { caption: "Hot Week Tab", value: "week" },
  { caption: "Hot Month Tab", value: "month" }
]

const DialogType2 = React.createClass({
  displayName : 'DialogType2',

  getInitialState(){
    this.stock = null;
    this.sortByItem = {};
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

 _handlerSelectSortBy(item){
   this.sortByItem = item;
 },

 _handlerLoad(event){
   const repo = this.inputRepo.getValue()
       , { requestType } = this.props
       , { value } = this.sortByItem

   this.props.onLoad({
     repo, requestType,
     sort : value
   });
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
        <RowInputSelect
           caption="Sort By:"
           placeholder="Default: Hot Week Tab"
           options={_sortOptions}
           onSelect={this._handlerSelectSortBy}
        />
      </ZhDialog>
    );
  }
});

export default DialogType2;
