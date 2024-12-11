"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../../uiApi");
const useButtonLoad = (packageName, loadJson) => {
  const [{
      json,
      isLoading,
      isShow
    }, setJson] = (0, _uiApi.useState)({
      json: void 0,
      isLoading: false,
      isShow: false
    })
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hClick = (0, _uiApi.useCallback)(() => {
      setJson(prevState => {
        if (prevState.json) {
          return {
            ...prevState,
            isShow: !prevState.isShow
          };
        } else {
          loadJson({
            packageName,
            onLoad: json => {
              setJson({
                json,
                isShow: true,
                isLoading: false
              });
            }
          });
          return {
            ...prevState,
            isLoading: true
          };
        }
      });
    }, []);
  // packageName, loadJson
  /*eslint-enable react-hooks/exhaustive-deps */

  return [json, isLoading, isShow, _hClick];
};
var _default = exports.default = useButtonLoad;
//# sourceMappingURL=useButtonLoad.js.map