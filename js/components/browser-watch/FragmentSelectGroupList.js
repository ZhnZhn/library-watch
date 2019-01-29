'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _RowInputSelect = require('./RowInputSelect');

var _RowInputSelect2 = _interopRequireDefault(_RowInputSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FragmentSelectGroupList = (0, _createReactClass2.default)({
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
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (nextProps.groupOptions !== this.props.groupOptions) {
        this.groupCaption = null;
        this.listCaption = null;
        this.setState({ listOptions: [] });
      } else {
        if (this.groupCaption) {
          var listOptions = this.props.store.getWatchListsByGroup(this.groupCaption);
          if (listOptions !== this.state.listOptions) this.listCaption = null;
          this.setState({ listOptions: listOptions });
        }
      }
    }
  },
  _handlerSelectGroup: function _handlerSelectGroup(item) {
    if (item && item.caption) {
      this.groupCaption = item.caption;
      if (item.lists) {
        this.setState({ listOptions: item.lists });
      } else {
        this.setState({ listOptions: [] });
      }
    } else {
      this.groupCaption = null;
    }
  },
  _handlerSelectList: function _handlerSelectList(item) {
    this.listCaption = item && item.caption ? item.caption : null;
  },
  render: function render() {
    var _props = this.props,
        groupCaption = _props.groupCaption,
        groupOptions = _props.groupOptions,
        listCaption = _props.listCaption,
        listOptions = this.state.listOptions;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_RowInputSelect2.default, {
        caption: groupCaption,
        options: groupOptions,
        onSelect: this._handlerSelectGroup
      }),
      _react2.default.createElement(_RowInputSelect2.default, {
        caption: listCaption,
        options: listOptions,
        onSelect: this._handlerSelectList
      })
    );
  },
  getValue: function getValue() {
    return { captionGroup: this.groupCaption, captionList: this.listCaption };
  },
  setValueNull: function setValueNull() {
    this.groupCaption = null;
    this.listCaption = null;
  }
});

//import PropTypes from 'prop-types'

exports.default = FragmentSelectGroupList;
//# sourceMappingURL=FragmentSelectGroupList.js.map