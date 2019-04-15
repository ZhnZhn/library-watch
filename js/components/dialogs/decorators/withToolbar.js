'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _withToggle = require('./withToggle');

var _withToggle2 = _interopRequireDefault(_withToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _addBtTo = function _addBtTo(arr, caption, title, onClick, compInst) {
  arr.push({
    caption: caption, title: title,
    onClick: compInst ? onClick.bind(compInst) : onClick
  });
};

var _createType2WithToolbar = function _createType2WithToolbar(props) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
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

var withToolbar = function withToolbar(target) {
  (0, _withToggle2.default)(target);
  Object.assign(target.prototype, {
    _createType2WithToolbar: _createType2WithToolbar
  });
};

exports.default = withToolbar;
//# sourceMappingURL=withToolbar.js.map