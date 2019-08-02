'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp;

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

var _TaggedItemList = require('./TaggedItemList');

var _TaggedItemList2 = _interopRequireDefault(_TaggedItemList);

var _Item = require('../Item.Style');

var _Item2 = _interopRequireDefault(_Item);

var _CL = require('../../styles/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  BT_MORE: {
    marginRight: 12
  },
  ITEM_COUNT: {
    color: '#a9a9a9',
    paddingLeft: 12,
    paddingRight: 12
  },
  BT_REVERSE: {
    color: '#a487d4',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  NOT_FLOAT: {
    float: 'none'
  }
};

var StackTaggedQuestions = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(StackTaggedQuestions, _Component);

  function StackTaggedQuestions(props) {
    (0, _classCallCheck3.default)(this, StackTaggedQuestions);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StackTaggedQuestions.__proto__ || Object.getPrototypeOf(StackTaggedQuestions)).call(this, props));

    _this._sortItemsByPropName = function (propName, title) {
      _this.setState(function (prevState) {
        return {
          pnForSort: propName,
          titleForSort: title,
          items: [].concat((0, _toConsumableArray3.default)((0, _sortItemsBy2.default)(prevState.items, propName)))
        };
      });
    };

    _this._reverseItems = function () {
      _this.setState(function (prevState) {
        return {
          items: [].concat((0, _toConsumableArray3.default)(prevState.items.reverse()))
        };
      });
    };

    _this._hToggleOpen = function () {
      _this.setState(function (prevState) {
        return {
          isShow: !prevState.isShow
        };
      });
    };

    _this._hShowMore = function () {
      _this.setState({ isMore: true });
    };

    _this._hToggleMore = function () {
      _this.setState(function (prevState) {
        return {
          isMore: !prevState.isMore
        };
      });
    };

    _this._onRemoveItem = function () {
      _this.setState(function (prevState) {
        return {
          itemRemoved: prevState.itemRemoved + 1
        };
      });
    };

    _this._MODEL_MORE = (0, _crModelMore2.default)({
      setSortByProp: _this._sortItemsByPropName.bind(_this),
      reverse: _this._reverseItems.bind(_this)
    });

    _this.state = {
      isShow: true,
      isMore: false,
      pnForSort: '',
      titleForSort: '',
      items: props.items,
      itemRemoved: 0
    };
    return _this;
  }

  (0, _createClass3.default)(StackTaggedQuestions, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          repo = _props.repo,
          caption = _props.caption,
          onCloseItem = _props.onCloseItem,
          _state = this.state,
          isShow = _state.isShow,
          isMore = _state.isMore,
          items = _state.items,
          titleForSort = _state.titleForSort,
          itemRemoved = _state.itemRemoved,
          _items_count = items.length,
          _token_count = itemRemoved ? _items_count - itemRemoved + '/' + _items_count : '' + _items_count,
          _titleForSort = 'Sorted By ' + titleForSort;

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
            onClick: this._hShowMore
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
              _token_count
            )
          ),
          _react2.default.createElement(
            'button',
            {
              className: _CL2.default.NOT_SELECTED,
              style: S.BT_REVERSE,
              title: 'Reverse Items',
              onClick: this._reverseItems
            },
            _titleForSort
          )
        ),
        _react2.default.createElement(
          _A2.default.ShowHide,
          { isShow: isShow },
          _react2.default.createElement(_TaggedItemList2.default, {
            items: items,
            onRemoveItem: this._onRemoveItem
          })
        )
      );
    }
  }]);
  return StackTaggedQuestions;
}(_react.Component), _class.defaultProps = {
  items: []
}, _temp);
exports.default = StackTaggedQuestions;
//# sourceMappingURL=TaggedQuestions.js.map