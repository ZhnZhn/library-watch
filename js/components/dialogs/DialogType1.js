'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Dialog = require('../zhnMoleculs/Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ToolBarButton = require('../header/ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _RowInputText = require('./RowInputText');

var _RowInputText2 = _interopRequireDefault(_RowInputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogType1 = _react2.default.createClass({

  displayName: 'DialogType1',

  getInitialState: function getInitialState() {
    this.stock = null;

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
  _handlerLoad: function _handlerLoad(event) {
    var repo = this.inputRepo.getValue();
    var requestType = this.props.requestType;

    this.props.onLoad({ repo: repo, requestType: requestType });
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
      _Dialog2.default,
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
      })
    );
  }
});

exports.default = DialogType1;
//# sourceMappingURL=D:\_Dev\_React\_Library_Watch\js\components\dialogs\DialogType1.js.map