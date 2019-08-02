'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _is = require('../../../utils/is');

var _is2 = _interopRequireDefault(_is);

var _withDnDStyle = require('../decorators/withDnDStyle');

var _withDnDStyle2 = _interopRequireDefault(_withDnDStyle);

var _A = require('../../zhn-atoms/A');

var _A2 = _interopRequireDefault(_A);

var _Item = require('../Item.Style');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  NONE: {
    display: 'none'
  },
  /*
  PURPLE_BADGE : {
    color: '#a487d4',
    fontSize: 18,
    paddingRight: 8
  },
  */
  FISH_BADGE: {
    color: '#d7bb52',
    fontSize: 18,
    paddingRight: 8
  },
  GREEN_BADGE: {
    color: '#80c040',
    fontSize: 18,
    paddingRight: 8
  },
  BLACK_BAGDE: {
    color: 'black',
    fontSize: 18,
    paddingRight: 8
  },
  SPAN_TAG: {
    display: 'inline-block',
    color: 'black',
    backgroundColor: 'gray',
    paddingTop: 4,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 4,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 6,
    marginBottom: 2,
    borderRadius: 16
  }
};

var D_REMOVE_UNDER = 150;
var D_REMOVE_ITEM = 35;

var isTouchable = _is2.default.isTouchable;

var IS_TOUCH = isTouchable();

var TOKEN_ANSWER = IS_TOUCH ? 'A' : _react2.default.createElement(
  'span',
  { role: 'img', 'arial-label': 'hammer and pick' },
  '\u2692'
);
var TOKEN_SCORE = IS_TOUCH ? 'S' : _react2.default.createElement(
  'span',
  { role: 'img', 'aria-label': 'fish' },
  '\uD83D\uDC1F'
);
var TOKEN_VIEW = IS_TOUCH ? 'V' : _react2.default.createElement(
  'span',
  { role: 'img', 'aria-label': 'wheel of dharma' },
  '\u2638'
);
var TOKEN_REPUTATION = IS_TOUCH ? 'R' : _react2.default.createElement(
  'span',
  { role: 'img', 'arial-label': 'shamrock' },
  '\u2618'
);

/*
const _getClientX = (ev, dfValue) => ev.clientX
  || ev.touches[0].clientX
  || dfValue;
*/

var TaggedItem = (0, _withDnDStyle2.default)(_class = (_temp2 = _class2 = function (_Component) {
  (0, _inherits3.default)(TaggedItem, _Component);

  function TaggedItem() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TaggedItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TaggedItem.__proto__ || Object.getPrototypeOf(TaggedItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isClosed: false
    }, _this._dragStart = function (ev) {
      ev.persist();
      _this._clientX = ev.clientX;
      _this.dragStartWithDnDStyle(ev);
      if (ev && ev.dataTransfer) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.dropEffect = "move";
      }
    }, _this._onTouchStart = function (ev) {
      ev.persist();
      _this._clientX = ev.touches[0].clientX;
    }, _this._onTouchMove = function (ev) {
      _this.dragStartWithDnDStyle(ev);
    }, _this._dragEnd = function (ev) {
      ev.preventDefault();
      ev.persist();
      _this.dragEndWithDnDStyle();
      var _deltaX = Math.abs(_this._clientX - ev.clientX),
          _this$props = _this.props,
          item = _this$props.item,
          onRemoveUnder = _this$props.onRemoveUnder;

      if (_deltaX > D_REMOVE_UNDER) {
        onRemoveUnder(item);
      } else if (_deltaX > D_REMOVE_ITEM) {
        _this._onHide();
      }
    }, _this._onTouchEnd = function (ev) {
      ev.preventDefault();
      ev.persist();
      _this.dragEndWithDnDStyle();
      var _deltaX = Math.abs(_this._clientX - ev.touches[0].clientX),
          _this$props2 = _this.props,
          item = _this$props2.item,
          onRemoveUnder = _this$props2.onRemoveUnder;

      if (_deltaX > D_REMOVE_UNDER) {
        onRemoveUnder(item);
      } else if (_deltaX > D_REMOVE_ITEM) {
        _this._onHide();
      }
    }, _this._preventDefault = function (ev) {
      ev.preventDefault();
    }, _this._onHide = function () {
      var _this$props3 = _this.props,
          onRemoveItem = _this$props3.onRemoveItem,
          item = _this$props3.item;

      onRemoveItem(item);
      _this.setState({ isClosed: true });
    }, _this._renderTags = function (tags) {
      return tags.map(function (tag, index) {
        return _react2.default.createElement(
          'span',
          { key: index, style: S.SPAN_TAG },
          tag
        );
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TaggedItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          item = _props.item,
          question_id = item.question_id,
          is_answered = item.is_answered,
          answer_count = item.answer_count,
          score = item.score,
          view_count = item.view_count,
          title = item.title,
          dateAgo = item.dateAgo,
          link = item.link,
          _item$owner = item.owner,
          owner = _item$owner === undefined ? {} : _item$owner,
          _item$tags = item.tags,
          tags = _item$tags === undefined ? [] : _item$tags,
          reputation = owner.reputation,
          display_name = owner.display_name,
          isClosed = this.state.isClosed,
          _style = isClosed ? S.NONE : void 0;

      return _react2.default.createElement(
        'div',
        {
          key: question_id,
          className: className,
          style: _style,
          draggable: true,
          onDragStart: this._dragStart,
          onTouchStart: this._onTouchStart,
          onTouchMove: this._onTouchMove,
          onDragEnd: this._dragEnd,
          onTouchEnd: this._onTouchEnd,
          onDrop: this._preventDefault,
          onDragOver: this._preventDefault,
          onDragEnter: this._preventDefault,
          onDragLeave: this._preventDefault
        },
        _react2.default.createElement(
          'a',
          { href: link },
          _react2.default.createElement(
            'div',
            { style: _Item2.default.PB_8 },
            _react2.default.createElement(
              'span',
              { style: is_answered ? S.GREEN_BADGE : S.FISH_BADGE },
              TOKEN_ANSWER,
              '\xA0',
              answer_count
            ),
            _react2.default.createElement(
              'span',
              { style: S.FISH_BADGE },
              TOKEN_SCORE,
              '\xA0',
              score
            ),
            _react2.default.createElement(
              'span',
              { style: S.BLACK_BAGDE },
              TOKEN_VIEW,
              '\xA0',
              view_count
            ),
            _react2.default.createElement(
              'span',
              { style: S.GREEN_BADGE },
              TOKEN_REPUTATION,
              '\xA0',
              reputation
            ),
            _react2.default.createElement(
              'span',
              { style: S.BLACK_BAGDE },
              display_name
            ),
            _react2.default.createElement(_A2.default.DateAgo, {
              dateAgo: dateAgo,
              date: ''
            })
          ),
          _react2.default.createElement(
            'div',
            null,
            title
          ),
          _react2.default.createElement(
            'div',
            null,
            this._renderTags(tags)
          )
        )
      );
    }
  }]);
  return TaggedItem;
}(_react.Component), _class2.defaultProps = {
  onRemoveUnder: function onRemoveUnder() {},
  onRemoveItem: function onRemoveItem() {}
}, _temp2)) || _class;

exports.default = TaggedItem;
//# sourceMappingURL=TaggedItem.js.map