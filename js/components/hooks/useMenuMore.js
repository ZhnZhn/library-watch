"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useToggle = _interopRequireDefault(require("./useToggle"));
var _useRefInit = _interopRequireDefault(require("./useRefInit"));
const useMenuMore = (crMenuModel, modelOptions) => {
  const [_isMenuMore, _toggleMenuMore, _setIsMenuMore] = (0, _useToggle.default)()
    /*eslint-disable react-hooks/exhaustive-deps */,
    _showMenuMore = (0, _uiApi.useCallback)(() => {
      _setIsMenuMore(true);
    }, [])
    // _toggleIsMore
    /*eslint-enable react-hooks/exhaustive-deps */,
    _MENU_MODEL = (0, _useRefInit.default)(() => crMenuModel(modelOptions))[0];
  return [_MENU_MODEL, _isMenuMore, _toggleMenuMore, _showMenuMore];
};
var _default = exports.default = useMenuMore;
//# sourceMappingURL=useMenuMore.js.map