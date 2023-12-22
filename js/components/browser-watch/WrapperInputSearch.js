"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _TransformFn = _interopRequireDefault(require("../zhn-select/TransformFn"));
var _InputSelect = _interopRequireDefault(require("../zhn-select/InputSelect"));
var _ItemTopicOption = _interopRequireDefault(require("../zhn-select/ItemTopicOption"));
var _jsxRuntime = require("react/jsx-runtime");
const SEARCH_PLACEHOLDER = 'Find Item',
  FN_NOOP = () => {},
  _isNotShouldUpdate = (_, nextProps) => !nextProps.isShouldUpdate;
const WrapperInputSearch = (0, _uiApi.memo)(_ref => {
  let {
    style,
    data,
    onSelect = FN_NOOP
  } = _ref;
  const _hSelectItem = (0, _uiApi.useCallback)(item => {
      if (item) {
        onSelect(item);
      }
    }, [onSelect]),
    _options = _TransformFn.default.fromLevel3(data);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect.default, {
      width: "330",
      placeholder: SEARCH_PLACEHOLDER,
      propCaption: "caption",
      options: _options,
      ItemOptionComp: _ItemTopicOption.default,
      onSelect: _hSelectItem
    })
  });
}, _isNotShouldUpdate);
var _default = exports.default = WrapperInputSearch;
//# sourceMappingURL=WrapperInputSearch.js.map