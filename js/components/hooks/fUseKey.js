"use strict";

exports.__esModule = true;
exports.useKeyEscape = exports.useKeyEnter = exports.useKeyDelete = void 0;
var _uiApi = require("../uiApi");
var _has = require("../has");
/*eslint-disable react-hooks/exhaustive-deps */
const fUseKey = isKey => function (fn, _temp) {
  let {
    deps,
    isPropagation
  } = _temp === void 0 ? {} : _temp;
  return (0, _uiApi.useCallback)(evt => {
    if (isKey(evt)) {
      evt.preventDefault();
      if (!isPropagation) {
        evt.stopPropagation();
      }
      fn(event);
    }
  }, deps || []);
};
/*eslint-enable react-hooks/exhaustive-deps */

const _isKeyEnter = evt => evt.keyCode === 13 || evt.key === 'Enter';
const useKeyEnter = exports.useKeyEnter = fUseKey(_isKeyEnter);
const _isKeyEscape = evt => evt.keyCode === 27 || evt.key === 'Escape';
const useKeyEscape = exports.useKeyEscape = _has.HAS_KEYBOARD_FOCUS ? fUseKey(_isKeyEscape) : void 0;
const _isKeyDelete = evt => evt.keyCode === 46 || evt.key === 'Delete';
const useKeyDelete = exports.useKeyDelete = fUseKey(_isKeyDelete);
//# sourceMappingURL=fUseKey.js.map