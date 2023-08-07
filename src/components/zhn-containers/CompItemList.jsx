import {
  useRef,
  useState,
  useCallback,
  useEffect,
  getRefValue
} from '../uiApi';

import useMenuMore from '../hooks/useMenuMore';

import {
  getItemByType,
  useMsItem
} from '../../flux/itemStore';

import ModalSlider from '../zhn-modal-slider/ModalSlider'
import crModelMore from './ModelMore'
import ContainerCaption from '../zhn-atoms/ContainerCaption';
import SvgHrzResize from '../zhn-moleculs/SvgHrzResize';
import ScrollPane from '../zhn-atoms/ScrollPane';
import CL from '../styles/CL';
import { S_COMP_ITEM_LIST } from '../styles/ContainerStyles';

const RESIZE_INIT_WIDTH = 635
, RESIZE_MIN_WIDTH = 375
, RESIZE_MAX_WIDTH = 1200
, DELTA = 10

, S_BLOCK = { display: 'inline-block' }
, S_NONE = { display: 'none' }
, S_SCROLL = {
  overflowY: 'auto',
  height: '92%',
  paddingRight: 10
}
, S_BT_MORE = {
  position: 'relative',
  top: 3,
  marginRight: 6
};

const _getWidth = style =>
  parseInt(style.width, 10) || RESIZE_INIT_WIDTH
, _toStyleWidth = width => width + 'px'
, _getElementStyle = element => {
  const { style } = element || {};
  return style || {};
}
, _resizeTo = (ref, width) => {
  _getElementStyle(getRefValue(ref)).width = _toStyleWidth(width)
}
, _plusToWidth = ref => {
  const style = _getElementStyle(getRefValue(ref))
  , w = _getWidth(style) + DELTA;
  if (w < RESIZE_MAX_WIDTH) {
     style.width = _toStyleWidth(w)
  }
}
, _minusToWidth = ref => {
  const style = _getElementStyle(getRefValue(ref))
  , w = _getWidth(style) - DELTA;
  if (w > RESIZE_MIN_WIDTH) {
    style.width = _toStyleWidth(w)
  }
};

const CompItemList = ({
  caption,
  browserType,
  chartType,
  onRemoveAll,
  onCloseContainer
}) => {
  const _refRootElement = useRef()
  , _refScroll = useRef()
  , [
    state,
    setState
  ] = useState(() => ({
    isShow: false,
    configs: [],
    chartType
  }))
  , {
    isShow,
    configs
  } = state
  , [
    _MENU_MODEL,
    _isMenuMore,
    _toggleMenuMore,
    _showMenuMore
  ] = useMenuMore(crModelMore, {
    chartType,
    onMinWidth: () => _resizeTo(_refRootElement, RESIZE_MIN_WIDTH),
    onInitialWidth: () => _resizeTo(_refRootElement, RESIZE_INIT_WIDTH),
    onPlusWidth: () => _plusToWidth(_refRootElement),
    onMinusWidth: () => _minusToWidth(_refRootElement),
    onRemoveAll
  })
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hClose = useCallback(() => {
    onCloseContainer(chartType, browserType);
    setState(prevState => ({
      ...prevState,
      isShow: false
    }))
  }, [])
  // chartType, browserType, onCloseContainer
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      ...getItemByType(chartType)
    }))
  }, [])
  // chartType
  /*eslint-enable react-hooks/exhaustive-deps */
  useMsItem(msItem => {
    if (msItem) {
      if (msItem.chartType === chartType && msItem.close) {
        _hClose();
      }
      if (msItem.chartCont && msItem.chartCont.chartType === chartType) {
        const _scrollEl = getRefValue(_refScroll)
        if (_scrollEl) {
          _scrollEl.scrollTop()
        }
        setState(prevState => ({
          ...prevState,
          ...msItem.chartCont
        }))
      }
    }
  })

  const [_style, _className] = isShow
    ? [S_BLOCK, CL.SHOW_POPUP]
    : [S_NONE];

  return (
    <div
       ref={_refRootElement}
       className={_className}
       style={{...S_COMP_ITEM_LIST, ..._style}}
    >
      <ModalSlider
        isShow={_isMenuMore}
        className={CL.MENU_MORE}
        model={_MENU_MODEL}
        onClose={_toggleMenuMore}
      />
      <ContainerCaption
         moreStyle={S_BT_MORE}
         caption={caption}
         onMore={_showMenuMore}
         onClose={_hClose}
      >
        <SvgHrzResize
          elementRef={_refRootElement}
          initWidth={RESIZE_INIT_WIDTH}
          minWidth={RESIZE_MIN_WIDTH}
          maxWidth={RESIZE_MAX_WIDTH}
        />
      </ContainerCaption>
      <ScrollPane
        ref={_refScroll}
        style={S_SCROLL}
      >
        <div>
          {configs}
        </div>
      </ScrollPane>
    </div>
  );
};

export default CompItemList
