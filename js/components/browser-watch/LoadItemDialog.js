'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//import DateUtils from '../../utils/DateUtils';

//import ChartType from '../../constants/ChartType';

//import DatesFragment from '../DatesFragment';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WithValidation = require('../dialogs/WithValidation');

var _WithValidation2 = _interopRequireDefault(_WithValidation);

var _ChartActions = require('../../flux/actions/ChartActions');

var _ChartActions2 = _interopRequireDefault(_ChartActions);

var _Type = require('../../constants/Type');

var _ModalDialog = require('../zhnMoleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _ToolBarButton = require('../header/ToolBarButton');

var _ToolBarButton2 = _interopRequireDefault(_ToolBarButton);

var _ValidationMessagesFragment = require('../zhnMoleculs/ValidationMessagesFragment');

var _ValidationMessagesFragment2 = _interopRequireDefault(_ValidationMessagesFragment);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;

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

var LoadItemDialog = _react2.default.createClass(_extends({
  displayName: 'LoadItemDialog'
}, _WithValidation2.default, {
  propTypes: {
    isShow: _react2.default.PropTypes.bool.isRequired,
    data: _react2.default.PropTypes.object.isRequired,
    store: _react2.default.PropTypes.object,
    onClose: _react2.default.PropTypes.func.isRequired
  },

  getInitialState: function getInitialState() {
    //const { fromDate, initToDate, onTestDate } = this.props.data
    //, _initFromDate = (fromDate) ? fromDate : DateUtils.getFromDate(2)
    //, _initToDate = (initToDate) ? initToDate : DateUtils.getToDate()
    //, _onTestDate = (onTestDate) ? onTestDate : DateUtils.isValidDate

    return {
      //initFromDate : _initFromDate,
      //initToDate : _initToDate,
      //onTestDate : _onTestDate,
      validationMessages: []
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  },
  _handlerLoad: function _handlerLoad() {
    var validationMessages = this._getValidationMessages();
    if (validationMessages.isValid) {
      var _props = this.props;
      var data = _props.data;
      var onClose = _props.onClose;
      //, { title, subtitle, caption, columnName, dataColumn, seriaColumnNames } = data
      //, { fromDate, toDate } = this.datesFragment.getValues()
      //, option = {
      //   title : title,
      //   subtitle : subtitle,
      //   value : caption,
      //   stock: caption,
      //   fromDate: fromDate,
      //   toDate: toDate,
      //   columnName,
      //   dataColumn,
      //   seriaColumnNames
      //}
      //ChartActions.loadStock(ChartType.WATCH_LIST, BrowserType.WATCH_LIST, option);

      _ChartActions2.default.loadStock(_Type.ChartType.WATCH_LIST, _Type.BrowserType.WATCH_LIST, data);
      onClose();
    }
    this._updateValidationMessages(validationMessages);
  },
  _getValidationMessages: function _getValidationMessages() {
    var msg = [];
    //const { isValid, datesMsg } = this.datesFragment.getValidation();
    //if (!isValid) { msg = msg.concat(datesMsg); }
    msg.isValid = msg.length === 0 ? true : false;
    return msg;
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
    var _props2 = this.props;
    var isShow = _props2.isShow;
    var data = _props2.data;
    var caption = data.caption;
    var descr = data.descr;
    var date = data.date;
    var validationMessages = this.state.validationMessages;
    var _commandButtons = [_react2.default.createElement(_ToolBarButton2.default, {
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
      date && this._renderDate(date),
      _react2.default.createElement(_ValidationMessagesFragment2.default, {
        key: '4',
        validationMessages: validationMessages
      })
    );
  }
}));

exports.default = LoadItemDialog;
//# sourceMappingURL=D:\_Dev\_React\_Template_2\js\components\browser-watch\LoadItemDialog.js.map