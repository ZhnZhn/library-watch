"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _uiApi = require("../uiApi");
var useDialogFocus = function useDialogFocus(ref, isShow) {
  var refRoot = (0, _uiApi.useRef)(),
    refBtMore = (0, _uiApi.useRef)(),
    _refPrevFocused = (0, _uiApi.useRef)(),
    _refIsShowPrev = (0, _uiApi.useRef)(),
    focus = (0, _uiApi.useCallback)(function () {
      _refPrevFocused.current = document.activeElement;
      (0, _uiApi.focusHtmlElement)((0, _uiApi.getRefValue)(refBtMore) || (0, _uiApi.getRefValue)(refRoot));
    }, []),
    focusPrev = (0, _uiApi.useCallback)(function () {
      (0, _uiApi.focusHtmlElement)((0, _uiApi.getRefValue)(_refPrevFocused));
      _refPrevFocused.current = null;
    }, []);

  /*eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(function () {
    var _isPrevShow = (0, _uiApi.getRefValue)(_refIsShowPrev);
    if (isShow && !_isPrevShow) {
      focus();
    } else if (!isShow && _isPrevShow) {
      focusPrev();
    }
    _refIsShowPrev.current = isShow;
  }, [isShow]);
  //focus, focusPrev
  (0, _uiApi.useImperativeHandle)(ref, function () {
    return {
      focus: focus,
      focusPrev: focusPrev
    };
  }, []);
  //focus, focusPrev
  /*eslint-enable react-hooks/exhaustive-deps */

  return [refRoot, refBtMore];
};
var _default = useDialogFocus;
exports["default"] = _default;
//# sourceMappingURL=useDialogFocus.js.map