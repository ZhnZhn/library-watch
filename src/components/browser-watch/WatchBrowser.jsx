import {
  useRef,
  useState,
  useMemo,
  getRefValue
} from '../uiApi';
import useBool from '../hooks/useBool';
import useToggle from '../hooks/useToggle';
import useListen from '../hooks/useListen';

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
, CL_BROWSER_WATCH__30 = `${CL_BROWSER_WATCH}--1r`
, CL_BROWSER_WATCH__60 = `${CL_BROWSER_WATCH}--2r`
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

const _setRefValue = (ref, value) => ref.current = value;

const WatchBrowser = ({
  isShow,
  isEditMode,
  isDoubleWatch,
  caption,
  store,
  browserType,
  showAction,
  updateAction
}) => {
  const _refIsShouldUpdateFind = useRef(false)
  , [isShowComp, showComp, hideComp] = useBool(isShow)
  , [isModeEdit, _toggleEditMode] = useToggle(isEditMode)
  , [isShowFind, _toggleFindInput] = useToggle()
  , [watchList, setWatchList] = useState(store.getWatchList)
  /*eslint-disable react-hooks/exhaustive-deps */
  , [_handlerHide, _handlerShow] = useMemo(() => [
    () => {
      if (isDoubleWatch) {
        toggleWatchDbBrowser()
      } else {
        hideComp()
      }
    },
    () => {
      if (!isDoubleWatch) {
        showComp()
      }
    }
  ], [isDoubleWatch])
  // hideComp, showComp
  /*eslint-enable react-hooks/exhaustive-deps */

  useListen(store, (actionType, data) => {
    if (actionType === showAction && data === browserType ){
      _handlerShow();
    } else if (actionType === updateAction) {
      _setRefValue(_refIsShouldUpdateFind, true)
      setWatchList({...data})
      _toggleFindInput(false)
   }
  })

  const { groups } = watchList || {}
  , _styleCaption = isDoubleWatch
     ? S_CAPTION_ROOT_DOUBLE
     : S_CAPTION_ROOT
  , [_captionEV, _titleEV] = isModeEdit
     ? ['V', 'Toggle to View Mode']
     : ['E', 'Toggle to Edit Mode']
 , _isShouldUpdateSearchInput = (isShowFind && getRefValue(_refIsShouldUpdateFind))
     ? (()=>{ _setRefValue(_refIsShouldUpdateFind, false); return true; })
     : false
 , _scrollClass = _crScrollClass(isShowFind, isModeEdit);

  return (
    <Browser
       isShow={isShowComp}
       style={S_BROWSER}
     >
      <CaptionRow
         style={_styleCaption}
         caption={caption}
         onClose={_handlerHide}
      >
        <ButtonSave
          className={CL_BT_CAPTION}
          store={store}
        />
        <ButtonCircle
           isWithoutDefault={true}
           className={CL_BT_CAPTION}
           caption={_captionEV}
           title={_titleEV}
           onClick={_toggleEditMode}
        />
        <ButtonCircle
          isWithoutDefault={true}
          className={CL_BT_CAPTION}
          caption="F"
          title="Show/Hide : Find Item Input"
          onClick={_toggleFindInput}
        />
        { !isDoubleWatch && <>
            <ButtonCircle
               isWithoutDefault={true}
               className={CL_BT_CAPTION}
               caption="B"
               title="BackUp Watch Items to JSON File"
               onClick={backupWatchItemsToJson}
             />
             <ButtonCircle
                isWithoutDefault={true}
                className={CL_BT_CAPTION}
                caption="L"
                title="Load Watch Items from JSON File"
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
  );
};

export default WatchBrowser
