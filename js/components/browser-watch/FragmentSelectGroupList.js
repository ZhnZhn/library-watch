"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _createReactClass = _interopRequireDefault(require("create-react-class"));

var _RowInputSelect = _interopRequireDefault(require("./RowInputSelect"));

//import PropTypes from 'prop-types'
var FragmentSelectGroupList = (0, _createReactClass["default"])({
  displayName: 'FragmentSelectGroupList',

  /*
  propTypes : {
    store : PropTypes.object,
    groupCaption : PropTypes.string,
    groupOptions : PropTypes.array,
    listCaption : PropTypes.string
  },
  */
  getInitialState: function getInitialState() {
    this.groupCaption = null;
    this.listCaption = null;
    return {
      listOptions: []
    };
  },
  UNSAFE_componentWillReceiveProps: function UNSAFE_componentWillReceiveProps(nextProps) {
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
  },
  _handlerSelectGroup: function _handlerSelectGroup(item) {
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
  },
  _handlerSelectList: function _handlerSelectList(item) {
    this.listCaption = item && item.caption ? item.caption : null;
  },
  render: function render() {
    var _this$props = this.props,
        groupCaption = _this$props.groupCaption,
        groupOptions = _this$props.groupOptions,
        listCaption = _this$props.listCaption,
        listOptions = this.state.listOptions;
    return _react["default"].createElement("div", null, _react["default"].createElement(_RowInputSelect["default"], {
      caption: groupCaption,
      options: groupOptions,
      onSelect: this._handlerSelectGroup
    }), _react["default"].createElement(_RowInputSelect["default"], {
      caption: listCaption,
      options: listOptions,
      onSelect: this._handlerSelectList
    }));
  },
  getValue: function getValue() {
    return {
      captionGroup: this.groupCaption,
      captionList: this.listCaption
    };
  },
  setValueNull: function setValueNull() {
    this.groupCaption = null;
    this.listCaption = null;
  }
});
var _default = FragmentSelectGroupList;
exports["default"] = _default;
//# sourceMappingURL=FragmentSelectGroupList.js.map