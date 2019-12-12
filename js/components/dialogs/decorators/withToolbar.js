"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _withToggle = _interopRequireDefault(require("./withToggle"));

var _addBtTo = function _addBtTo(arr, caption, title, onClick, compInst) {
  arr.push({
    caption: caption,
    title: title,
    onClick: compInst ? onClick.bind(compInst) : onClick
  });
};

var _createType2WithToolbar = function _createType2WithToolbar(props, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      noLabels = _ref.noLabels,
      hasDate = _ref.hasDate;

  var buttons = [],
      _toggle = this._toggleStateByWithToggle;

  if (!noLabels) {
    this._clickLabelWithToolbar = _toggle.bind(this, 'isShowLabels');

    _addBtTo(buttons, 'L', "Click to toggle row's labels", this._clickLabelWithToolbar);
  }

  if (hasDate) {
    this._clickDateWithToolbar = _toggle.bind(this, 'isShowDate');

    _addBtTo(buttons, 'D', 'Click to toggle date input', this._clickDateWithToolbar);
  }

  return buttons;
};

var _toggleWithToolbar = function _toggleWithToolbar() {
  this.setState(function (prevState) {
    return {
      isToolbar: !prevState.isToolbar
    };
  });
};

var withToolbar = function withToolbar(target) {
  (0, _withToggle["default"])(target);
  Object.assign(target.prototype, {
    _createType2WithToolbar: _createType2WithToolbar,
    _toggleWithToolbar: _toggleWithToolbar
  });
};

var _default = withToolbar;
exports["default"] = _default;
//# sourceMappingURL=withToolbar.js.map