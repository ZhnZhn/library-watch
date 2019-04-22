'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgClose = require('../zhn-atoms/SvgClose');

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
  var version = props.version,
      _props$date = props.date,
      date = _props$date === undefined ? '' : _props$date;

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
  var item = props.item,
      className = props.className,
      isModeEdit = props.isModeEdit,
      option = props.option,
      onClick = props.onClick,
      onClose = props.onClose,
      onDragStart = props.onDragStart,
      onDragEnter = props.onDragEnter,
      onDragOver = props.onDragOver,
      onDragLeave = props.onDragLeave,
      onDrop = props.onDrop;

  var repo = item.repo,
      version = item.version,
      date = item.date,
      _compBtClose = isModeEdit ? _react2.default.createElement(_SvgClose2.default, {
    style: STYLE.SVG_CLOSE,
    onClose: onClose.bind(null, option)
  }) : undefined,
      _compVersionDateRow = version ? _react2.default.createElement(VersionDateRow, {
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
      onDragOver: isModeEdit && onDragOver,
      onDragEnter: isModeEdit && onDragEnter,
      onDragLeave: isModeEdit && onDragLeave
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
//# sourceMappingURL=WatchItem.js.map