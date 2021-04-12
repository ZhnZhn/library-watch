"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _RowInputSelect = _interopRequireDefault(require("./RowInputSelect"));

var _jsxRuntime = require("react/jsx-runtime");

//import PropTypes from 'prop-types'
var FragmentSelectGroupList = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(FragmentSelectGroupList, _Component);

  /*
  propTypes : {
    store : PropTypes.object,
    groupCaption : PropTypes.string,
    groupOptions : PropTypes.array,
    listCaption : PropTypes.string
  },
  */
  function FragmentSelectGroupList(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.groupCaption = null;
    _this.listCaption = null;
    _this.state = {
      listOptions: []
    };
    return _this;
  }

  var _proto = FragmentSelectGroupList.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.groupOptions !== this.props.groupOptions) {
        this.groupCaption = null;
        this.listCaption = null;
        this.setState({
          listOptions: []
        });
      } else {
        if (this.groupCaption) {
          var listOptions = this.props.store.getWatchListsByGroup(this.groupCaption);
          if (listOptions !== this.state.listOptions) this.listCaption = null;
          this.setState({
            listOptions: listOptions
          });
        }
      }
    }
  };

  _proto._handlerSelectGroup = function _handlerSelectGroup(item) {
    if (item && item.caption) {
      this.groupCaption = item.caption;

      if (item.lists) {
        this.setState({
          listOptions: item.lists
        });
      } else {
        this.setState({
          listOptions: []
        });
      }
    } else {
      this.groupCaption = null;
    }
  };

  _proto._handlerSelectList = function _handlerSelectList(item) {
    this.listCaption = item && item.caption || null;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        groupCaption = _this$props.groupCaption,
        groupOptions = _this$props.groupOptions,
        listCaption = _this$props.listCaption,
        listOptions = this.state.listOptions;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect["default"], {
        caption: groupCaption,
        options: groupOptions,
        onSelect: this._handlerSelectGroup
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RowInputSelect["default"], {
        caption: listCaption,
        options: listOptions,
        onSelect: this._handlerSelectList
      })]
    });
  };

  _proto.getValue = function getValue() {
    return {
      captionGroup: this.groupCaption,
      captionList: this.listCaption
    };
  };

  _proto.setValueNull = function setValueNull() {
    this.groupCaption = null;
    this.listCaption = null;
  };

  return FragmentSelectGroupList;
}(_react.Component);

var _default = FragmentSelectGroupList;
exports["default"] = _default;
//# sourceMappingURL=FragmentSelectGroupList.js.map