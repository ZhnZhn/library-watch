'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _has = require('../../has');

var _has2 = _interopRequireDefault(_has);

var _withDnDStyle = require('../decorators/withDnDStyle');

var _withDnDStyle2 = _interopRequireDefault(_withDnDStyle);

var _A = require('../../zhn-atoms/A');

var _A2 = _interopRequireDefault(_A);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = 'row-item not-selected';

var S = {
  NONE: {
    display: 'none'
  },
  ITEM_CAPTION: {
    paddingBottom: 8,
    display: 'flex',
    flexWrap: 'wrap'
  },
  /*
  PURPLE_BADGE : {
    color: '#a487d4',
    fontSize: 18,
    paddingRight: 8
  },
  */
  FISH_BADGE: {
    display: 'inline-block',
    color: '#d7bb52',
    fontSize: 18,
    paddingRight: 8
  },
  GREEN_BADGE: {
    display: 'inline-block',
    color: '#80c040',
    fontSize: 18,
    paddingRight: 8
  },
  BLACK_BAGDE: {
    display: 'inline-block',
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
  },
  DATE_AGO: {
    display: 'inline-block',
    fontSize: '18px'
  },
  TITLE: {
    paddingBottom: 8,
    fontSize: '18px'
  }
};

var HAS_TOUCH = _has2.default.HAS_TOUCH;


var DELTA = HAS_TOUCH ? {
  MARK_REMOVE: 50,
  REMOVE_ITEM: 90,
  REMOVE_UNDER: 150
} : {
  MARK_REMOVE: 25,
  REMOVE_ITEM: 35,
  REMOVE_UNDER: 150
};

var TOKEN_ANSWER = HAS_TOUCH ? 'A' : _react2.default.createElement(
  'span',
  { role: 'img', 'arial-label': 'hammer and pick' },
  '\u2692'
);
var TOKEN_SCORE = HAS_TOUCH ? 'S' : _react2.default.createElement(
  'span',
  { role: 'img', 'aria-label': 'fish' },
  '\uD83D\uDC1F'
);
var TOKEN_VIEW = HAS_TOUCH ? 'V' : _react2.default.createElement(
  'span',
  { role: 'img', 'aria-label': 'wheel of dharma' },
  '\u2638'
);
var TOKEN_REPUTATION = HAS_TOUCH ? 'R' : _react2.default.createElement(
  'span',
  { role: 'img', 'arial-label': 'shamrock' },
  '\u2618'
);

var _getTouchesClientX = function _getTouchesClientX(ev) {
  return (((ev || {}).touches || [])[0] || {}).clientX || 0;
};
var _getChangedTouches = function _getChangedTouches(ev) {
  return (((ev || {}).changedTouches || [])[0] || {}).clientX || 0;
};

var TaggedItem = (0, _withDnDStyle2.default)(_class = (_temp = _class2 = function (_Component) {
  (0, _inherits3.default)(TaggedItem, _Component);

  function TaggedItem(props) {
    (0, _classCallCheck3.default)(this, TaggedItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TaggedItem.__proto__ || Object.getPrototypeOf(TaggedItem)).call(this, props));

    _this._dragStart = function (ev) {
      ev.persist();
      _this._clientX = ev.clientX;
      _this.dragStartWithDnDStyle(ev);
      if (ev && ev.dataTransfer) {
        ev.dataTransfer.effectAllowed = "move";
        ev.dataTransfer.dropEffect = "move";
      }
    };

    _this._onTouchStart = function (ev) {
      ev.persist();
      var _clientX = _getTouchesClientX(ev);
      if (_clientX) {
        _this._clientX = _clientX;
      }
    };

    _this._onTouchMove = function (ev) {
      ev.persist();
      var _clientX = _getTouchesClientX(ev);
      if (_clientX && Math.abs(_this._clientX - _clientX) > DELTA.MARK_REMOVE) {
        _this.dragStartWithDnDStyle(ev);
      }
    };

    _this._dragEnd = function (ev) {
      ev.preventDefault();
      ev.persist();
      _this.dragEndWithDnDStyle();
      var _deltaX = Math.abs(_this._clientX - ev.clientX),
          _this$props = _this.props,
          item = _this$props.item,
          onRemoveUnder = _this$props.onRemoveUnder;

      if (_deltaX > DELTA.REMOVE_UNDER) {
        onRemoveUnder(item);
      } else if (_deltaX > DELTA.REMOVE_ITEM) {
        _this._onHide();
      }
    };

    _this._onTouchEnd = function (ev) {
      //ev.preventDefault()
      ev.persist();
      _this.dragEndWithDnDStyle();
      var _clientX = _getChangedTouches(ev);
      if (_clientX) {
        var _deltaX = Math.abs(_this._clientX - _clientX),
            _this$props2 = _this.props,
            item = _this$props2.item,
            onRemoveUnder = _this$props2.onRemoveUnder;

        if (_deltaX > DELTA.REMOVE_UNDER) {
          onRemoveUnder(item);
        } else if (_deltaX > DELTA.REMOVE_ITEM) {
          _this._onHide();
        }
      }
    };

    _this._preventDefault = function (ev) {
      ev.preventDefault();
    };

    _this._onHide = function () {
      var _this$props3 = _this.props,
          onRemoveItem = _this$props3.onRemoveItem,
          item = _this$props3.item;

      onRemoveItem(item);
      _this.setState({ isClosed: true });
    };

    _this._renderTags = function (tags) {
      return tags.map(function (tag, index) {
        return _react2.default.createElement(
          'span',
          { key: index, style: S.SPAN_TAG },
          tag
        );
      });
    };

    _this._itemHandlers = HAS_TOUCH ? {
      onTouchStart: _this._onTouchStart.bind(_this),
      onTouchMove: _this._onTouchMove.bind(_this),
      onTouchEnd: _this._onTouchEnd.bind(_this)
    } : {
      draggable: true,
      onDragStart: _this._dragStart.bind(_this),
      onDragEnd: _this._dragEnd.bind(_this),
      onDrop: _this._preventDefault,
      onDragOver: _this._preventDefault,
      onDragEnter: _this._preventDefault,
      onDragLeave: _this._preventDefault
    };

    _this.state = {
      isClosed: false
    };
    return _this;
  }

  (0, _createClass3.default)(TaggedItem, [{
    key: 'render',
    value: function render() {
      var item = this.props.item,
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
        (0, _extends3.default)({
          key: question_id,
          className: CL,
          style: _style
        }, this._itemHandlers),
        _react2.default.createElement(
          'a',
          { href: link },
          _react2.default.createElement(
            'div',
            { style: S.ITEM_CAPTION },
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
              style: S.DATE_AGO,
              dateAgo: dateAgo,
              date: ''
            })
          ),
          _react2.default.createElement(
            'div',
            { style: S.TITLE },
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
}, _temp)) || _class;

exports.default = TaggedItem;
//# sourceMappingURL=TaggedItem.js.map