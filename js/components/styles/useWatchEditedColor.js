"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _watchListStore = require("../../flux/watch-list/watchListStore");
const WATCH_EDITED_COLOR = "#607d8b";
const useWatchEditedColor = () => {
  const [isWatchEdited, setIsWatchEdited] = (0, _uiApi.useState)(_watchListStore.getIsWatchEdited);
  (0, _watchListStore.useIsWatchEdited)(isWatchEdited => {
    setIsWatchEdited(!!isWatchEdited);
  });
  return isWatchEdited ? WATCH_EDITED_COLOR : void 0;
};
var _default = exports.default = useWatchEditedColor;
//# sourceMappingURL=useWatchEditedColor.js.map