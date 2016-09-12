import React from 'react';

import { ModalDialog } from '../../constants/Type';
import ComponentActions from '../../flux/actions/ComponentActions';
import WatchActions from '../../flux/actions/WatchActions';


import Browser from '../zhnAtoms/Browser';
import CaptionRow from '../zhnAtoms/CaptionRow';
import ButtonCircle from '../zhnAtoms/ButtonCircle';
import ScrollPane from '../zhnAtoms/ScrollPane';
import OpenClose2 from '../zhnAtoms/OpenClose2';
import WatchItem from './WatchItem';

const DRAG = {
  ITEM : 'ItemType'
}

const styles = {
  browser : {
    paddingRight: '0px'
  },
  btCircle : {
    marginLeft: '20px'
  },
  scrollDiv : {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  groupDiv : {
    marginLeft : '8px',
    paddingLeft : '12px',
    borderLeft : '1px solid yellow',
    lineHeight : 2
  },
  itemNotSelected : {
    borderBottom : '1px solid rgba(128, 192, 64, 0.6)',
    marginRight : '10px'
  }
};

const WatchBrowser = React.createClass({
  getInitialState(){
    const { store } = this.props;
    return {
      isShow : false,
      isModeEdit : false,
      watchList : store.getWatchList()
    }
  },

  componentWillMount: function(){
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componentWillUnmount: function(){
    this.unsubscribe();
  },
  _onStore: function(actionType, data){
     const { browserType, showAction, updateAction } = this.props;
     if (actionType === showAction && data === browserType ){
      this._handlerShow();
    } else if (actionType === updateAction) {
      this.setState({ watchList: data })
    }
  },

  _handlerHide(){
     this.setState({ isShow : false })
  },
  _handlerShow(){
     this.setState({ isShow : true })
  },

  _handlerSaveWatch(){
    WatchActions.saveWatch();
  },
  _handlerToggleEditMode(){
    this.setState({ isModeEdit : !this.state.isModeEdit });
  },

  _handlerEditGroup(){
    ComponentActions.showModalDialog(ModalDialog.EDIT_WATCH_GROUP);
  },
  _handlerEditList(){
    ComponentActions.showModalDialog(ModalDialog.EDIT_WATCH_LIST);
  },

  _renderWatchList(watchList){
     return watchList.groups.map((group, index) => {
       const {caption, lists} = group;
       return (
               <OpenClose2
                  key={index}
                  caption={caption}
                  isClose={true}
                >
                {lists && this._renderLists(lists, caption)}
                </OpenClose2>
              )
     })
  },

  _renderLists(lists, groupCaption){
    return lists.map((list, index) => {
      const {caption, items} = list;
      return (
        <OpenClose2
           key={index}
           fillOpen={'#80c040'}
           style={styles.groupDiv}
           styleNotSelected={styles.itemNotSelected}
           caption={caption}
           isClose={true}
        >
         {items && this._renderItems(items, groupCaption, caption)}
        </OpenClose2>
      )
    })
  },


  _handlerClickItem(item){
    ComponentActions.showModalDialog(ModalDialog.LOAD_WATCH_ITEM, item);
  },
  _handlerRemoveItem(option, event){
    event.stopPropagation();
    WatchActions.removeItem(option);
  },

  _handlerDragStart({groupCaption, listCaption, caption}, ev){
    ev.dataTransfer.effectAllowed="move";
    ev.dataTransfer.dropEffect="move";
    //.setDragImage(img, 0, 0);
    const _data = {
      dragId : `${groupCaption};${listCaption};${caption}`,
      xType : DRAG.ITEM
    };
    ev.dataTransfer.setData("text", JSON.stringify(_data));

  },
  _handlerDrop({ groupCaption, listCaption, caption }, ev){
     const _data = JSON.parse(ev.dataTransfer.getData("text"));
     if (_data.xType === DRAG.ITEM) {
       ev.preventDefault();
       WatchActions.dragDrop({
         dragId : _data.dragId,
         dropId : `${groupCaption};${listCaption};${caption}`
      });
    }
  },
  _handlerDragOver(ev){
     ev.preventDefault();
  },

  _renderItems(items, groupCaption, listCaption) {
      const {isModeEdit} = this.state;
      return items.map((item, index) => {
        const { caption } = item
            , _className = (index % 2)
                 ? 'row__topic__even not-selected'
                 : 'row__topic__odd not-selected'
        return (
           <WatchItem
              key={caption}
              className={_className}
              isModeEdit={isModeEdit}
              item={item}
              option={{ groupCaption, listCaption, caption }}
              onClick={this._handlerClickItem}
              onClose={this._handlerRemoveItem}
              onDragStart={this._handlerDragStart}
              onDragOver={this._handlerDragOver}
              onDragEnter={this._handlerDragOver}
              onDrop={this._handlerDrop}
           />
        );
      })
  },

  _renderEditBar(isModeEdit){
    if (isModeEdit){
      return (
        <div style={{marginBottom: '10px'}}>
           <ButtonCircle
             caption={'GROUP'}
             title="Edit Group"
             className={'bt__watch__bar'}
             isWithoutDefault={true}
             onClick={this._handlerEditGroup}
          />
          <ButtonCircle
             caption={'LIST'}
             title="Edit Group List"
             className={'bt__watch__bar'}
             isWithoutDefault={true}
             style={{marginLeft: '20px'}}
             onClick={this._handlerEditList}
          />
        </div>
      )
    } else {
      return null;
    }
  },

  render(){
    const { caption } = this.props
        , { isShow, isModeEdit, watchList } = this.state
        , _captionEV = (isModeEdit) ? 'V' : 'E'
        , _titleEV = (isModeEdit)
              ? "Toggle to View Mode"
              : "Toggle to Edit Mode";
    return (
       <Browser isShow={isShow} style={Object.assign({}, styles.browser, { maxWidth: '500px' })}>
         <CaptionRow
            caption={caption}
            onClose={this._handlerHide}
         >
           <ButtonCircle
             caption={'S'}
             title="Save Watch"
             style={styles.btCircle}
             onClick={this._handlerSaveWatch}
           />
           <ButtonCircle
              caption={_captionEV}
              title={_titleEV}
              style={styles.btCircle}
              onClick={this._handlerToggleEditMode}
           />
         </CaptionRow>
         {this._renderEditBar(isModeEdit)}
         <ScrollPane style={styles.scrollDiv}>
           {watchList && this._renderWatchList(watchList)}
         </ScrollPane>
      </Browser>
    )
  }
});

export default WatchBrowser
