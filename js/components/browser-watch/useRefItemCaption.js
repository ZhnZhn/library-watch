"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useRefItemCaption = () => {
  const _ref = (0, _uiApi.useRef)(null),
    _setItemCaption = (0, _uiApi.useCallback)(item => {
      _ref.current = item && item.caption || null;
    }, []);
  return [_ref, _setItemCaption];
};
var _default = exports.default = useRefItemCaption;
//# sourceMappingURL=useRefItemCaption.js.map