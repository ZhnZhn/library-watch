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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _A = require('../../zhn-atoms/A');

var _A2 = _interopRequireDefault(_A);

var _ItemCaption = require('../ItemCaption');

var _ItemCaption2 = _interopRequireDefault(_ItemCaption);

var _ModalSlider = require('../../zhn-modal-slider/ModalSlider');

var _ModalSlider2 = _interopRequireDefault(_ModalSlider);

var _crModelMore = require('./crModelMore');

var _crModelMore2 = _interopRequireDefault(_crModelMore);

var _sortItemsBy = require('./sortItemsBy');

var _sortItemsBy2 = _interopRequireDefault(_sortItemsBy);

var _Item = require('../Item.Style');

var _Item2 = _interopRequireDefault(_Item);

var _CL = require('../../styles/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  BT_MORE: {
    marginRight: 12
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
  },
  NOT_FLOAT: {
    float: 'none'
  }
};

var StackTaggedQuestions = function (_Component) {
  (0, _inherits3.default)(StackTaggedQuestions, _Component);

  function StackTaggedQuestions(props) {
    (0, _classCallCheck3.default)(this, StackTaggedQuestions);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StackTaggedQuestions.__proto__ || Object.getPrototypeOf(StackTaggedQuestions)).call(this, props));

    _this.state = {
      isShow: true,
      isMore: false,
      pnForSort: ''
    };

    _this._setPnForSort = function (propName) {
      _this.setState({ pnForSort: propName });
    };

    _this._hToggleOpen = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    _this._showMore = function () {
      _this.setState({ isMore: true });
    };

    _this._hToggleMore = function () {
      _this.setState(function (prevState) {
        return {
          isMore: !prevState.isMore
        };
      });
    };

    _this._renderCommits = function (items) {
      var pnForSort = _this.state.pnForSort,
          _items = (0, _sortItemsBy2.default)(items, pnForSort);

      return _items.map(function (item, index) {
        var question_id = item.question_id,
            is_answered = item.is_answered,
            answer_count = item.answer_count,
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
          { key: question_id, className: className },
          _react2.default.createElement(
            'a',
            { href: link },
            _react2.default.createElement(
              'div',
              { style: _Item2.default.PB_8 },
              _react2.default.createElement(
                'span',
                { style: is_answered ? S.GREEN_BADGE : S.PURPLE_BADGE },
                '\u2692\xA0',
                answer_count
              ),
              _react2.default.createElement(
                'span',
                { style: S.PURPLE_BADGE, role: 'img', 'aria-label': 'stars score' },
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

    _this._MODEL_MORE = (0, _crModelMore2.default)({
      setSortByProp: _this._setPnForSort.bind(_this)
    });
    return _this;
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
          _state = this.state,
          isShow = _state.isShow,
          isMore = _state.isMore;


      return _react2.default.createElement(
        'div',
        { style: _Item2.default.ROOT },
        _react2.default.createElement(
          _ItemCaption2.default,
          { onClose: onCloseItem },
          _react2.default.createElement(_ModalSlider2.default, {
            isShow: isMore,
            className: _CL2.default.MENU_MORE,
            model: this._MODEL_MORE,
            onClose: this._hToggleMore
          }),
          _react2.default.createElement(_A2.default.SvgMore, {
            style: S.BT_MORE,
            onClick: this._showMore
          }),
          _react2.default.createElement(
            'button',
            {
              className: _CL2.default.NOT_SELECTED,
              title: caption,
              style: (0, _extends3.default)({}, _Item2.default.CAPTION_OPEN, S.NOT_FLOAT),
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
//# sourceMappingURL=TaggedQuestions.js.map