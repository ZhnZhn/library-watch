"use strict";

exports.__esModule = true;
exports.removeHotKey = exports.hmHotKeys = exports.clearHotKeys = exports.addHotKey = exports.HOT_KEY_EVENT = exports.HAS_HOT_KEYS = void 0;
var _has = require("../has");
const HAS_HOT_KEYS = exports.HAS_HOT_KEYS = !_has.HAS_TOUCH_EVENTS;
const HOT_KEY_EVENT = exports.HOT_KEY_EVENT = 'keydown';
let hmHotKeys = exports.hmHotKeys = Object.create(null);
const addHotKey = (hotKey, onKeyDown) => hmHotKeys && (hmHotKeys[hotKey] = onKeyDown);
exports.addHotKey = addHotKey;
const removeHotKey = hotKey => hmHotKeys && (hmHotKeys[hotKey] = void 0);
exports.removeHotKey = removeHotKey;
const clearHotKeys = () => {
  exports.hmHotKeys = hmHotKeys = null;
};
exports.clearHotKeys = clearHotKeys;
//# sourceMappingURL=hm-hotkeys.js.map