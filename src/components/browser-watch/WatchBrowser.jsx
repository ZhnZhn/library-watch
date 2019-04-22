import React from 'react';
import createReactClass from 'create-react-class'
import classNames from 'classnames';

import WithDnDStyle from './with/WithDnDStyle';
import createHandlerDnDGroup from './with/createHandlerDnDGroup';
import createHandlerDnDList from './with/createHandlerDnDList';
import createHandlerDnDItem from './with/createHandlerDnDItem';

import { ModalDialog } from '../../constants/Type';
import ComponentActions from '../../flux/actions/ComponentActions';
import BrowserActions from '../../flux/actions/BrowserActions';
import WatchActions from '../../flux/actions/WatchActions';

import Browser from '../zhn-atoms/Browser';
import CaptionRow from '../zhn-atoms/CaptionRow';
import ButtonSave from '../zhn-moleculs/ButtonSave';
import ButtonCircle from '../zhn-atoms/ButtonCircle';
import ShowHide from '../zhn-atoms/ShowHide';
import WrapperInputSearch from './WrapperInputSearch';

import ScrollPane from '../zhn-atoms/ScrollPane';
import OpenClose2 from '../zhn-atoms/OpenClose2';
import WatchItem from './WatchItem';


const DRAG = {
  GROUP : 'GROUP',
  LIST : 'LIST',
  ITEM : 'ITEM'
}

const CLASS = {
  BROWSER_WATCH : "browser-watch",
  BROWSER_WATCH__30 : "browser-watch--1r",
  BROWSER_WATCH__60 : "browser-watch--2r"
}


const styles = {
  browser : {
    paddingRight: '0px',
    maxWidth: '500px'
  },
  captionRoot : {
     minWidth: '340px'
  },
  captionRootDouble : {
     minWidth: '310px'
  },
  editBarDiv : {
    marginBottom: '10px'
  },
  btCircle : {
    marginLeft: '20px'
  },
  btCircleRight : {
    marginLeft: '20px',
    marginRight: '20px'
  },
  btEditBarList : {
    marginLeft: '20px'
  },
  wrapperSearch : {
     paddingBottom: '8px',
     width: '100%',
     paddingRight: '24px'
  },
  scrollDiv : {
    overflowY: 'auto',
    height: '92%',
    paddingRight: '10px'
  },
  groupDiv : {
    lineHeight : 2
  },
  listDiv : {
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

const WatchBrowser = createReactClass({
  ...WithDnDStyle,
  ...createHandlerDnDGroup(DRAG, WatchActions),
  ...createHandlerDnDList(DRAG, WatchActions),
  ...createHandlerDnDItem(DRAG, WatchActions),

  getInitialState(){
    const { isShow=false, isEditMode=false, store } = this.props;

    this.isShouldUpdateFind = false;

    return {
      isShow : isShow,
      isModeEdit : isEditMode,
      isShowFind : false,
      scrollClass : this._calcScrollClass(false, isEditMode),
      watchList : store.getWatchList()
    }
  },

  _calcScrollClass(isShowFind, isModeEdit){
    return classNames({
      [CLASS.BROWSER_WATCH] : !(isShowFind && isModeEdit),
      [CLASS.BROWSER_WATCH__30] : (isShowFind && !isModeEdit) || (!isShowFind && isModeEdit),
      [CLASS.BROWSER_WATCH__60] : (isShowFind && isModeEdit)
    })
  },

  componentWillMount(){
    this.unsubscribe = this.props.store.listen(this._onStore);
  },
  componentWillUnmount(){
    this.unsubscribe();
  },
  _onStore(actionType, data){
     const { browserType, showAction, updateAction } = this.props;
     if (actionType === showAction && data === browserType ){
       this._handlerShow();
     } else if (actionType === updateAction) {
       const { isModeEdit } = this.state
       this.isShouldUpdateFind = true;
       this.setState({
         watchList: data,
         isShowFind : false,
         scrollClass : this._calcScrollClass(false, isModeEdit)
      })
    }
  },

  _handlerHide(){
     if (!this.props.isDoubleWatch){
       this.setState({ isShow : false });
     } else {
       BrowserActions.toggleWatchDbBrowser();
     }
  },
  _handlerShow(){
    if (!this.props.isDoubleWatch){
     this.setState({ isShow : true });
    }
  },

  _handlerToggleEditMode(){
    const { isShowFind, isModeEdit } = this.state
         , _isModeEdit = !isModeEdit
    this.setState({
      isModeEdit : _isModeEdit,
      scrollClass : this._calcScrollClass(isShowFind, _isModeEdit)
    });
  },

  _handlerToggleFindInput(){
    const { isShowFind, isModeEdit } = this.state
         , _isShowFind = !isShowFind
    this.setState({
      isShowFind : _isShowFind,
      scrollClass : this._calcScrollClass(_isShowFind, isModeEdit)
    })
  },

  _handlerEditGroup(){
    ComponentActions.showModalDialog(ModalDialog.EDIT_WATCH_GROUP);
  },
  _handlerEditList(){
    ComponentActions.showModalDialog(ModalDialog.EDIT_WATCH_LIST);
  },
  _handlerDouble(){
    BrowserActions.toggleWatchDbBrowser();
  },

  _renderWatchList(watchList){
     const { isModeEdit } = this.state;
     return watchList.groups.map((group, index) => {
       const {caption, lists} = group;
       return (
               <OpenClose2
                  key={caption}
                  style={styles.groupDiv}
                  caption={caption}
                  isClose={true}
                  isDraggable={isModeEdit}
                  option={{ caption }}
                  onDragStart={this._handlerDragStartGroup}
                  onDragEnter={this._handlerDragEnterGroup}
                  onDragOver={this._handlerDragOverGroup}
                  onDragLeave={this._handlerDragLeaveGroup}
                  onDrop={this._handlerDropGroup}
                >
                  {lists && this._renderLists(lists, caption)}
                </OpenClose2>
              )
     })
  },

  _renderLists(lists, groupCaption){
    const { isModeEdit } = this.state;
    return lists.map((list) => {
      const { caption, items } = list;
      return (
        <OpenClose2
           key={caption}
           fillOpen={'#80c040'}
           style={styles.listDiv}
           styleNotSelected={styles.itemNotSelected}
           caption={caption}
           isClose={true}
           isDraggable={isModeEdit}
           option={{ groupCaption, caption }}
           onDragStart={this._handlerDragStartList}
           onDragEnter={this._handlerDragEnterList}
           onDragOver={this._handlerDragOverList}
           onDragLeave={this._handlerDragLeaveList}
           onDrop={this._handlerDropList}
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
              onDragStart={this._handlerDragStartItem}
              onDragOver={this._handlerDragOverItem}
              onDragEnter={this._handlerDragEnterItem}
              onDragLeave={this._handlerDragLeaveItem}
              onDrop={this._handlerDropItem}
           />
        );
      })
  },

  _renderEditBar(isModeEdit){
    if (isModeEdit){
      return (
        <div style={styles.editBarDiv}>
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
             style={styles.btEditBarList}
             onClick={this._handlerEditList}
          />
          <ButtonCircle
             caption={'DB'}
             title="Double Watch Browser"
             className={'bt__watch__bar'}
             isWithoutDefault={true}
             style={styles.btEditBarList}
             onClick={this._handlerDouble}
          />
        </div>
      )
    } else {
      return null;
    }
  },

  _renderFindInput(watchList){
    const { isShowFind } = this.state
    const _isShouldUpdate = (isShowFind && this.isShouldUpdateFind)
             ? (()=>{ this.isShouldUpdateFind = false; return true; })
             : false;

    return (
      <ShowHide isShow={isShowFind}>
        <WrapperInputSearch
            style={styles.wrapperSearch}
            data={watchList}
            isShouldUpdate={_isShouldUpdate}
            onSelect={this._handlerClickItem}
        />
      </ShowHide>
    );
  },

  render(){
    const { caption, isDoubleWatch, store } = this.props
        , {
            isShow, isModeEdit,
            scrollClass, watchList
          } = this.state
        , _styleCaption = (isDoubleWatch)
               ? styles.captionRootDouble
               : styles.captionRoot
        , _captionEV = (isModeEdit) ? 'V' : 'E'
        , _titleEV = (isModeEdit)
              ? "Toggle to View Mode"
              : "Toggle to Edit Mode";

    return (
       <Browser
          isShow={isShow}
          style={styles.browser}
        >
         <CaptionRow
            styleRoot={_styleCaption}
            caption={caption}
            onClose={this._handlerHide}
         >
           <ButtonSave
             className="bt__watch__caption"
             store={store}
           />
           <ButtonCircle
              className="bt__watch__caption"
              caption={_captionEV}
              title={_titleEV}
              isWithoutDefault={true}
              onClick={this._handlerToggleEditMode}
           />
           <ButtonCircle
             className="bt__watch__caption"
             caption={'F'}
             title="Show/Hide : Find Item Input"
             isWithoutDefault={true}
             onClick={this._handlerToggleFindInput}
           />
           { !isDoubleWatch &&
             <ButtonCircle
                className="bt__watch__caption"
                caption={'B'}
                title="BackUp Watch Items to JSON File"
                isWithoutDefault={true}
                onClick={WatchActions.backupToJson}
              />
           }
           { !isDoubleWatch &&
             <ButtonCircle
                className="bt__watch__caption"
                caption={'L'}
                title="Load Watch Items from JSON File"
                isWithoutDefault={true}
                onClick={ComponentActions.showModalDialog.bind(null, ModalDialog.LOAD_FILE, {
                   onLoad : WatchActions.loadFromJson
                })}
              />
           }
         </CaptionRow>
         {this._renderEditBar(isModeEdit)}
         { watchList && this._renderFindInput(watchList)}
         <ScrollPane className={scrollClass}>
           {watchList && this._renderWatchList(watchList)}
         </ScrollPane>
      </Browser>
    )
  }
});

export default WatchBrowser
