'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../zhnAtoms/SvgClose');

var _SvgClose2 = _interopRequireDefault(_SvgClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  ITEM_DIV: {
    position: 'relative',
    paddingRight: '40px',
    lineHeight: 1.4,
    paddingTop: '5px',
    paddingBottom: '5px'
  },
  ITEM_SPAN: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '100%',
    maxWidth: '250px',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  },

  SVG_CLOSE: {
    position: 'absolute',
    right: 0
  },

  DATE_SPAN: {
    float: 'right'
  }
};

var VersionDateRow = function VersionDateRow(props) {
  var version = props.version;
  var _props$date = props.date;
  var date = _props$date === undefined ? '' : _props$date;

  if (!version) {
    return undefined;
  }
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'span',
      null,
      version
    ),
    _react2.default.createElement(
      'span',
      { style: STYLE.DATE_SPAN },
      date.split(' ')[0]
    )
  );
};

var WatchItem = function WatchItem(props) {
  var item = props.item;
  var className = props.className;
  var isModeEdit = props.isModeEdit;
  var option = props.option;
  var onClick = props.onClick;
  var onClose = props.onClose;
  var onDragStart = props.onDragStart;
  var onDragEnter = props.onDragEnter;
  var onDragOver = props.onDragOver;
  var onDrop = props.onDrop;
  var repo = item.repo;
  var version = item.version;
  var date = item.date;
  var _compBtClose = isModeEdit ? _react2.default.createElement(_SvgClose2.default, {
    style: STYLE.SVG_CLOSE,
    onClose: onClose.bind(null, option)
  }) : undefined;
  var _compVersionDateRow = version ? _react2.default.createElement(VersionDateRow, {
    version: version,
    date: date
  }) : undefined;

  return _react2.default.createElement(
    'div',
    {
      className: className,
      style: STYLE.ITEM_DIV,
      onClick: onClick.bind(null, item),
      draggable: isModeEdit,
      onDragStart: isModeEdit && onDragStart.bind(null, option),
      onDrop: isModeEdit && onDrop.bind(null, option),
      onDragEnter: isModeEdit && onDragEnter,
      onDragOver: isModeEdit && onDragOver
    },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        { style: STYLE.ITEM_SPAN },
        repo
      ),
      _compBtClose
    ),
    _compVersionDateRow
  );
};

exports.default = WatchItem;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\browser-watch\WatchItem.js.map