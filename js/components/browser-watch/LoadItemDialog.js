'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChartActions = require('../../flux/actions/ChartActions');

var _ChartActions2 = _interopRequireDefault(_ChartActions);

var _Type = require('../../constants/Type');

var _ModalDialog = require('../zhnMoleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _ToolBarButton = require('../header/ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;
//import ChartType from '../../constants/ChartType';

var DIALOG_CAPTION = "Load Watch Item";

var STYLE = {
  ITEM_DESCRIPTION: {
    fontWeight: 'bold',
    color: 'gray',
    paddingTop: '8px',
    paddingLeft: '8px',
    paddingRight: '8px'
  }
};

var LoadItemDialog = _react2.default.createClass({
  displayName: 'LoadItemDialog',

  propTypes: {
    isShow: _react2.default.PropTypes.bool.isRequired,
    data: _react2.default.PropTypes.object.isRequired,
    store: _react2.default.PropTypes.object,
    onClose: _react2.default.PropTypes.func.isRequired
  },

  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  },
  _handlerLoad: function _handlerLoad() {
    var _props = this.props,
        data = _props.data,
        onClose = _props.onClose;

    _ChartActions2.default.loadStock(_Type.ChartType.WATCH_LIST, _Type.BrowserType.WATCH_LIST, data);
    onClose();
  },
  _handlerClose: function _handlerClose() {
    this.props.onClose();
  },
  _renderDate: function _renderDate(date) {
    return _react2.default.createElement(
      'div',
      { style: Object.assign({}, styles.rowDiv, { lineHeight: 2 }), key: '3' },
      _react2.default.createElement(
        'span',
        { style: styles.labelSpan },
        'Date:'
      ),
      _react2.default.createElement(
        'span',
        { style: { fontWeight: 'bold' } },
        date
      )
    );
  },
  render: function render() {
    var _props2 = this.props,
        isShow = _props2.isShow,
        data = _props2.data,
        caption = data.caption,
        descr = data.descr,
        date = data.date,
        _commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
      key: 'a',
      type: 'TypeC',
      caption: 'Load',
      onClick: this._handlerLoad
    })];

    return _react2.default.createElement(
      _ModalDialog2.default,
      {
        caption: DIALOG_CAPTION,
        isShow: isShow,
        commandButtons: _commandButtons,
        onClose: this._handlerClose
      },
      _react2.default.createElement(
        'div',
        { style: Object.assign({}, styles.rowDiv, { lineHeight: 1.5 }), key: '1' },
        _react2.default.createElement(
          'span',
          { style: STYLE.ITEM_DESCRIPTION },
          descr
        )
      ),
      _react2.default.createElement(
        'div',
        { style: Object.assign({}, styles.rowDiv, { lineHeight: 2 }), key: '2' },
        _react2.default.createElement(
          'span',
          { style: styles.labelSpan },
          'Item:'
        ),
        _react2.default.createElement(
          'span',
          { style: { fontWeight: 'bold' } },
          caption
        )
      ),
      date && this._renderDate(date)
    );
  }
});

exports.default = LoadItemDialog;
//# sourceMappingURL=LoadItemDialog.js.map