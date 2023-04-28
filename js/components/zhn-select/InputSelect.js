"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _uiApi = require("../uiApi");
var _useToggle2 = _interopRequireDefault(require("../hooks/useToggle"));
var _ItemOptionDf = _interopRequireDefault(require("./ItemOptionDf"));
var _DivOptions = _interopRequireDefault(require("./DivOptions"));
var _OptionStack = _interopRequireDefault(require("./OptionStack"));
var _CL = require("./CL");
var _crStyleWidth = _interopRequireDefault(require("./crStyleWidth"));
var _crAfterInputEl2 = _interopRequireDefault(require("./crAfterInputEl"));
var _crFilteredOptions = _interopRequireDefault(require("./crFilteredOptions"));
var _useStepHandlers2 = _interopRequireDefault(require("./useStepHandlers"));
var _helperFns = require("./helperFns");
var _jsxRuntime = require("react/jsx-runtime");
//import PropTypes from 'prop-types'

var DF_OPTIONS = [];
var _crInitialStateFromProps = function _crInitialStateFromProps(_ref) {
  var optionName = _ref.optionName,
    optionNames = _ref.optionNames,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? DF_OPTIONS : _ref$options;
  return {
    value: '',
    initialOptions: options,
    options: options,
    optionNames: optionNames || optionName || ''
  };
};
var FN_NOOP = function FN_NOOP() {};
var InputSelect = function InputSelect(props) {
  var style = props.style,
    width = props.width,
    optionsStyle = props.optionsStyle,
    _props$propCaption = props.propCaption,
    propCaption = _props$propCaption === void 0 ? 'caption' : _props$propCaption,
    _props$ItemOptionComp = props.ItemOptionComp,
    ItemOptionComp = _props$ItemOptionComp === void 0 ? _ItemOptionDf["default"] : _props$ItemOptionComp,
    _props$isWithInput = props.isWithInput,
    isWithInput = _props$isWithInput === void 0 ? false : _props$isWithInput,
    _props$onSelect = props.onSelect,
    onSelect = _props$onSelect === void 0 ? FN_NOOP : _props$onSelect,
    _refArrowCell = (0, _uiApi.useRef)(),
    _refDomInputText = (0, _uiApi.useRef)(),
    _useState = (0, _uiApi.useState)(function () {
      return _crInitialStateFromProps(props);
    }),
    state = _useState[0],
    setState = _useState[1],
    value = state.value,
    options = state.options,
    initialOptions = state.initialOptions,
    _useToggle = (0, _useToggle2["default"])(false),
    isShowOption = _useToggle[0],
    toggleIsShowOption = _useToggle[1],
    setIsShowOption = _useToggle[2],
    _useStepHandlers = (0, _useStepHandlers2["default"])(_decorateActiveElement, _undecorateActiveElement),
    _refOptionsElement = _useStepHandlers[0],
    _refIndexElement = _useStepHandlers[1],
    setActiveIndexOption = _useStepHandlers[2],
    getActiveIndexOption = _useStepHandlers[3],
    _getActiveElement = _useStepHandlers[4],
    _decorateActiveElement = _useStepHandlers[5],
    _undecorateActiveElement = _useStepHandlers[6],
    _stepDownOption = _useStepHandlers[7],
    _stepUpOption = _useStepHandlers[8],
    _initStateFromProps = (0, _uiApi.useCallback)(function () {
      _undecorateActiveElement();
      setState(function () {
        return _crInitialStateFromProps(props);
      });
      setIsShowOption(false);
      setActiveIndexOption(0);
      onSelect();
    }, [props.options, onSelect]),
    _hInputChange = function _hInputChange(evt) {
      var token = evt.target.value,
        tokenLn = token.length,
        valueLn = value.length;
      if (tokenLn !== valueLn) {
        if (getActiveIndexOption() !== 0) {
          _undecorateActiveElement();
          setActiveIndexOption(0);
        }
        setState(function (prevState) {
          return (0, _extends2["default"])({}, prevState, {
            value: token,
            options: (0, _crFilteredOptions["default"])(token, tokenLn > valueLn ? options : initialOptions, propCaption, isWithInput)
          });
        });
        setIsShowOption(true);
      }
    },
    _hInputKeyDown = function _hInputKeyDown(evt) {
      switch (evt.keyCode) {
        // enter
        case 13:
          {
            var _indexActiveOption = getActiveIndexOption();
            if ((0, _helperFns.isNumber)(_indexActiveOption)) {
              var item = options[_indexActiveOption];
              if (item && item[propCaption]) {
                onSelect((0, _helperFns.crOnEnterItem)(item, propCaption, isWithInput));
                setIsShowOption(false);
                setState(function (prevState) {
                  return (0, _extends2["default"])({}, prevState, {
                    value: item[propCaption]
                  });
                });
              }
            } else {
              onSelect();
            }
            break;
          }
        //escape, delete
        case 27:
        case 46:
          {
            evt.preventDefault();
            if (isShowOption) {
              setIsShowOption(false);
            } else {
              _initStateFromProps();
            }
            break;
          }
        //down
        case 40:
          {
            if (!isShowOption) {
              setIsShowOption(true);
            } else {
              evt.preventDefault();
              _stepDownOption();
            }
            break;
          }
        //up
        case 38:
          {
            if (isShowOption) {
              evt.preventDefault();
              _stepUpOption();
            }
            break;
          }
        default:
          return;
      }
    },
    _hClickItem = (0, _uiApi.useCallback)(function (item, evt) {
      _undecorateActiveElement();
      setActiveIndexOption((0, _helperFns.getDataIndex)(evt.currentTarget));
      setIsShowOption(false);
      setState(function (prevState) {
        return (0, _extends2["default"])({}, prevState, {
          value: item[propCaption]
        });
      });
      onSelect(item);
    }, []),
    domOptions = (0, _uiApi.useMemo)(function () {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionStack["default"], {
        options: options,
        indexActiveOption: getActiveIndexOption(),
        propCaption: propCaption,
        ItemOptionComp: ItemOptionComp,
        onClick: _hClickItem
      });
    }, [options]);
  // getActiveIndexOption, _hClickItem
  // propCaption, ItemOptionComp
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    if (isShowOption) {
      var comp = _getActiveElement();
      _decorateActiveElement(comp);
      (0, _helperFns.makeVisibleActiveRowComp)(comp);
    }
  }, [isShowOption]);
  // _decorateActiveElement, _getActiveElement
  /*eslint-enable react-hooks/exhaustive-deps */

  if (props.options !== initialOptions) {
    _initStateFromProps();
  }
  var indexActiveOption = getActiveIndexOption(),
    _style = (0, _crStyleWidth["default"])(width, style),
    _crAfterInputEl = (0, _crAfterInputEl2["default"])(props, state, _refArrowCell, toggleIsShowOption),
    placeholder = _crAfterInputEl[0],
    afterInputEl = _crAfterInputEl[1],
    _crFooterIndex = (0, _helperFns.crFooterIndex)(options, initialOptions),
    nFiltered = _crFooterIndex[0],
    nAll = _crFooterIndex[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CL.CL_ROOT,
    style: _style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ref: _refDomInputText,
      className: _CL.CL_INPUT,
      type: "text",
      name: "select"
      //autoComplete="off"
      ,
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: false,
      value: value,
      placeholder: placeholder,
      onChange: _hInputChange,
      onKeyDown: _hInputKeyDown
    }), afterInputEl, /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
      className: _CL.CL_INPUT_HR
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DivOptions["default"], {
      refOptionsElement: _refOptionsElement,
      refIndexElement: _refIndexElement,
      optionsStyle: optionsStyle,
      width: width,
      isShowOption: isShowOption,
      indexActiveOption: indexActiveOption,
      nFiltered: nFiltered,
      nAll: nAll,
      onStepUp: _stepUpOption,
      onStepDown: _stepDownOption,
      onClear: _initStateFromProps,
      children: domOptions
    })]
  });
};

/*
InputSelect.propTypes = {
   style: PropTypes.object,
   optionsStyle: PropTypes.object,
   propCaption: PropTypes.string,
   ItemOptionComp: PropTypes.element,
   width: PropTypes.string,
   options: PropTypes.arrayOf(PropTypes.shape({
      caption: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ])
   })),
   optionName: PropTypes.string,
   optionNames: PropTypes.string,
   placeholder: PropTypes.string,
   isWithInput: PropTypes.bool,
   prefixInput: PropTypes.string

   onSelect: PropTypes.func,
}
*/
var _default = InputSelect;
exports["default"] = _default;
//# sourceMappingURL=InputSelect.js.map