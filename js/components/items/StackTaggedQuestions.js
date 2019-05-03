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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _A = require('../zhn-atoms/A');

var _A2 = _interopRequireDefault(_A);

var _ItemCaption = require('./ItemCaption');

var _ItemCaption2 = _interopRequireDefault(_ItemCaption);

var _Item = require('./Item.Style');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
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

  PURPLE_BADGE: {
    color: '#a487d4',
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
  ITEM_COUNT: {
    color: '#a9a9a9',
    paddingLeft: 12
  }
};

var StackTaggedQuestions = function (_Component) {
  (0, _inherits3.default)(StackTaggedQuestions, _Component);

  function StackTaggedQuestions() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, StackTaggedQuestions);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = StackTaggedQuestions.__proto__ || Object.getPrototypeOf(StackTaggedQuestions)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isShow: true
    }, _this._hToggleOpen = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    }, _this._renderCommits = function (items) {
      return items.map(function (item, index) {
        var answer_count = item.answer_count,
            score = item.score,
            view_count = item.view_count,
            title = item.title,
            dateAgo = item.dateAgo,
            link = item.link,
            owner = item.owner,
            tags = item.tags,
            reputation = owner.reputation,
            display_name = owner.display_name,
            className = index % 2 ? 'row-even not-selected' : 'row-odd not-selected';


        return _react2.default.createElement(
          'div',
          { key: index, className: className },
          _react2.default.createElement(
            'a',
            { href: link },
            _react2.default.createElement(
              'div',
              { style: _Item2.default.PB_8 },
              _react2.default.createElement(
                'span',
                { style: S.PURPLE_BADGE },
                '\u2692\xA0',
                answer_count
              ),
              _react2.default.createElement(
                'span',
                { style: S.GREEN_BADGE, role: 'img', 'aria-label': 'stars score' },
                '\u26BE\xA0',
                score
              ),
              _react2.default.createElement(
                'span',
                { style: S.BLACK_BAGDE },
                '\u2638\xA0',
                view_count
              ),
              _react2.default.createElement(
                'span',
                { style: S.GREEN_BADGE },
                '\u2618\xA0',
                reputation
              ),
              _react2.default.createElement(
                'span',
                { style: S.BLACK_BAGDE },
                display_name
              ),
              _react2.default.createElement(_A2.default.DateAgo, {
                dateAgo: dateAgo,
                date: ""
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
              _this._renderTags(tags)
            )
          )
        );
      });
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

  (0, _createClass3.default)(StackTaggedQuestions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          repo = _props.repo,
          caption = _props.caption,
          _props$items = _props.items,
          items = _props$items === undefined ? [] : _props$items,
          onCloseItem = _props.onCloseItem,
          _items_count = items.length,
          isShow = this.state.isShow;


      return _react2.default.createElement(
        'div',
        { style: _Item2.default.ROOT },
        _react2.default.createElement(
          _ItemCaption2.default,
          { onClose: onCloseItem },
          _react2.default.createElement(
            'button',
            {
              className: 'not-selected',
              title: caption,
              style: _Item2.default.CAPTION_OPEN,
              onClick: this._hToggleOpen
            },
            _react2.default.createElement(
              'span',
              null,
              repo
            ),
            _react2.default.createElement(
              'span',
              { style: S.ITEM_COUNT },
              _items_count
            )
          )
        ),
        _react2.default.createElement(
          _A2.default.ShowHide,
          { isShow: isShow },
          this._renderCommits(items)
        )
      );
    }
  }]);
  return StackTaggedQuestions;
}(_react.Component);

exports.default = StackTaggedQuestions;
//# sourceMappingURL=StackTaggedQuestions.js.map