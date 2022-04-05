import { getRefValue } from '../uiApi';
import useDialog from './useDialog';
import useSelectItem from './useSelectItem';
import useDialogButtons from './useDialogButtons';
import memoIsShow from './memoIsShow';

import Dialog from './Dialog';
import D from './DialogCell';

const MARKET_SHARES = [
  { caption: "OS: Desktop, Mobile, Tablet, Console", value: "os"},
  { caption: "Windows: Desktop", value: "win-desktop"},
  { caption: "macOS: Desktop", value: "mac-desktop"},
  { caption: "Android: Mobile, Tablet", value: "android-mobile" },
  { caption: "IOS: Mobile, Tablet", value: "ios-mobile" },
  { caption: "Browser: All Platforms", value: "browser" }
]
, REGIONS = [
  { caption: "Worldwide", value: "worlwide", v2: "ww"  },
  { caption: "Africa", value: "africa", v2: "af" },
  { caption: "Asia", value: "asia", v2: "as" },
  { caption: "Antarctica", value: "antarctica", v2: "an" },
  { caption: "Australia", value: "australia", v2: "au" },
  { caption: "Europe", value: "europe", v2: "eu" },
  { caption: "North America", value: "north-america", v2: "na" },
  { caption: "South America", value: "south-america", v2: "sa" },
  { caption: "Oceania", value: "oceania", v2: "oc" }
]
, _getItemCaption = item => item.caption
, DF_MARKET_SHARE = MARKET_SHARES[0]
, ITEM_PLACEHOLDER = _getItemCaption(DF_MARKET_SHARE)
, DF_REGION = REGIONS[0]
, REGION_PLACEHOLDER = _getItemCaption(DF_REGION);

const DialogType3 = memoIsShow(({
  isShow,
  caption,
  requestType,
  onShow,
  onLoad,
  onClose
}) => {
  const [
    MENU_MODEL,
    TOOLBAR_BUTTONS,
    isToolbar,
    isShowLabels
  ] = useDialog()
  , [
    _refItem,
    _hSelectItem
  ] = useSelectItem(DF_MARKET_SHARE)
  , [
    _refRegion,
    _hSelectRegion
  ] = useSelectItem(DF_REGION)
  , [
    validationMessages,
    COMMAND_BUTTONS,
    hClose
  ] = useDialogButtons((
    setValidationMessages,
    clearValidationMessages
  ) => {
    const {
      value,
      caption
    } = getRefValue(_refItem ) || DF_MARKET_SHARE;
    onLoad({
      requestType,
      value,
      caption,
      region: getRefValue(_refRegion) || DF_REGION
    });
  }, onClose);


  return (
    <Dialog
       isShow={isShow}
       isToolbar={isToolbar}
       caption={caption}
       menuModel={MENU_MODEL}
       toolbarButtons={TOOLBAR_BUTTONS}
       commandButtons={COMMAND_BUTTONS}
       validationMessages={validationMessages}
       onShow={onShow}
       onClose={hClose}
    >
      <D.RowInputSelect
         isShowLabel={isShowLabels}
         caption="Item"
         placeholder={ITEM_PLACEHOLDER}
         options={MARKET_SHARES}
         onSelect={_hSelectItem}
      />
      <D.RowInputSelect
         isShowLabel={isShowLabels}
         caption="Region"
         placeholder={REGION_PLACEHOLDER}
         options={REGIONS}
         onSelect={_hSelectRegion}
      />
    </Dialog>
  );
});

export default DialogType3
