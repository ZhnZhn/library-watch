"use strict";

exports.__esModule = true;
exports.default = void 0;
var _watchListStore = require("../../flux/watch-list/watchListStore");
const useWatchListMsEdit = (forActionType, setValidationMessages, hClear) => {
  (0, _watchListStore.useMsEdit)(msEdit => {
    if (msEdit && msEdit.forActionType === forActionType) {
      if (msEdit.messages) {
        setValidationMessages(msEdit.messages);
      } else {
        hClear();
      }
    }
  });
};
var _default = exports.default = useWatchListMsEdit;
//# sourceMappingURL=useWatchListMsEdit.js.map