'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ChartActions = require('../../flux/actions/ChartActions');

var _ChartActions2 = _interopRequireDefault(_ChartActions);

var _Type = require('../../constants/Type');

var _ModalDialog = require('../zhnMoleculs/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _DialogStyles = require('../styles/DialogStyles');

var _DialogStyles2 = _interopRequireDefault(_DialogStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _DialogStyles2.default;
//import ChartType from '../../constants/ChartType';

//import PropTypes from 'prop-types'

var DIALOG_CAPTION = "Load Watch Item";

var S = {
  ITEM_DESCRIPTION: {
    fontWeight: 'bold',
    color: 'gray',
    paddingTop: '8px',
    paddingLeft: '8px',
    paddingRight: '8px'
  },
  LH_2: {
    lineHeight: 2
  },
  LH_1_5: {
    lineHeight: 1.5
  },
  BOLD: {
    fontWeight: 'bold'
  }
};

var LoadItemDialog = function (_Component) {
  (0, _inherits3.default)(LoadItemDialog, _Component);

  /*
   static propTypes = {
     isShow  : PropTypes.bool.isRequired,
     data    : PropTypes.object.isRequired,
     store   : PropTypes.object,
     onClose : PropTypes.func.isRequired
   },
   */
  function LoadItemDialog(props) {
    (0, _classCallCheck3.default)(this, LoadItemDialog);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LoadItemDialog.__proto__ || Object.getPrototypeOf(LoadItemDialog)).call(this, props));

    _this._handlerLoad = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          onClose = _this$props.onClose;

      _ChartActions2.default.loadStock(_Type.ChartType.WATCH_LIST, _Type.BrowserType.WATCH_LIST, data);
      onClose();
    };

    _this._handlerClose = function () {
      _this.props.onClose();
    };

    _this._renderDate = function (date) {
      return _react2.default.createElement(
        'div',
        { style: (0, _extends3.default)({}, styles.rowDiv, S.LH_2), key: '3' },
        _react2.default.createElement(
          'span',
          { style: styles.labelSpan },
          'Date:'
        ),
        _react2.default.createElement(
          'span',
          { style: S.BOLD },
          date
        )
      );
    };

    _this._commandButtons = [_react2.default.createElement(_FlatButton2.default, {
      key: 'load',
      isPrimary: true,
      caption: 'Load',
      onClick: _this._handlerLoad
    })];
    return _this;
  }

  (0, _createClass3.default)(LoadItemDialog, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          data = _props.data,
          caption = data.caption,
          descr = data.descr,
          date = data.date;


      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          caption: DIALOG_CAPTION,
          isShow: isShow,
          commandButtons: this._commandButtons,
          onClose: this._handlerClose
        },
        _react2.default.createElement(
          'div',
          { style: (0, _extends3.default)({}, styles.rowDiv, S.LH_1_5), key: '1' },
          _react2.default.createElement(
            'span',
            { style: S.ITEM_DESCRIPTION },
            descr
          )
        ),
        _react2.default.createElement(
          'div',
          { style: (0, _extends3.default)({}, styles.rowDiv, S.LH_2), key: '2' },
          _react2.default.createElement(
            'span',
            { style: styles.labelSpan },
            'Item:'
          ),
          _react2.default.createElement(
            'span',
            { style: S.BOLD },
            caption
          )
        ),
        date && this._renderDate(date)
      );
    }
  }]);
  return LoadItemDialog;
}(_react.Component);

exports.default = LoadItemDialog;
//# sourceMappingURL=LoadItemDialog.js.map