import { Component } from 'react';

import {
  showDialogLoadItemsFromFile,
  toggleWatchDbBrowser,
  backupWatchItemsToJson
} from './Handlers';

import Comp from '../Comp';

import EditBar from './EditBar';
import SearchInput from './SearchInput';
import WatchGroups from './WatchGroups';

const {
  Browser,
  CaptionRow,
  ButtonCircle,
  ButtonSave,
  ScrollPane
} = Comp;

const CL_BROWSER_WATCH = "browser-watch"
, CL_BROWSER_WATCH__30 = "browser-watch--1r"
, CL_BROWSER_WATCH__60 = "browser-watch--2r"
, CL_BT_CAPTION = "bt__watch__caption"

, S_BROWSER = {
  maxWidth: 500,
  paddingRight: 0
}
, S_CAPTION_ROOT = { minWidth: 340 }
, S_CAPTION_ROOT_DOUBLE = { minWidth: 310 };

const _crScrollClass = (
  isShowFind,
  isModeEdit
) => isShowFind && isModeEdit
  ? CL_BROWSER_WATCH__60
  : isShowFind || isModeEdit
      ? CL_BROWSER_WATCH__30
      : CL_BROWSER_WATCH;

class WatchBrowser extends Component {

  constructor(props){
    super(props)
    const {
      isShow,
      isEditMode,
      store
    } = props;

    this.isShouldUpdateFind = false;

    this.state = {
      isShow: !!isShow,
      isModeEdit: !!isEditMode,
      isShowFind: false,
      watchList: store.getWatchList()
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
     , { groups } = watchList || {}
     , _styleCaption = isDoubleWatch
        ? S_CAPTION_ROOT_DOUBLE
        : S_CAPTION_ROOT
     , [_captionEV, _titleEV] = isModeEdit
        ? ['V', 'Toggle to View Mode']
        : ['E', 'Toggle to Edit Mode']
    , _isShouldUpdateSearchInput = (isShowFind && this.isShouldUpdateFind)
        ? (()=>{ this.isShouldUpdateFind = false; return true; })
        : false
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
           { !isDoubleWatch && <>
               <ButtonCircle
                  className={CL_BT_CAPTION}
                  caption="B"
                  title="BackUp Watch Items to JSON File"
                  isWithoutDefault={true}
                  onClick={backupWatchItemsToJson}
                />
                <ButtonCircle
                   className={CL_BT_CAPTION}
                   caption="L"
                   title="Load Watch Items from JSON File"
                   isWithoutDefault={true}
                   onClick={showDialogLoadItemsFromFile}
                />
              </>
           }
         </CaptionRow>
         <EditBar is={isModeEdit} />
         <SearchInput
            isShow={isShowFind}
            isShouldUpdate={_isShouldUpdateSearchInput}
            data={watchList}
         />
         <ScrollPane className={_scrollClass}>
           <WatchGroups
              isModeEdit={isModeEdit}
              groups={groups}
           />
         </ScrollPane>
      </Browser>
    )
  }
}


export default WatchBrowser
