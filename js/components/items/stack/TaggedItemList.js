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

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TaggedItem = require('./TaggedItem');

var _TaggedItem2 = _interopRequireDefault(_TaggedItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  ROW_EVEN: 'row-even not-selected',
  ROW_ODD: 'row-odd not-selected'
};

var TaggedItemList = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(TaggedItemList, _Component);

  function TaggedItemList() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TaggedItemList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TaggedItemList.__proto__ || Object.getPrototypeOf(TaggedItemList)).call.apply(_ref, [this].concat(args))), _this), _this._renderItems = function () {
      var _this$props = _this.props,
          items = _this$props.items,
          onRemoveItem = _this$props.onRemoveItem;

      return items.map(function (item, index) {
        var question_id = item.question_id,
            className = index % 2 ? CL.ROW_EVEN : CL.ROW_ODD;

        return _react2.default.createElement(_TaggedItem2.default, {
          key: question_id,
          className: className,
          item: item,
          onRemoveItem: onRemoveItem
        });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TaggedItemList, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.items === this.props.items) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react.Fragment,
        null,
        this._renderItems()
      );
    }
  }]);
  return TaggedItemList;
}(_react.Component), _class.defaultProps = {
  items: []
}, _temp2);
exports.default = TaggedItemList;
//# sourceMappingURL=TaggedItemList.js.map