import { Component } from 'react';

import withWatchDnD from './decorators/withWatchDnD';

import { ModalDialog } from '../../constants/Type';
import ComponentActions from '../../flux/actions/ComponentActions';
import BrowserActions from '../../flux/actions/BrowserActions';
import WatchActions from '../../flux/actions/WatchActions';

import Comp from '../Comp'

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

const C_GROUP_OPEN = '#1b2836';
const C_LIST_OPEN = '#80c040';
const DRAG = {
  GROUP: 'GROUP',
  C_GROUP_ENTER: C_GROUP_OPEN,
  LIST: 'LIST',
  C_LIST_ENTER: C_LIST_OPEN,
  ITEM: 'ITEM'
};

const CL = {
  BROWSER_WATCH : "browser-watch",
  BROWSER_WATCH__30 : "browser-watch--1r",
  BROWSER_WATCH__60 : "browser-watch--2r",
  BT_BAR: "bt__watch__bar",
  BT_CAPTION: "bt__watch__caption",
};


const styles = {
  browser : {
    paddingRight: 0,
    maxWidth: 500
  },
  captionRoot : {
     minWidth: 340
  },
  captionRootDouble : {
     minWidth: 310
  },
  editBarDiv : {
    marginBottom: 10
  },
  btCircle : {
    marginLeft: 20
  },
  btCircleRight : {
    marginLeft: 20,
    marginRight: 20
  },
  btEditBarList : {
    marginLeft: 20
  },
  wrapperSearch : {
     paddingBottom: 8,
     width: '100%',
     paddingRight: 24
  },
  scrollDiv : {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  groupDiv : {
    lineHeight : 2
  },
  listDiv : {
    marginLeft : 8,
    paddingLeft : 12,
    borderLeft : '1px solid yellow',
    lineHeight : 2
  },
  itemNotSelected : {
    borderBottom : '1px solid rgba(128, 192, 64, 0.6)',
    marginRight : 10
  }
};

const _crScrollClass = (isShowFind, isModeEdit) =>
isShowFind && isModeEdit
  ? CL.BROWSER_WATCH__60
  : isShowFind || isModeEdit
      ? CL.BROWSER_WATCH__30
      : CL.BROWSER_WATCH;

@withWatchDnD
class WatchBrowser extends Component {

  constructor(props){
    super(props)
    const { isShow=false, isEditMode=false, store } = props;

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
       BrowserActions.toggleWatchDbBrowser();
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

  _handlerEditGroup(){
    ComponentActions.showModalDialog(ModalDialog.EDIT_WATCH_GROUP);
  }
  _handlerEditList(){
    ComponentActions.showModalDialog(ModalDialog.EDIT_WATCH_LIST);
  }
  _handlerDouble(){
    BrowserActions.toggleWatchDbBrowser();
  }

  _renderWatchList = (watchList) => {
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
           style={styles.listDiv}
           styleNotSelected={styles.itemNotSelected}
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

  _handlerClickItem(item){
    ComponentActions.showModalDialog(ModalDialog.LOAD_WATCH_ITEM, item);
  }
  _handlerRemoveItem(option, event){
    event.stopPropagation();
    WatchActions.removeItem(option);
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
              onClick={this._handlerClickItem}
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

  _renderEditBar = (isModeEdit) => {
    if (isModeEdit){
      return (
        <div style={styles.editBarDiv}>
           <ButtonCircle
             caption="GROUP"
             title="Edit Group"
             className={CL.BT_BAR}
             isWithoutDefault={true}
             onClick={this._handlerEditGroup}
          />
          <ButtonCircle
             caption="LIST"
             title="Edit Group List"
             className={CL.BT_BAR}
             isWithoutDefault={true}
             style={styles.btEditBarList}
             onClick={this._handlerEditList}
          />
          <ButtonCircle
             caption="DB"
             title="Double Watch Browser"
             className={CL.BT_BAR}
             isWithoutDefault={true}
             style={styles.btEditBarList}
             onClick={this._handlerDouble}
          />
        </div>
      )
    } else {
      return null;
    }
  }

  _renderFindInput = (watchList) => {
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
  }

  render(){
    const { caption, isDoubleWatch, store } = this.props
        , {
            isShow,
            isModeEdit,
            isShowFind,
            watchList
          } = this.state
        , _styleCaption = (isDoubleWatch)
               ? styles.captionRootDouble
               : styles.captionRoot
        , _captionEV = (isModeEdit) ? 'V' : 'E'
        , _titleEV = (isModeEdit)
              ? "Toggle to View Mode"
              : "Toggle to Edit Mode"
        , _scrollClass = _crScrollClass(isShowFind, isModeEdit);

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
             className={CL.BT_CAPTION}
             store={store}
           />
           <ButtonCircle
              className={CL.BT_CAPTION}
              caption={_captionEV}
              title={_titleEV}
              isWithoutDefault={true}
              onClick={this._handlerToggleEditMode}
           />
           <ButtonCircle
             className={CL.BT_CAPTION}
             caption="F"
             title="Show/Hide : Find Item Input"
             isWithoutDefault={true}
             onClick={this._handlerToggleFindInput}
           />
           { !isDoubleWatch &&
             <ButtonCircle
                className={CL.BT_CAPTION}
                caption="B"
                title="BackUp Watch Items to JSON File"
                isWithoutDefault={true}
                onClick={WatchActions.backupToJson}
              />
           }
           { !isDoubleWatch &&
             <ButtonCircle
                className={CL.BT_CAPTION}
                caption="L"
                title="Load Watch Items from JSON File"
                isWithoutDefault={true}
                onClick={ComponentActions.showModalDialog.bind(null, ModalDialog.LOAD_FILE, {
                   onLoad : WatchActions.loadFromJson
                })}
              />
           }
         </CaptionRow>
         {this._renderEditBar(isModeEdit)}
         {watchList && this._renderFindInput(watchList)}
         <ScrollPane className={_scrollClass}>
           {watchList && this._renderWatchList(watchList)}
         </ScrollPane>
      </Browser>
    )
  }
}

export default WatchBrowser
