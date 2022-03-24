import { Component } from 'react';

import withWatchDnD from './decorators/withWatchDnD';

import WatchActions from '../../flux/actions/WatchActions';
import {
  showDialogLoadItemsFromFile,
  showDialogWatchItem,
  toggleWatchDbBrowser,
  removeWatchItem,
  backupWatchItemsToJson
} from './WatchBarHandlers';

import Comp from '../Comp'

import EditBar from './EditBar';
import WrapperInputSearch from './WrapperInputSearch';
import WatchItem from './WatchItem';

const {
  Browser,
  CaptionRow,
  ButtonCircle,
  ButtonSave,
  ShowHide,
  ScrollPane,
  OpenClose2
} = Comp;

const C_GROUP_OPEN = '#1b2836'
, C_LIST_OPEN = '#80c040'
, DRAG = {
  GROUP: 'GROUP',
  C_GROUP_ENTER: C_GROUP_OPEN,
  LIST: 'LIST',
  C_LIST_ENTER: C_LIST_OPEN,
  ITEM: 'ITEM'
}

, CL_BROWSER_WATCH = "browser-watch"
, CL_BROWSER_WATCH__30 = "browser-watch--1r"
, CL_BROWSER_WATCH__60 = "browser-watch--2r"
, CL_BT_CAPTION = "bt__watch__caption"

, S_BROWSER = {
  maxWidth: 500,
  paddingRight: 0
}
, S_CAPTION_ROOT = { minWidth: 340 }
, S_CAPTION_ROOT_DOUBLE = { minWidth: 310 }
, S_WRAPPER_SEARCH = {
   width: '100%',
   padding: '0 24 8 0'
}
, S_GROUP_DIV = { lineHeight: 2 }
, S_LIST_DIV = {
  marginLeft: 8,
  paddingLeft: 12,
  lineHeight: 2,
  borderLeft: '1px solid yellow',
}
, S_ITEM_NOT_SELECTED = {
  marginRight: 10,
  borderBottom: '1px solid rgba(128, 192, 64, 0.6)'
};

const _crScrollClass = (
  isShowFind,
  isModeEdit
) => isShowFind && isModeEdit
  ? CL_BROWSER_WATCH__60
  : isShowFind || isModeEdit
      ? CL_BROWSER_WATCH__30
      : CL_BROWSER_WATCH;

@withWatchDnD
class WatchBrowser extends Component {

  constructor(props){
    super(props)
    const {
      isShow=false,
      isEditMode=false,
      store
    } = props;

    this._bindDnDGroup(DRAG, WatchActions)
    this._bindDnDList(DRAG, WatchActions)
    this._bindDnDItem(DRAG, WatchActions)

    this.isShouldUpdateFind = false;

    this.state = {
      isShow : isShow,
      isModeEdit : isEditMode,
      isShowFind : false,
      watchList : store.getWatchList()
    }
  }

  componentDidMount(){
    this.unsubscribe = this.props.store.listen(this._onStore);
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  _onStore = (actionType, data) => {
     const { browserType, showAction, updateAction } = this.props;
     if (actionType === showAction && data === browserType ){
       this._handlerShow();
     } else if (actionType === updateAction) {
       this.isShouldUpdateFind = true;
       this.setState({
         watchList: data,
         isShowFind : false,
      })
    }
  }

  _handlerHide = () => {
     if (!this.props.isDoubleWatch){
       this.setState({ isShow : false });
     } else {
       toggleWatchDbBrowser()
     }
  }
  _handlerShow = () => {
    if (!this.props.isDoubleWatch){
     this.setState({ isShow : true });
    }
  }

  _handlerToggleEditMode = () => {
    this.setState(prevState => ({
      isModeEdit: !prevState.isModeEdit
    }))
  }

  _handlerToggleFindInput = () => {
    this.setState(prevState => ({
      isShowFind: !prevState.isShowFind
    }))
  }

  _renderWatchList = (watchList) => {
     const { isModeEdit } = this.state;
     return watchList.groups.map((group, index) => {
       const {caption, lists} = group;
       return (
               <OpenClose2
                  key={caption}
                  style={S_GROUP_DIV}
                  caption={caption}
                  isClose={true}
                  isDraggable={isModeEdit}
                  option={{ caption }}
                  onDragStart={this._hDragStartGroup}
                  onDragEnter={this._hDragEnterGroup}
                  onDragOver={this._hDragOverGroup}
                  onDragLeave={this._hDragLeaveGroup}
                  onDrop={this._hDropGroup}
                >
                  {lists && this._renderLists(lists, caption)}
                </OpenClose2>
              )
     })
  }

  _renderLists = (lists, groupCaption) => {
    const { isModeEdit } = this.state;
    return lists.map((list) => {
      const { caption, items } = list;
      return (
        <OpenClose2
           key={caption}
           fillOpen="#80c040"
           style={S_LIST_DIV}
           styleNotSelected={S_ITEM_NOT_SELECTED}
           caption={caption}
           isClose={true}
           isDraggable={isModeEdit}
           option={{ groupCaption, caption }}
           onDragStart={this._hDragStartList}
           onDragEnter={this._hDragEnterList}
           onDragOver={this._hDragOverList}
           onDragLeave={this._hDragLeaveList}
           onDrop={this._hDropList}
        >
          {items && this._renderItems(items, groupCaption, caption)}
        </OpenClose2>
      )
    })
  }

  _handlerRemoveItem(option, event){
    event.stopPropagation();
    removeWatchItem(option)
  }

  _renderItems = (items, groupCaption, listCaption) => {
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
              onClick={showDialogWatchItem}
              onClose={this._handlerRemoveItem}
              onDragStart={this._hDragStartItem}
              onDragOver={this._hDragOverItem}
              onDragEnter={this._hDragEnterItem}
              onDragLeave={this._hDragLeaveItem}
              onDrop={this._hDropItem}
           />
        );
      })
  }

  _renderFindInput = (watchList) => {
    const { isShowFind } = this.state
    const _isShouldUpdate = (isShowFind && this.isShouldUpdateFind)
             ? (()=>{ this.isShouldUpdateFind = false; return true; })
             : false;

    return (
      <ShowHide isShow={isShowFind}>
        <WrapperInputSearch
            style={S_WRAPPER_SEARCH}
            data={watchList}
            isShouldUpdate={_isShouldUpdate}
            onSelect={showDialogWatchItem}
        />
      </ShowHide>
    );
  }

  render(){
    const {
      caption,
      isDoubleWatch,
      store
    } = this.props
    , {
        isShow,
        isModeEdit,
        isShowFind,
        watchList
     } = this.state
    , _styleCaption = isDoubleWatch
        ? S_CAPTION_ROOT_DOUBLE
        : S_CAPTION_ROOT
    , [_captionEV, _titleEV] = isModeEdit
       ? ['V', 'Toggle to View Mode']
       : ['E', 'Toggle to Edit Mode']
    , _scrollClass = _crScrollClass(isShowFind, isModeEdit);

    return (
       <Browser
          isShow={isShow}
          style={S_BROWSER}
        >
         <CaptionRow
            style={_styleCaption}
            caption={caption}
            onClose={this._handlerHide}
         >
           <ButtonSave
             className={CL_BT_CAPTION}
             store={store}
           />
           <ButtonCircle
              className={CL_BT_CAPTION}
              caption={_captionEV}
              title={_titleEV}
              isWithoutDefault={true}
              onClick={this._handlerToggleEditMode}
           />
           <ButtonCircle
             className={CL_BT_CAPTION}
             caption="F"
             title="Show/Hide : Find Item Input"
             isWithoutDefault={true}
             onClick={this._handlerToggleFindInput}
           />
           { !isDoubleWatch &&
             <ButtonCircle
                className={CL_BT_CAPTION}
                caption="B"
                title="BackUp Watch Items to JSON File"
                isWithoutDefault={true}
                onClick={backupWatchItemsToJson}
              />
           }
           { !isDoubleWatch &&
             <ButtonCircle
                className={CL_BT_CAPTION}
                caption="L"
                title="Load Watch Items from JSON File"
                isWithoutDefault={true}
                onClick={showDialogLoadItemsFromFile}
              />
           }
         </CaptionRow>
         <EditBar is={isModeEdit} />
         {watchList && this._renderFindInput(watchList)}
         <ScrollPane className={_scrollClass}>
           {watchList && this._renderWatchList(watchList)}
         </ScrollPane>
      </Browser>
    )
  }
}

export default WatchBrowser
