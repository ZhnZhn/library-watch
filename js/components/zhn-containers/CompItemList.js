"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useMenuMore = _interopRequireDefault(require("../hooks/useMenuMore"));
var _itemStore = require("../../flux/itemStore");
var _ModalSlider = _interopRequireDefault(require("../zhn-modal-slider/ModalSlider"));
var _ModelMore = _interopRequireDefault(require("./ModelMore"));
var _ContainerCaption = _interopRequireDefault(require("../zhn-atoms/ContainerCaption"));
var _SvgHrzResize = _interopRequireDefault(require("../zhn-moleculs/SvgHrzResize"));
var _ScrollPane = _interopRequireDefault(require("../zhn-atoms/ScrollPane"));
var _CL = _interopRequireDefault(require("../styles/CL"));
var _jsxRuntime = require("react/jsx-runtime");
const RESIZE_INIT_WIDTH = 635,
  RESIZE_MIN_WIDTH = 375,
  RESIZE_MAX_WIDTH = 1200,
  DELTA = 10,
  S_ROOT = {
    position: 'relative',
    backgroundColor: '#4d4d4d',
    width: 635,
    height: 'calc(100vh - 71px)',
    minHeight: 500,
    padding: '0px 0px 16px',
    marginLeft: 16,
    borderRadius: 4,
    boxShadow: '1px 4px 6px 1px rgba(0, 0, 0, 0.6)',
    overflowY: 'hidden',
    overflowX: 'hidden'
  },
  S_BLOCK = {
    display: 'inline-block'
  },
  S_NONE = {
    display: 'none'
  },
  S_SCROLL = {
    overflowY: 'auto',
    height: '92%',
    paddingRight: 10
  },
  S_BT_MORE = {
    position: 'relative',
    top: 3,
    marginRight: 6
  };
const _getWidth = style => parseInt(style.width, 10) || RESIZE_INIT_WIDTH,
  _toStyleWidth = width => width + 'px',
  _getElementStyle = element => {
    const {
      style
    } = element || {};
    return style || {};
  },
  _resizeTo = (ref, width) => {
    _getElementStyle((0, _uiApi.getRefValue)(ref)).width = _toStyleWidth(width);
  },
  _plusToWidth = ref => {
    const style = _getElementStyle((0, _uiApi.getRefValue)(ref)),
      w = _getWidth(style) + DELTA;
    if (w < RESIZE_MAX_WIDTH) {
      style.width = _toStyleWidth(w);
    }
  },
  _minusToWidth = ref => {
    const style = _getElementStyle((0, _uiApi.getRefValue)(ref)),
      w = _getWidth(style) - DELTA;
    if (w > RESIZE_MIN_WIDTH) {
      style.width = _toStyleWidth(w);
    }
  };
const CompItemList = _ref => {
  let {
    caption,
    browserType,
    chartType,
    onRemoveAll,
    onCloseContainer
  } = _ref;
  const _refRootElement = (0, _uiApi.useRef)(),
    _refScroll = (0, _uiApi.useRef)(),
    [state, setState] = (0, _uiApi.useState)(() => ({
      isShow: false,
      configs: [],
      chartType
    })),
    {
      isShow,
      configs
    } = state,
    [_MENU_MODEL, _isMenuMore, _toggleMenuMore, _showMenuMore] = (0, _useMenuMore.default)(_ModelMore.default, {
      chartType,
      onMinWidth: () => _resizeTo(_refRootElement, RESIZE_MIN_WIDTH),
      onInitialWidth: () => _resizeTo(_refRootElement, RESIZE_INIT_WIDTH),
      onPlusWidth: () => _plusToWidth(_refRootElement),
      onMinusWidth: () => _minusToWidth(_refRootElement),
      onRemoveAll
    })
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClose = (0, _uiApi.useCallback)(() => {
      onCloseContainer(chartType, browserType);
      setState(prevState => ({
        ...prevState,
        isShow: false
      }));
    }, []);
  // chartType, browserType, onCloseContainer
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    setState(prevState => ({
      ...prevState,
      ...(0, _itemStore.getItemByType)(chartType)
    }));
  }, []);
  // chartType
  /*eslint-enable react-hooks/exhaustive-deps */
  (0, _itemStore.useMsItem)(msItem => {
    if (msItem) {
      if (msItem.chartType === chartType && msItem.close) {
        _hClose();
      }
      if (msItem.chartCont && msItem.chartCont.chartType === chartType) {
        const _scrollEl = (0, _uiApi.getRefValue)(_refScroll);
        if (_scrollEl) {
          _scrollEl.scrollTop();
        }
        setState(prevState => ({
          ...prevState,
          ...msItem.chartCont
        }));
      }
    }
  });
  const [_style, _className] = isShow ? [S_BLOCK, _CL.default.SHOW_POPUP] : [S_NONE];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    ref: _refRootElement,
    className: _className,
    style: {
      ...S_ROOT,
      ..._style
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalSlider.default, {
      isShow: _isMenuMore,
      className: _CL.default.MENU_MORE,
      model: _MENU_MODEL,
      onClose: _toggleMenuMore
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ContainerCaption.default, {
      moreStyle: S_BT_MORE,
      caption: caption,
      onMore: _showMenuMore,
      onClose: _hClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgHrzResize.default, {
        elementRef: _refRootElement,
        initWidth: RESIZE_INIT_WIDTH,
        minWidth: RESIZE_MIN_WIDTH,
        maxWidth: RESIZE_MAX_WIDTH
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ScrollPane.default, {
      ref: _refScroll,
      style: S_SCROLL,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: configs
      })
    })]
  });
};
var _default = CompItemList;
exports.default = _default;
//# sourceMappingURL=CompItemList.js.map