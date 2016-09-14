'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ZhDialog = require('../zhnMoleculs/ZhDialog');

var _ZhDialog2 = _interopRequireDefault(_ZhDialog);

var _ToolBarButton = require('../header/ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _RowInputText = require('./RowInputText');

var _RowInputText2 = _interopRequireDefault(_RowInputText);

var _RowInputSelect = require('./RowInputSelect');

var _RowInputSelect2 = _interopRequireDefault(_RowInputSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _sortOptions = [{ caption: "Activity, Recent Day", value: "activity" }, { caption: "Creation Date", value: "creation" }, { caption: "Score", value: "votes" }, { caption: "Hot Tab", value: "hot" }, { caption: "Hot Week Tab", value: "week" }, { caption: "Hot Month Tab", value: "month" }];

var DialogType2 = _react2.default.createClass({
  displayName: 'DialogType2',

  getInitialState: function getInitialState() {
    this.stock = null;
    this.sortByItem = {};
    return {};
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps) {
      if (this.props.isShow === nextProps.isShow) {
        return false;
      }
    }
    return true;
  },
  _handlerSelectSortBy: function _handlerSelectSortBy(item) {
    this.sortByItem = item;
  },
  _handlerLoad: function _handlerLoad(event) {
    var repo = this.inputRepo.getValue();
    var requestType = this.props.requestType;
    var value = this.sortByItem.value;


    this.props.onLoad({
      repo: repo, requestType: requestType,
      sort: value
    });
  },
  _handlerClose: function _handlerClose() {
    this.props.onClose();
  },
  render: function render() {
    var _this = this;

    var _props = this.props;
    var caption = _props.caption;
    var isShow = _props.isShow;
    var onShow = _props.onShow;
    var oneTitle = _props.oneTitle;
    var onePlaceholder = _props.onePlaceholder;
    var _commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
      key: 'a',
      type: 'TypeC',
      caption: 'Load',
      onClick: this._handlerLoad
    })];

    return _react2.default.createElement(
      _ZhDialog2.default,
      {
        caption: caption,
        isShow: isShow,
        commandButtons: _commandButtons,
        onShowChart: onShow,
        onClose: this._handlerClose
      },
      _react2.default.createElement(_RowInputText2.default, {
        ref: function ref(c) {
          return _this.inputRepo = c;
        },
        caption: oneTitle,
        placeholder: onePlaceholder
      }),
      _react2.default.createElement(_RowInputSelect2.default, {
        caption: 'Sort By:',
        placeholder: 'Default: Hot Week Tab',
        options: _sortOptions,
        onSelect: this._handlerSelectSortBy
      })
    );
  }
});

exports.default = DialogType2;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\DialogType2.js.map