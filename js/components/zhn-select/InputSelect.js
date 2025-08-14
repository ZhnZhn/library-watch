"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
var _uiApi = require("../uiApi");
var _a11yFn = require("../a11yFn");
var _inputFn = require("../inputFn");
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _ItemOptionDf = _interopRequireDefault(require("./ItemOptionDf"));
var _DivOptions = _interopRequireDefault(require("./DivOptions"));
var _OptionStack = _interopRequireDefault(require("./OptionStack"));
var _CL = require("./CL");
var _crStyleWidth = _interopRequireDefault(require("./crStyleWidth"));
var _crAfterInputEl = _interopRequireDefault(require("./crAfterInputEl"));
var _crFilteredOptions = _interopRequireDefault(require("./crFilteredOptions"));
var _useStepHandlers = _interopRequireDefault(require("./useStepHandlers"));
var _helperFns = require("./helperFns");
var _jsxRuntime = require("react/jsx-runtime");
const DF_OPTIONS = [];
const _crInitialStateFromProps = _ref => {
  let {
    optionName,
    optionNames,
    options = DF_OPTIONS
  } = _ref;
  return {
    value: '',
    initialOptions: options,
    options: options,
    optionNames: optionNames || optionName || ''
  };
};
const FN_NOOP = () => {};
const InputSelect = props => {
  const {
      style,
      width,
      optionsStyle,
      labelId,
      propCaption = 'caption',
      ItemOptionComp = _ItemOptionDf.default,
      isWithInput = false,
      onSelect = FN_NOOP
    } = props,
    _optionsViewId = (0, _uiApi.useId)(),
    _refDomInputText = (0, _uiApi.useRef)(),
    [state, setState] = (0, _uiApi.useState)(() => _crInitialStateFromProps(props)),
    {
      value,
      options,
      initialOptions
    } = state,
    [isShowOption, toggleIsShowOption, setIsShowOption] = (0, _useToggle.default)(false),
    [_refOptionsElement, _refIndexElement, setActiveIndexOption, getActiveIndexOption, _getActiveElement, _decorateActiveElement, _undecorateActiveElement, _stepDownOption, _stepHomeOption, _stepUpOption, _stepEndOption] = (0, _useStepHandlers.default)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    _initStateFromProps = (0, _uiApi.useCallback)(() => {
      _undecorateActiveElement();
      setState(() => _crInitialStateFromProps(props));
      setIsShowOption(false);
      setActiveIndexOption(0);
      onSelect();
    }, [props.options, onSelect])
    // _undecorateActiveElement
    // setIsShowOption, setActiveIndexOption
    /*eslint-enable react-hooks/exhaustive-deps */,
    _hInputChange = evt => {
      const token = evt.target.value,
        tokenLn = token.length,
        valueLn = value.length;
      if (tokenLn !== valueLn) {
        if (getActiveIndexOption() !== 0) {
          _undecorateActiveElement();
          setActiveIndexOption(0);
        }
        setState(prevState => ({
          ...prevState,
          value: token,
          options: (0, _crFilteredOptions.default)(token, tokenLn > valueLn ? options : initialOptions, propCaption, isWithInput)
        }));
        setIsShowOption(true);
      }
    },
    _hInputKeyDown = evt => {
      let _stepOption;
      switch (evt.keyCode) {
        // enter
        case 13:
          {
            const _indexActiveOption = getActiveIndexOption();
            if ((0, _isTypeFn.isNumber)(_indexActiveOption)) {
              const item = options[_indexActiveOption];
              if (item && item[propCaption]) {
                onSelect((0, _helperFns.crOnEnterItem)(item, propCaption, isWithInput));
                setIsShowOption(false);
                setState(prevState => ({
                  ...prevState,
                  value: item[propCaption]
                }));
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
              _stepOption = _stepDownOption;
            }
            break;
          }
        //up
        case 38:
          _stepOption = _stepUpOption;
          break;
        case 36:
          _stepOption = _stepHomeOption;
          break;
        case 35:
          _stepOption = _stepEndOption;
          break;
        default:
          return;
      }
      if (isShowOption && _stepOption) {
        evt.preventDefault();
        _stepOption();
      }
    }

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClickItem = (0, _uiApi.useCallback)((item, evt) => {
      _undecorateActiveElement();
      setActiveIndexOption((0, _helperFns.getDataIndex)(evt.currentTarget));
      setIsShowOption(false);
      setState(prevState => ({
        ...prevState,
        value: item[propCaption]
      }));
      onSelect(item);
    }, [])
    // _undecorateActiveElement, setActiveIndexOption
    // setIsShowOption
    /*eslint-enable react-hooks/exhaustive-deps */

    /*eslint-disable react-hooks/exhaustive-deps */,
    domOptions = (0, _uiApi.useMemo)(() => /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionStack.default, {
      options: options,
      indexActiveOption: getActiveIndexOption(),
      propCaption: propCaption,
      ItemOptionComp: ItemOptionComp,
      onClick: _hClickItem
    }), [options]);
  // getActiveIndexOption, _hClickItem
  // propCaption, ItemOptionComp
  /*eslint-enable react-hooks/exhaustive-deps */

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    if (isShowOption) {
      const comp = _getActiveElement();
      _decorateActiveElement(comp);
      (0, _helperFns.makeVisibleActiveRowComp)(comp);
    }
  }, [isShowOption]);
  // _decorateActiveElement, _getActiveElement
  /*eslint-enable react-hooks/exhaustive-deps */

  if (props.options !== initialOptions) {
    _initStateFromProps();
  }
  const indexActiveOption = getActiveIndexOption(),
    _style = (0, _crStyleWidth.default)(width, style),
    [placeholder, afterInputEl] = (0, _crAfterInputEl.default)(props, state, isShowOption, toggleIsShowOption),
    [nFiltered, nAll] = (0, _helperFns.crFooterIndex)(options, initialOptions);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: _CL.CL_ROOT,
    style: _style,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      ...(0, _a11yFn.crA11yExpandedProps)(isShowOption, _optionsViewId),
      ...(0, _a11yFn.crA11yComboboxProps)(labelId),
      ...(0, _inputFn.crInputTextProps)(),
      ref: _refDomInputText,
      className: _CL.CL_INPUT,
      value: value,
      placeholder: placeholder,
      onChange: _hInputChange,
      onKeyDown: _hInputKeyDown
    }), afterInputEl, /*#__PURE__*/(0, _jsxRuntime.jsx)("hr", {
      className: _CL.CL_INPUT_HR
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DivOptions.default, {
      id: _optionsViewId,
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
var _default = exports.default = InputSelect;
//# sourceMappingURL=InputSelect.js.map