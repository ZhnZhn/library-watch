'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _Rows = require('./rows/Rows');

var _Rows2 = _interopRequireDefault(_Rows);

var _Widgets = require('./widgets/Widgets');

var _Widgets2 = _interopRequireDefault(_Widgets);

var _ShowHide = require('../zhn-atoms/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

var _DraggableDialog = require('../zhn-moleculs/DraggableDialog');

var _DraggableDialog2 = _interopRequireDefault(_DraggableDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogCell = (0, _extends3.default)({}, _Rows2.default, _Widgets2.default, {
  ShowHide: _ShowHide2.default,
  DraggableDialog: _DraggableDialog2.default
});

exports.default = DialogCell;
//# sourceMappingURL=DialogCell.js.map