'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TransformFn = require('../zhn-select/TransformFn');

var _TransformFn2 = _interopRequireDefault(_TransformFn);

var _InputSearch = require('../zhn-select/InputSearch');

var _InputSearch2 = _interopRequireDefault(_InputSearch);

var _ItemTopicOption = require('../zhn-select/ItemTopicOption');

var _ItemTopicOption2 = _interopRequireDefault(_ItemTopicOption);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SEARCH_PLACEHOLDER = 'Find Item';

var WrapperInputSearch = _react2.default.createClass({
  displayName: 'WrapperInputSearch',
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShouldUpdate) {
      return true;
    }
    return false;
  },
  _handlerSelectItem: function _handlerSelectItem(item) {
    if (item) {
      this.props.onSelect(item);
    }
  },
  render: function render() {
    var _props = this.props,
        style = _props.style,
        data = _props.data,
        _options = _TransformFn2.default.fromLevel3(data);

    return _react2.default.createElement(
      'div',
      { style: style },
      _react2.default.createElement(_InputSearch2.default, {
        placeholder: SEARCH_PLACEHOLDER,
        propCaption: 'caption',
        options: _options,
        ItemOptionComp: _ItemTopicOption2.default,
        onSelect: this._handlerSelectItem
      })
    );
  }
});

exports.default = WrapperInputSearch;
//# sourceMappingURL=WrapperInputSearch.js.map